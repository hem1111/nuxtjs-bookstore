(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(t,e,o){var content=o(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("0bf1c128",content,!0,{sourceMap:!1})},190:function(t,e,o){var content=o(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("161f9808",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("17846b7c",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{pointer:0,fade:!1,show:!1,images:[{src:"https://cdn.discordapp.com/attachments/730070699204411458/732186710850666526/carousel.png",title:"BOOK STORE : MISSION STATEMENT",content:"Click or press the order now button to place your order"}]}},created:function(){this.next()},methods:{showForm:function(){},closeForm:function(){},next:function(){var t=this;this.fade=!1,this.pointer=(this.pointer+1)%this.images.length,setTimeout((function(){return t.fade=!0}),25)},set:function(i){var t=this;this.fade=!1,this.pointer=i-1,setTimeout((function(){return t.fade=!0}),25)},prev:function(){var t=this;this.fade=!1,0==this.pointer&&(this.pointer=this.images.length),this.pointer=(this.pointer-1)%this.images.length,setTimeout((function(){return t.fade=!0}),25)}}},r=(o(195),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"carousel"},t._l(t.images,(function(image,e){return o("div",{key:e,staticClass:"carousel-items"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.pointer==e,expression:"pointer==index"}],staticClass:"carousel-item",class:t.pointer==e&&t.fade?"fadeIn":"",style:{backgroundImage:"url("+image.src+")"}},[o("section",{staticClass:"hero is-medium is-overlay"},[o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container has-text-centered"},[o("h1",{staticClass:"title is-size-2 is-size-3-mobile",domProps:{innerHTML:t._s(image.title)}}),t._v(" "),o("h2",{staticClass:"subtitle has-text-white"},[t._v(t._s(image.content))]),t._v(" "),o("button",{staticClass:"button is-info is-radiusless is-medium",on:{click:function(e){return t.$store.commit("show")}}},[o("b",[t._v("BUY NOW!")])])])])])])])})),0)])}),[],!1,null,"b601b3bc",null);e.default=component.exports},193:function(t,e,o){"use strict";o.r(e);var n={name:"Books",data:function(){return{books:[{id:1,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:2,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:3,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:4,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",price:"1800",authorName:"Paulo Coelho",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:5,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:6,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:7,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"},{id:8,img:"https://cdn.discordapp.com/attachments/730070699204411458/732179475969867796/alchemist.jpg",name:"The Alchemist",authorName:"Paulo Coelho",price:"1800",desc:"The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found"}]}}},r=(o(197),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.books,(function(e,n){return o("div",{key:n,staticClass:"column is-4-tablet is-3-desktop"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-image"},[o("figure",{staticClass:"image is-4by4"},[o("img",{attrs:{src:e.img,alt:e.name}})])]),t._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-content"},[o("p",[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"subtitle"},[t._v("Author Name: "+t._s(e.authorName))]),t._v(" "),o("div",{staticClass:"content"},[t._v(t._s(e.desc))]),t._v(" "),t._m(1,!0)])])])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category"},[e("h1",{staticClass:"is-size-5"},[this._v("Trending Books")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"button is-info is-radiusless"},[e("b",[this._v("Add to Order")])])}],!1,null,"5f0d41dc",null);e.default=component.exports},194:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{Services:[{icon:"la-money-bill-wave",title:"10% DISCOUNT",content:"On Bulk Purchase "},{icon:"la-paper-plane",title:"VERY FAST & FREE DELIVERY",content:"Within Kathmandu Valley"},{icon:"la-thumbs-up",title:"CASH ON DELIVERY",content:"We Support Diverse Payment Gateways"}]}}},r=(o(199),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"columns is-multiline"},t._l(t.Services,(function(e,n){return o("div",{key:n,staticClass:"column is-4-tablet is-4-desktop"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-content"},[o("i",{staticClass:"las",class:e.icon}),t._v(" "),o("h1",{staticClass:"is-size-5"},[t._v(t._s(e.title))]),t._v(" "),o("h1",{staticClass:"is-size-6 subtitle"},[t._v(t._s(e.content))])])])])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"services"},[e("h1",{staticClass:"is-size-5"},[this._v("Services")])])}],!1,null,"b14ee118",null);e.default=component.exports},195:function(t,e,o){"use strict";var n=o(189);o.n(n).a},196:function(t,e,o){(e=o(9)(!1)).push([t.i,".carousel[data-v-b601b3bc]{position:relative;background-color:#000}.carousel .carousel-item[data-v-b601b3bc]{opacity:0;width:100vw;height:412px;background-position:50%;background-size:cover;background-repeat:no-repeat}.carousel .carousel-item section[data-v-b601b3bc]{background-color:rgba(0,0,0,.65)}.carousel .carousel-item section .hero-body[data-v-b601b3bc]{padding-top:100px;display:flex;align-items:center}.carousel .carousel-item section .hero-body h1[data-v-b601b3bc]{color:#31acdf;margin-bottom:32px}.carousel .carousel-item section .hero-body button[data-v-b601b3bc]{position:absolute;z-index:2;left:0;right:0;margin:auto}.carousel .carousel-controls[data-v-b601b3bc]{z-index:0;position:absolute;display:flex;top:calc(50% - 24px);align-items:center;justify-content:space-between;width:100%}.carousel .carousel-controls i[data-v-b601b3bc]{font-size:48px;color:#fff;cursor:pointer}.carousel .carousel-controls i[data-v-b601b3bc]:first-child{margin-left:16px}.carousel .carousel-controls i[data-v-b601b3bc]:last-child{margin-right:16px}.carousel .carousel-indicator[data-v-b601b3bc]{position:absolute;display:flex;bottom:0;justify-content:center;width:100%;margin-bottom:24px}.carousel .carousel-indicator i[data-v-b601b3bc]{font-size:24px;color:#fff;cursor:pointer}.fadeIn[data-v-b601b3bc]{opacity:1!important;transition:opacity 1.5s}@media screen and (max-width:768px){.carousel-item[data-v-b601b3bc]{height:328px!important}.carousel-item section .hero-body[data-v-b601b3bc]{padding-top:0!important}}.notification[data-v-b601b3bc]{font-size:14px;position:fixed;bottom:8px;right:8px;left:8px;z-index:1000}",""]),t.exports=e},197:function(t,e,o){"use strict";var n=o(190);o.n(n).a},198:function(t,e,o){(e=o(9)(!1)).push([t.i,'.container[data-v-5f0d41dc]{margin-top:96px;margin-bottom:96px}.column[data-v-5f0d41dc]{display:flex}.column .image[data-v-5f0d41dc]{max-height:300px;width:100%}.column .card[data-v-5f0d41dc]{display:flex;flex-direction:column;padding-bottom:24px;width:100%;border:1px solid #e3e3e3;box-shadow:none}.column .card .card-image[data-v-5f0d41dc]{flex:1}.column .card .card-content[data-v-5f0d41dc]{flex:1;padding-top:0;padding-bottom:0;display:flex;align-items:flex-end}.column .card .card-content .subtitle[data-v-5f0d41dc]{font-weight:500;font-size:14px;margin-bottom:16px;margin-top:8px}.column .card figure[data-v-5f0d41dc]{overflow:hidden}.column .card figure img[data-v-5f0d41dc]{transition:.25s}.column .card:hover img[data-v-5f0d41dc]{transform:scale(1.15);transition:transform .5s}.category[data-v-5f0d41dc]{background:#fafaf1}.category h1[data-v-5f0d41dc]{background-color:#00d1b2;width:200px;padding-top:4px;padding-bottom:4px;padding-left:16px;color:#fff}.category h1[data-v-5f0d41dc]:after{content:"";position:absolute;width:0;height:0;background-color:#fafafa;border:19px solid #00d1b2;border-right:24px solid transparent!important;top:0}.banner img[data-v-5f0d41dc]{margin:auto}',""]),t.exports=e},199:function(t,e,o){"use strict";var n=o(191);o.n(n).a},200:function(t,e,o){(e=o(9)(!1)).push([t.i,'.container[data-v-b14ee118]{margin-top:96px;margin-bottom:96px}.column[data-v-b14ee118]{display:flex}.column .image[data-v-b14ee118]{width:100%}.column .card[data-v-b14ee118]{padding-top:24px;padding-bottom:24px;width:100%;border:1px solid #e3e3e3;box-shadow:none}.column .card .media-content[data-v-b14ee118]{text-align:center}.column .card .card-content[data-v-b14ee118]{padding-top:0;padding-bottom:0}.column .card .card-content .subtitle[data-v-b14ee118]{font-size:14px;margin-bottom:16px;margin-top:8px}.column i[data-v-b14ee118]{font-size:52px;color:#f14668}.column h1[data-v-b14ee118]{color:#f14668;margin-bottom:16px}.services[data-v-b14ee118]{background:#fafaf1}.services h1[data-v-b14ee118]{background-color:#00d1b2;width:100px;padding-top:4px;padding-bottom:4px;padding-left:16px;color:#fff}.services h1[data-v-b14ee118]:after{content:"";position:absolute;width:0;height:0;background-color:#fafafa;border:19px solid #00d1b2;border-right:24px solid transparent!important;top:0}',""]),t.exports=e},201:function(t,e,o){"use strict";o.r(e);var n=o(192),r=o(193),c=o(194),d={components:{Carousel:n.default,Books:r.default,Services:c.default}},l=o(2),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Carousel"),this._v(" "),e("Books"),this._v(" "),e("Services")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Carousel:o(192).default,Books:o(193).default,Services:o(194).default})}}]);