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
    "revision": "ef73ef06a09962a31c7158c84e805f0a"
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
    "url": "assets/js/12.e8b64efb.js",
    "revision": "9dbb53db712c229e1fa706dab75332a8"
  },
  {
    "url": "assets/js/13.47a3e01d.js",
    "revision": "acdcfff7a63349420d91f87c801a48fc"
  },
  {
    "url": "assets/js/14.d38ad00d.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.00a3f6a4.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
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
    "url": "assets/js/app.bf066e61.js",
    "revision": "29a82adc48a8c71144b160ee3ab3d8b3"
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
    "revision": "2ab6e1cf2c4bf3613d337e505fee7ce4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4250305c61833e17bbf0ab7ad01793f6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9982272c38adc6ade874821ac266820e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0496c304a7b91dc67e39bef4f676d03d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "50d3ce290213b005c6de5f032e877197"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "dd308c37db956ad8db0fe1105f1517f2"
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
    "revision": "e0b48c2148c68ac1084bee92ae72c452"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "38b62ebbe5aec9c653028f1f1f43b9d0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d766813a5a07c03b1e14f27eb0eda9a5"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9b8d9e29869107d5423a7f348d71d1c3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3cb4266d315b8edd1042ef4a22a3f1c5"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "24edba0838e33d4a74d049d22f8a6eb4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ae42ff870d31f49c21287e97fec9cd11"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bbb6e33af35c609edefc6db34d6e5d32"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6a68049afeb9daf37a57d8219186faa5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4f356f1eaa84438bd883210eef296b56"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "34f00b4bee6d8c04cd416e68fcc4cf79"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "924f24ad658e25ea42eb35ced75729f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "85f309b36c494ea3cfc9afd37328e176"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "acda17c751793bbd757cda1b96f10aaf"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "ef4823e4b0eb09d7f449e7c9c9c7919c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "14ecb61735b19b7be6fdd2ff6447e010"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "eccfdb7d4ab25ec5199eb560e7447322"
  },
  {
    "url": "生活分享/life.html",
    "revision": "4839e95352bbc0b851f320104ce6b30e"
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
