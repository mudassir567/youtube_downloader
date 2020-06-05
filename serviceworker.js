const youtubeDownloader = "yt-downloader-v1"
const assets = [
    "/",
  "/index.html",
  "/main.css",
  "/script.js",
  "/img/d9.png", 
  "/scripts/app.js"
]
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(youtubeDownloader).then(cache => {
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