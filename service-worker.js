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
    "revision": "427d54e7c070fef7c15d499db631c8b0"
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
    "url": "assets/js/12.3f241eeb.js",
    "revision": "2558768c5b23f2850eb3b56601acdc30"
  },
  {
    "url": "assets/js/13.d77ce936.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.ee31de56.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.7bc3218e.js",
    "revision": "4f5927e7ad60a5ee25788ca5ed00f220"
  },
  {
    "url": "assets/js/18.526efccc.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.f54fc6bf.js",
    "revision": "65aea17655205a6a01be7c6a4baf605c"
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
    "revision": "cd9bded513aeb0ec8a19d8d09e21a362"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7c600201c4f774cdfc34ec76c64f3273"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "eb2063d7c792d20406e3b4c509a12ad6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1b9b95f95d7ba7d1f20a6920eacc4e29"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6ee2db4970bde2415e56bf38d95518ea"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6aa5bf472ae07fee0c34018bd6b68d1c"
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
    "revision": "33b045ddfcb157e3b647ca77f98430e8"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c5efaf8ea750bb2fbebdbbbb36c3a59e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "65cce68a020bbfc00961bf9146f7c797"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "29fe3761c29f094987a132cbfc6ad34a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3a941f869a1f0f9afae16f8c81930461"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a636c590f88a6ae7188b330c8b107fd6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2850b2b57ceb2e05612cf71ed1504adf"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1b1ebc4f7ff791df6480294624718d73"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "960133213d4811156377e1397c0dc01a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5a843f5c8975dbf85e55655be48c7908"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0d21cf5747920df7d2e5653f5c290fa4"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c9f48163f4adb5904bc369be5303ca8a"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6310f397dce66226947b607b6ac8191"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "fce304c32a7c994f881623b5615bff88"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2fa99480bfd0a695f3e67f2108206649"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9c04b8285c32d4933979f1582348f642"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "a7518ed978dc9645ffaf69a50556bbe0"
  },
  {
    "url": "生活分享/life.html",
    "revision": "e8e549a353722d9386df940cfec556c9"
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
