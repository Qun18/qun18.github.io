/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "26e0911c542ac5d4e11eaa5f4189c803"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.377affb4.js",
    "revision": "3be5c98e32f1e46bcf940fe225701609"
  },
  {
    "url": "assets/js/10.7d3b4a8b.js",
    "revision": "e1675544558bf471cac5980848156ea9"
  },
  {
    "url": "assets/js/11.e31419be.js",
    "revision": "014f49a5e4cf80f1ef921b2a3622eac6"
  },
  {
    "url": "assets/js/12.a502440a.js",
    "revision": "76a68ca257f880dd46e996652e7a6d45"
  },
  {
    "url": "assets/js/13.a912365b.js",
    "revision": "be3611cdff46e36d7057249212152dc3"
  },
  {
    "url": "assets/js/14.8e7a191e.js",
    "revision": "ececb7b1f746ccba84b49768dd2c5f82"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.131a043d.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.09a9298a.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.85d667b0.js",
    "revision": "2f98574d23998e4192e127bcb7188b70"
  },
  {
    "url": "assets/js/4.259631bb.js",
    "revision": "929d15f1eb637dd020d2e6d8a779329a"
  },
  {
    "url": "assets/js/5.3c7bc9ee.js",
    "revision": "08d857a37d6c21c269db029e29ed57f6"
  },
  {
    "url": "assets/js/6.783e34e1.js",
    "revision": "a74e582518f58eb1034fc855bc6b506c"
  },
  {
    "url": "assets/js/7.ad36110d.js",
    "revision": "1a29d50f75cd09087555e0c57dfcaf88"
  },
  {
    "url": "assets/js/8.e21f52f7.js",
    "revision": "711b16945cdd0d83ca3761f38fbfda74"
  },
  {
    "url": "assets/js/9.7fd376bc.js",
    "revision": "b43e8bd1a243d17dc15821e6e43dc6b5"
  },
  {
    "url": "assets/js/app.9d722813.js",
    "revision": "369d53769304b456151df5f92c5362c2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.1e73e504.js",
    "revision": "42c68ae816be8ddaeefbf779158d148b"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "6038f1322873d5792d46e1b4cf50c305"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c005ff567eb2ea7dcf9319ea9175d31d"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3480ba8e320171962cd4e8ec9f7120c6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "943c542ac0fe1a2b60ac2d9c3e88ee73"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "db75a10856d08f2d4024098ca99955e3"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "cd059247bc804d12f537dcaf27e66ce1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "d86a932ae26f1f0d6151aa1c4f04cb5d"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "47cfd8c93ebe8b0e2bb1c65ef1c0b2e2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1fbaa0087faeb8ab5e2f0679025f7b18"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0bcd8851a64f51fc1060f44bfbf378d1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "294dbcae66881aded59dded7dde77aba"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a0f2fff399ba7b3a883334c190180dd5"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "089cb19c8da34c8cc6489599c5ee1c2e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "93e07cad345871d4199d96e1a6d3b8e5"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4757b971596ca03aab02a086a1f08f68"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "85203b0b8fb682722058b494ffc72d58"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ce4cac60975103c61ee535366ad1c716"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f41dc7f63c67d6d5ae4a5968f31caa54"
  },
  {
    "url": "timeline/index.html",
    "revision": "9835537ddc22b5e7f76df95822759374"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4d558fab9f4f09acf209dfc6e3421cb5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3c94883c4c2bd4202bc56ce5280c919a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "310e0dfc01d212362471cd15e68a18e9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bd12d05a290e4aaf350d1fa9cde93d6d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8117b8f274eb6cb5711ec8d0b158ed83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
