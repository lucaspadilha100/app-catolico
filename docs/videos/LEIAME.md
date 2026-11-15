# Vídeos (Assistir): como publicar a função

A tabela e o agendamento entram sozinhos com a migração `20261212004700_videos.sql`.
Falta só a função, que se cola no painel do Supabase:

1. supabase.com → projeto → **Edge Functions** → **Deploy a new function** → **Via Editor**.
2. Nome: `videos` (exatamente assim).
3. Apague o conteúdo do `index.ts` do editor e cole o arquivo `docs/videos/index.ts` inteiro.
4. **Deploy**.
5. Abra a função → **Details** → desligue **Verify JWT** (ou "Enforce JWT Verification") e salve.
6. Teste: abra no navegador `https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/videos`.
   Deve aparecer algo como `{"encontrados":5,"falhas":[]}`. Daí em diante ela roda sozinha a cada 30 minutos.

## Canal novo

É um INSERT em `canais_video` (SQL Editor), com as regras do título:

```sql
insert into public.canais_video (id, nome, youtube_id, regras, ordem) values
  ('padre-exemplo', 'Padre Exemplo', 'UCxxxxxxxxxxxxxxxxxxxxxx',
   '[{"tipo": "homilia", "contem": ["Homilia"], "exigeData": true}]', 4);
```

- `tipo`: `homilia`, `missa` ou `terco`.
- `contem`: o vídeo entra se o título tiver uma dessas palavras.
- `exigeData`: só entra se o título trouxer a data (use quando o canal publica antes do dia).
- Homilia com passagem no título, como "(Mateus 25, 14-30)", só entra se a passagem for uma das leituras do dia.
- Vídeo errado: o administrador toca em **Esconder** na tela Assistir.
