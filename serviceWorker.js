const blogCacheKey = "longfangsong-blog";

const staticAssets = [
    "/style.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
    "https://polyfill.io/v3/polyfill.min.js?features=es6",
    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
];

const assets = ["/", "/2pc/", "/about/", "/algebraic-structures/", "/alternating-current/", "/archive/", "/automata-1/", "/automata-2/", "/build-a-compiler-in-the-easiest-way/", "/cap-theorem/", "/clocks-in-distributed-system/", "/contention-aware-lock-scheduling/", "/distributed-system/", "/en/", "/en/about/", "/en/archive/", "/en/build-a-compiler-in-the-easiest-way/", "/en/category-theory-1/", "/en/decidable-in-agda/", "/en/elementary-geometry-in-agda/", "/en/hello-zola/", "/en/hottest-notes-hott-1/", "/en/hottest-notes-hott-2/", "/en/hottest-notes-hott-3/", "/en/hottest-notes-hott-4/", "/en/hottest-notes-hott-5/", "/en/hottest-notes-hott-6/", "/en/links/", "/en/mem2reg-made-simple/", "/en/page/1/", "/en/page/2/", "/en/restart-math-logic-6/", "/en/restart-math-logic-7/", "/en/restart-math-logic-8/", "/flex-layout/", "/fpga-sys-1/", "/hack-riscv-isa/", "/hello-zola/", "/inline-asm-cheatsheet/", "/links/", "/ll1/", "/lr0/", "/macos-fpga/", "/midi/", "/mitchell-merritt-algorithm/", "/page/1/", "/page/2/", "/page/3/", "/parsing-combinator/", "/resistor-value/", "/restart-math-logic-1/", "/restart-math-logic-2/", "/restart-math-logic-3/", "/restart-math-logic-4/", "/restart-math-logic-5/", "/riscv-rocc/", "/shift-reduce/", "/tags/", "/tags/agda/", "/tags/bian-cheng-yu-yan-li-lun/", "/tags/bian-yi-yuan-li/", "/tags/cheatsheet/", "/tags/compiler/", "/tags/compiling/", "/tags/css/", "/tags/dian-lu/", "/tags/fen-bu-shi-xi-tong/", "/tags/fpga/", "/tags/h5app/", "/tags/huan-jing-pei-zhi/", "/tags/hui-bian/", "/tags/ji-suan-ji-ke-xue-ji-chu/", "/tags/macos/", "/tags/math/", "/tags/mathematical-logic/", "/tags/notes/", "/tags/optimization/", "/tags/plt/", "/tags/qian-duan/", "/tags/risc-v/", "/tags/shu-ju-ku/", "/tags/shu-li-luo-ji/", "/tags/shu-xue/", "/tags/ti-xi-jie-gou/", "/tags/wu-li/", "/tags/zi-dong-ji/", "/tags/zola/", "/why-lean-proof/"];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(blogCacheKey).then(cache => {
            cache.addAll(staticAssets);
            cache.addAll(assets);
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
