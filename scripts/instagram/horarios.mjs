export const HORARIOS = [
  { slot: "evangelho", brasilia: "05:40", cron: "40 8 * * *", recuperar: true },
  { slot: "data", brasilia: "07:10", cron: "10 10 * * *", recuperar: true },
  { slot: "santos", brasilia: "08:40", cron: "40 11 * * *", recuperar: true },
  { slot: "novena", brasilia: "10:10", cron: "10 13 * * *", recuperar: true },
  { slot: "reflexao", brasilia: "11:10", cron: "10 14 * * *", recuperar: true },
  { slot: "angelus", brasilia: "11:50", cron: "50 14 * * *", recuperar: false },
  { slot: "misericordia", brasilia: "14:50", cron: "50 17 * * *", recuperar: false },
  { slot: "curiosidade", brasilia: "17:40", cron: "40 20 * * *", recuperar: true },
  { slot: "terco", brasilia: "20:10", cron: "10 23 * * *", recuperar: true },
  { slot: "noite", brasilia: "21:40", cron: "40 0 * * *", recuperar: false },
];

export const RECUPERAR_ATE_HORAS = 4;

export const ATRASO_MAXIMO = 60;

export const minutosDe = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
