export function telefoneNacional(texto: string): string {
  let d = texto.replace(/\D/g, "");
  if (/^55\d{10,11}$/.test(d)) d = d.slice(2);
  if (/^0\d{10,11}$/.test(d)) d = d.slice(1);
  return d;
}
