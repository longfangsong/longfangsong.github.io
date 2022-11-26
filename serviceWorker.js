const blogCacheKey = "longfangsong-blog"
const assets = [
    "/",
    "/en",
    "/index.html",
    "/style.css",
    "/en/mem2reg-made-simple/"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(blogCacheKey).then(cache => {
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
