alter table public.paroquias add column if not exists fonte text not null default '';

alter table public.paroquias drop constraint if exists paroquias_fonte_check;
alter table public.paroquias add constraint paroquias_fonte_check check (char_length(fonte) <= 120);

alter table public.horarios drop constraint if exists horarios_observacao_check;
alter table public.horarios add constraint horarios_observacao_check check (char_length(observacao) <= 240);

alter table public.horarios drop constraint if exists horarios_semanas_check;
alter table public.horarios add constraint horarios_semanas_check check (semanas <@ array[1, 2, 3, 4, 5, 6]::smallint[]);

create or replace function public.agenda_perto(
  p_lat double precision,
  p_lng double precision,
  p_inicio timestamp,
  p_horas integer default 12,
  p_tipo text default 'missa',
  p_raio_km double precision default 15,
  p_limite integer default 40
)
returns table (
  paroquia_id uuid, nome text, bairro text, cidade text, distancia_km double precision,
  quando timestamp, ate time, observacao text
)
language sql
stable
security invoker
set search_path = ''
as $fn$
  with perto as (
    select * from public.buscar_paroquias('', p_lat, p_lng, p_raio_km, 100, 0)
  ),
  dias as (
    select d::date as dia from generate_series(p_inicio::date, (p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168)))::date, interval '1 day') d
  ),
  candidatos as (
    select h.*, d.dia
    from dias d
    join public.horarios h on h.paroquia_id in (select id from perto) and h.tipo = p_tipo
      and (h.data = d.dia or (h.data is null and h.dia_semana = extract(dow from d.dia)
        and (h.semanas is null
          or ((extract(day from d.dia)::int - 1) / 7 + 1)::smallint = any (h.semanas)
          or (6::smallint = any (h.semanas) and extract(month from d.dia + 7) <> extract(month from d.dia)))))
  ),
  valendo as (
    select c.* from candidatos c
    where c.data is not null
      or not exists (select 1 from public.horarios e where e.paroquia_id = c.paroquia_id and e.tipo = c.tipo and e.data = c.dia)
  )
  select v.paroquia_id, p.nome, p.bairro, p.cidade, p.distancia_km, (v.dia + v.hora)::timestamp, v.hora_fim, v.observacao
  from valendo v join perto p on p.id = v.paroquia_id
  where not v.cancelado
    and (v.dia + coalesce(v.hora_fim, v.hora)) >= p_inicio
    and (v.dia + v.hora) <= p_inicio + make_interval(hours => least(greatest(p_horas, 1), 168))
  order by 6, 5
  limit least(greatest(p_limite, 1), 100);
$fn$;

revoke execute on function public.agenda_perto(double precision, double precision, timestamp, integer, text, double precision, integer) from public;
grant execute on function public.agenda_perto(double precision, double precision, timestamp, integer, text, double precision, integer) to anon, authenticated;
