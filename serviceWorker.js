const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/Animesh_Rawat_resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/hacker-profile.png",
  "/assets/img/mt-fuji.jpg",
  "/assets/img/travel-pic3.png",
  "/assets/img/skills/angular.svg",
  "/assets/img/skills/vue.svg",
  "/assets/img/skills/react.svg",
  "/assets/img/skills/typescript.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/skills/sass.svg",
  "/assets/img/skills/firebase.svg",
  "/assets/img/portfolio/unichat.PNG",
  "/assets/img/portfolio/track-service-request.PNG",
  "/assets/img/portfolio/stopwatch.png",
  "/assets/img/portfolio/file-reader.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
