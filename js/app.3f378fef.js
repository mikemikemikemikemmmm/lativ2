(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},s={app:0},n={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1a59e4c5"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"63866831"}[t]+".css",n=l.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===n))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===r||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete s[t],f.parentNode.removeChild(f),a(i)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){s[t]=0}));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,a){r=n[t]=[e,a]});e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,a[1](i)}n[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/lativ/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-auto",attrs:{id:"app"}},[a("Nav"),a("router-view",{attrs:{id:"root-view"}}),a("Foot")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"position-relative bg-white"},[a("section",{staticClass:"mt-2 d-none d-sm-flex flex-column mb-3 container"},[t._m(0),a("div",{staticClass:"row d-flex"},[a("router-link",{staticClass:"col-2 text-primary h1 mb-0",attrs:{to:"/"}},[t._v("\n        Lativ\n      ")]),a("div",{staticClass:"col-10 d-flex align-items-end"},[a("ul",{staticClass:"d-inline-flex align-items-center mb-0"},[a("li",{staticClass:"px-2",on:{click:function(e){t.selectedNav="women"}}},[a("router-link",{staticClass:"nav_link px-2",class:{nav_link_select:"women"===t.selectedNav},attrs:{to:{name:"cardListIndex",params:{gender:"women"}}}},[t._v("\n              WOMEN\n            ")])],1),a("div",{staticClass:"py-1 border-right"}),a("li",{staticClass:"px-2",on:{click:function(e){t.selectedNav="men"}}},[a("router-link",{staticClass:"nav_link px-2",class:{nav_link_select:"men"===t.selectedNav,nav_link:"men"!==t.selectedNav},attrs:{to:{name:"cardListIndex",params:{gender:"men"}}}},[t._v("\n              MEN\n            ")])],1)]),a("ul",{staticClass:"d-inline-flex align-items-end mb-0 ml-auto"},[a("li",{staticClass:"ml-auto d-flex text-primary"},[a("a",{staticClass:"line-r mx-2 h6",attrs:{href:""}},[t._v("\n              訂閱電子報\n            ")]),a("a",{staticClass:"mx-2 h6",attrs:{href:""}},[t._v("\n              登入/註冊\n            ")]),a("a",{staticClass:"ml-2 position-relative h6",attrs:{href:""},on:{mouseenter:function(e){t.isHoverCart=!0},mouseleave:function(e){t.isHoverCart=!1}}},[t._v("\n              "+t._s(t.allQty)+"個商品\n              "),t.isAddToCart?a("div",{staticClass:"add-cart-show position-absolute border"},[a("h6",{staticClass:"text-center text-primary my-3"},[t._v("本商品已經加入購物車")]),a("div",{staticClass:"border-top border-bottom w-75 mb-3 py-3 mx-auto"},[a("img",{staticClass:"d-inline-block w-25",attrs:{src:t.lastCartProduct.imgUrl,alt:""}}),a("h6",{staticClass:"d-inline-block w-75 pl-1"},[t._v(t._s(t.showCartProduct(t.cart.length-1)))])]),t._m(1)]):t._e(),t.isHoverCart?a("div",{staticClass:"add-cart-show position-absolute border"},[a("table",{staticClass:"text-center w-75 mb-3 py-3 mx-auto"},[t._m(2),t._l(t.cart,function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.colorName))]),a("td",[t._v(t._s(e.sizeName))]),a("td",[t._v(t._s(e.qty))])])})],2),t._m(3)]):t._e()])])])])],1)]),t._m(4)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ml-auto"},[a("input",{staticClass:"px-2",attrs:{type:"text",name:"",id:"",placeholder:"SEARCH"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex mb-3 mr-3"},[a("a",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{href:""}},[t._v("前往結帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"border-bottom"},[a("th",[t._v("商品名稱")]),a("th",[t._v("顏色")]),a("th",[t._v("尺寸")]),a("th",[t._v("數量")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex mb-3 mr-3"},[a("a",{staticClass:"check-btn ml-auto bg-primary text-white px-3 py-1 rounded",attrs:{href:""}},[t._v("前往結帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mobile-header d-block d-sm-none position-fixed bg-white w-100 p-2"},[a("div",{staticClass:"d-flex w-100"},[a("div",{staticClass:"text-white bg-primary px-1 py-1 flex-center"},[t._v("Lativ")]),a("div",{staticClass:"rounded d-flex mx-3 flex-grow-1"},[a("i",{staticClass:"nav-search px-3 fas fa-search flex-center"}),a("input",{staticClass:"nav-search flex-grow-1 mr-2 border-0",attrs:{type:"text",name:"",id:"",placeholder:"輸入關鍵字"}})]),a("div",{staticClass:"px-1 py-1 position-relative h6"},[a("i",{staticClass:"far fa-comment"}),t._v("\n          消息\n      ")])]),a("ul",{staticClass:"d-flex text-unclick mb-0 mt-2"},[a("li",{staticClass:"px-2"},[t._v("首頁")]),a("li",{staticClass:"px-2"},[t._v("限時特惠")]),a("li",{staticClass:"px-2"},[t._v("女裝")]),a("li",{staticClass:"px-2"},[t._v("男裝")]),a("li",{staticClass:"px-2"},[t._v("童裝")])])])}],l={data:function(){return{selectedNav:"",isHoverCart:!1}},computed:{allQty:function(){return this.$store.state.cart.length},isAddToCart:function(){return this.$store.state.isAddToCart},lastCartProduct:function(){return this.$store.state.cart[this.$store.state.cart.length-1]},cart:function(){return this.$store.state.cart}},methods:{showCartProduct:function(t){var e="".concat(this.cart[t].title,"-").concat(this.cart[t].gender," ").concat(this.cart[t].colorName,"-").concat(this.cart[t].title.sizeName," NT$").concat(this.cart[t].qty*this.cart[t].price);return e}}},c=l,u=(a("c970"),a("2877")),d=Object(u["a"])(c,i,o,!1,null,"3b07591f",null),f=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"section-footer"}},[a("section",{staticClass:"d-sm-flex d-none py-3 border-top container"},[a("span",{staticClass:"d-flex"},[a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("聯絡lativ")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("購物說明")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("最新消息")]),a("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("品牌日誌")])]),a("span",{staticClass:"d-flex ml-auto"},[a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("網站使用條款")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("隱私權政策")]),a("a",{staticClass:"text-primary px-lg-4 px-2 border-right",attrs:{href:""}},[t._v("免責聲明")]),a("a",{staticClass:"text-primary px-lg-4 px-2",attrs:{href:""}},[t._v("© 2019 lativ")])])]),a("section",{staticClass:"mobile-footer border-top d-flex d-sm-none position-fixed bg-white w-100 pt-2"},[a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-home"}),t._v("\n      首頁\n    ")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-bars"}),t._v("分類")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v("購物車")]),a("div",{staticClass:"w-25 text-center py-1"},[a("i",{staticClass:"fas fa-user"}),t._v("個人")])])])}],v={},h=v,x=(a("f187"),Object(u["a"])(h,p,m,!1,null,null,null)),b=x.exports,C={components:{Nav:f,Foot:b}},_=C,g=(a("5c0b"),Object(u["a"])(_,s,n,!1,null,null,null)),y=g.exports,w=a("8c4f");r["a"].use(w["a"]);var k=new w["a"]({mode:"history",base:"/lativ/",routes:[{path:"/",name:"index",component:function(){return a.e("about").then(a.bind(null,"d504"))}},{path:"/:gender",name:"",component:function(){return a.e("about").then(a.bind(null,"5ef2"))},children:[{path:":productId",name:"productDetail",component:function(){return a.e("about").then(a.bind(null,"2e1b"))}},{path:":category",name:"cardList",component:function(){return a.e("about").then(a.bind(null,"3af2"))}},{path:"",name:"cardListIndex",component:function(){return a.e("about").then(a.bind(null,"3af2"))}}]}]}),T=a("2f62");r["a"].use(T["a"]);var E=new T["a"].Store({state:{allProducts:{F1:{title:"領結長袖針織衫",gender:"女",price:490,sizes:[{name:"S",num:1},{name:"M",num:2},{name:"L",num:3}]}},cart:[],isAddToCart:!1,asideData:{activity:{},women:[{title:"上身類",url:"tshirt",subCategory:[{name:"印花短T",url:"g-st"},{name:"印花長T",url:"g-lt"}]},{title:"襯衫類",url:"tshirt2",subCategory:[{name:"休閒襯衫",url:"g-st2"}]}],men:[{title:"上身類",url:"tshirt",subCategory:[{name:"印花短T",url:"g-st"},{name:"印花長T",url:"g-lt"}]}]}},mutations:{ADDTOCART:function(t,e){t.cart.push(e),t.isAddToCart=!0,setTimeout(function(){t.isAddToCart=!1},3e3)}},actions:{}});a("4989");r["a"].config.productionTip=!1,new r["a"]({router:k,store:E,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("5e27"),s=a.n(r);s.a},"5e27":function(t,e,a){},c6e8:function(t,e,a){},c970:function(t,e,a){"use strict";var r=a("c6e8"),s=a.n(r);s.a},cdd1:function(t,e,a){},f187:function(t,e,a){"use strict";var r=a("cdd1"),s=a.n(r);s.a}});
//# sourceMappingURL=app.3f378fef.js.map