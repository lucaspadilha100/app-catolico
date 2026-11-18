import numpy as np, wave, sys
SR = 44100
saida = sys.argv[1]
def nota(n): return 440 * 2 ** ((n - 69) / 12)
ACORDES = [[50, 62, 66, 69], [47, 59, 62, 66], [43, 55, 62, 67], [45, 57, 61, 64], [50, 62, 66, 69], [43, 55, 59, 67], [45, 57, 62, 66], [50, 62, 66, 69]]
DUR = 5.0
total = int(SR * DUR * len(ACORDES)) + SR * 4
rng = np.random.default_rng(7)
out = np.zeros((total, 2))
t = np.arange(int(SR * (DUR + 2))) / SR
env = np.minimum(1, t / 1.6) * np.minimum(1, np.maximum(0, (DUR + 2 - t) / 2.0))
for i, ac in enumerate(ACORDES):
    ini = int(i * DUR * SR)
    for j, n in enumerate(ac):
        f = nota(n)
        for lado, det in ((0, 0.9993), (1, 1.0007)):
            s = sum(a * np.sin(2 * np.pi * f * h * det * t + rng.uniform(0, 6.28)) for h, a in ((1, 1.0), (2, 0.42), (3, 0.18), (4, 0.09), (6, 0.04)))
            out[ini:ini + len(t), lado] += s * env * (0.9 if j == 0 else 0.55)
cauda = np.exp(-np.arange(int(SR * 3.2)) / (SR * 0.9)) * rng.standard_normal(int(SR * 3.2))
for c in range(2):
    seco = out[:, c]
    n = len(seco) + len(cauda)
    molhado = np.fft.irfft(np.fft.rfft(seco, n) * np.fft.rfft(cauda * (1 if c else 0.97), n), n)[: len(seco)]
    out[:, c] = 0.55 * seco + 0.45 * molhado / (np.abs(molhado).max() + 1e-9) * np.abs(seco).max()
out /= np.abs(out).max()
out *= 0.32
fade = int(SR * 3)
out[-fade:] *= np.linspace(1, 0, fade)[:, None]
pcm = (out * 32767).astype("<i2")
with wave.open(saida, "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print(len(out) / SR, "s")
