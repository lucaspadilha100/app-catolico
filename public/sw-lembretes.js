self.addEventListener("push", (evento) => {
  let aviso = { titulo: "Santinho", corpo: "", url: "/" };
  try {
    aviso = Object.assign(aviso, evento.data ? evento.data.json() : {});
  } catch (e) {}
  evento.waitUntil(
    self.registration.showNotification(aviso.titulo, {
      body: aviso.corpo,
      icon: "/icone-192.png",
      badge: "/favicon-santinho-48.png",
      tag: aviso.tipo || "lembrete",
      data: { url: aviso.url || "/" },
    }),
  );
});

self.addEventListener("notificationclick", (evento) => {
  evento.notification.close();
  const url = new URL((evento.notification.data && evento.notification.data.url) || "/", self.location.origin).href;
  evento.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((janelas) => {
      for (const j of janelas) {
        if ("focus" in j) {
          j.navigate(url);
          return j.focus();
        }
      }
      return self.clients.openWindow(url);
    }),
  );
});
