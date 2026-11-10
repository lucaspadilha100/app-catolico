const ehIos = () => typeof navigator !== "undefined" && (/iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

export function linkComoChegar(destino: string): string {
  return ehIos() ? `https://maps.apple.com/?daddr=${destino}` : `https://www.google.com/maps/dir/?api=1&destination=${destino}`;
}
