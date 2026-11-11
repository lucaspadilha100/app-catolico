# Formato de saída (JSON, uma lista; um item por unidade pastoral)

```json
[{
  "id_banco": "uuid da MATRIZ no banco, ou null se não existir",
  "nome": "nome oficial da unidade, sem a cidade. Ex.: 'Paróquia de Nossa Senhora da Conceição', 'Área Missionária Santa Teresinha e Nossa Senhora das Graças', 'Quase-Paróquia São João Paulo II', 'Catedral de Sant'Ana'",
  "categoria": "paroquia | quase_paroquia | area_pastoral | area_missionaria | catedral | santuario | basilica",
  "cidade": "cidade da matriz",
  "padroeiro": "",
  "contatos": {"telefone": "só dígitos com DDD", "whatsapp": "só dígitos com DDD", "instagram": "usuário sem @", "site": "", "email": ""},
  "igrejas": [{
    "id_banco": "uuid desta igreja no banco ou null (igreja nova)",
    "nome": "Igreja Matriz de Nossa Senhora da Conceição | Capela de São Bento | Comunidade de Retiro",
    "tipo": "matriz | capela | comunidade | santuario",
    "cidade": "", "localidade": "bairro, sítio ou distrito", "endereco": "",
    "horarios": [{"tipo": "missa | confissao | adoracao", "dia_semana": 0, "hora": "07:30", "semanas": null, "observacao": ""}],
    "nao_cabe": "horários que não cabem no formato, em texto (ex.: 'todo dia 3 às 19h')"
  }],
  "fontes": [{"url": "", "data": "AAAA-MM-DD, AAAA-MM ou ''", "o_que": "horarios | contatos"}],
  "confianca": "alta | media | baixa",
  "observacao": "curta, em português"
}]
```

Regras
- dia_semana: 0 = domingo, 1 = segunda ... 6 = sábado. "Seg a sex" vira 5 linhas. "Sábado e domingo", 2 linhas.
- "1ª sexta-feira do mês": dia_semana 5, semanas [1]. "1º e 3º domingo": semanas [1,3]. Semanas só de 1 a 5.
- hora sempre "HH:MM" (24h). "19h" = "19:00"; "7h30" = "07:30"; "11" sem h = "11:00".
- observacao do horário: até 60 caracteres, só o necessário ("Missa das crianças", "Missa votiva ao Sagrado Coração"). Sem travessão.
- A primeira igreja da lista é a matriz (tipo "matriz", ou "santuario" quando a matriz é santuário).
- Nada inventado. Sem fonte, sem horário. Se a fonte só dá o domingo, só o domingo.
- id_banco: procure no arquivo de igrejas do banco (mesmo nome e mesma cidade). Na dúvida, null.
- Nomes sem parênteses e sem a cidade: "Capela de São Francisco" com localidade "Cruzeiro dos Pagãos".
