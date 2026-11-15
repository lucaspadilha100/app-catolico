insert into public.canais_video (id, nome, youtube_id, regras, ordem) values
  ('padre-reginaldo-manzotti', 'Padre Reginaldo Manzotti', 'UCLOqStDCKZNvN_8Oqu2emGA',
   '[{"tipo": "homilia", "contem": ["EVANGELHO DO DIA"], "exigeData": true}, {"tipo": "missa", "contem": ["SANTA MISSA"], "exigeData": true}, {"tipo": "terco", "contem": ["TERÇO DAS SANTAS CHAGAS"], "exigeData": true}]', 4)
on conflict (id) do nothing;
