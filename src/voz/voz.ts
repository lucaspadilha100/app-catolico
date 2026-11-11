import { Capacitor } from "@capacitor/core";

let falando = 0;

export const vozDisponivel = () => Capacitor.isNativePlatform() || (typeof window !== "undefined" && "speechSynthesis" in window);

function vozDoNavegador(): SpeechSynthesisVoice | undefined {
  const vozes = window.speechSynthesis.getVoices();
  return vozes.find((v) => v.lang === "pt-BR" && /luciana|google/i.test(v.name)) ?? vozes.find((v) => v.lang === "pt-BR") ?? vozes.find((v) => v.lang.startsWith("pt"));
}

export async function falar(texto: string, velocidade = 0.95): Promise<void> {
  const minha = ++falando;
  if (Capacitor.isNativePlatform()) {
    const { TextToSpeech } = await import("@capacitor-community/text-to-speech");
    await TextToSpeech.speak({ text: texto, lang: "pt-BR", rate: velocidade, pitch: 1, volume: 1, category: "playback" });
    return;
  }
  await new Promise<void>((ok) => {
    const u = new SpeechSynthesisUtterance(texto);
    u.lang = "pt-BR";
    u.rate = velocidade;
    const voz = vozDoNavegador();
    if (voz) u.voice = voz;
    u.onend = () => ok();
    u.onerror = () => ok();
    window.speechSynthesis.speak(u);
    const vigia = setInterval(() => {
      if (minha !== falando || !window.speechSynthesis.speaking) {
        clearInterval(vigia);
        ok();
      }
    }, 400);
  });
}

export async function calar() {
  falando++;
  if (Capacitor.isNativePlatform()) {
    const { TextToSpeech } = await import("@capacitor-community/text-to-speech");
    await TextToSpeech.stop().catch(() => {});
    return;
  }
  window.speechSynthesis?.cancel();
}
