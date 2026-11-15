update public.canais_video set youtube_id = 'UCumLnAQDlMZ_CVbuGNwkgBg', nome = 'TV Pai Eterno'
where id = 'tv-pai-eterno' and youtube_id <> 'UCumLnAQDlMZ_CVbuGNwkgBg';

update public.transmissoes set video_id = null, titulo = '', desde = null where canal_id = 'tv-pai-eterno';

insert into public.canais_video (id, nome, youtube_id, regras, ordem, tv) values
  ('rede-vida', 'Rede Vida', 'UCi6mmUqfytngFLXbhPUDd1A', '[]', 15, true),
  ('tv-evangelizar', 'TV Evangelizar', 'UCBpwS_TPjdLt_FLgl0ZtZAg',
   '[{"tipo": "homilia", "contem": ["Homilia |"], "exigeData": true}, {"tipo": "missa", "contem": ["Santa Missa"], "exigeData": true}, {"tipo": "terco", "contem": ["Terço Mariano"], "exigeData": true}]', 16, true)
on conflict (id) do nothing;
