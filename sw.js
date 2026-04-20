self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("deadtime-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});
``
