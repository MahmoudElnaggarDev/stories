const stories = "Stories"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/images/icon-192x192.png",
  "/images/icon-256x256.png",
  "/images/icon-384x384.png",
  "/images/icon-512x512.png",
  "/images/icon.png",
  "/js/html2canvas.min.js",
  "/fonts/hafs.ttf",
  "/fonts/ibm.ttf",
  "/fonts/naskh.ttf",
  "/fonts/noto.ttf",
  "/fonts/pdms.ttf",
  "/fonts/qalam.ttf"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(stories).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})