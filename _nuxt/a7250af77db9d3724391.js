(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{249:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("8cd439b6",content,!0,{sourceMap:!1})},262:function(t,e,n){t.exports=n.p+"img/264f028.svg"},263:function(t,e,n){"use strict";var r=n(249);n.n(r).a},264:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".card[data-v-3c9e0d3a]{width:90%;margin:auto;display:flex;flex-direction:column;box-shadow:3px 9px 9px -9px rgba(0,0,0,.57);font-size:.8em;transition:box-shadow .5s ease;box-sizing:border-box;background-color:#3d3d3d;overflow:hidden;color:#fff}#title-event[data-v-3c9e0d3a]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;padding:7px 15px}#title-event>#icon-event[data-v-3c9e0d3a]{width:20px}#title-event>h1[data-v-3c9e0d3a]{display:inline-block;font-size:1.4em;margin:0 0 0 15px}#title-event>span[data-v-3c9e0d3a]{display:inline-block;color:#d6d6d6;font-size:1.1em;margin:0}.card[data-v-3c9e0d3a]:hover{transform:translate(-5,-5);box-shadow:3px 13px 13px -9px rgba(0,0,0,.57)}#thumbnail[data-v-3c9e0d3a]{width:100%;background:#b8b8b8}#stats[data-v-3c9e0d3a]{margin:10px;font-size:.9em;color:#d4d4d4}#info-card[data-v-3c9e0d3a]{width:90%;margin:10px 5%}#description[data-v-3c9e0d3a]{min-height:100px;margin-top:10px}",""])},268:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0527476f",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6759f5ab",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";var r={props:["date","title","description","postId","esEvento","imgUrl"]},o=(n(263),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t.esEvento?r("div",{attrs:{id:"title-event"}},[r("img",{attrs:{src:n(262),id:"icon-event"}}),t._v(" "),r("h1",[t._v("Evento")]),t._v(" "),r("span",[t._v(t._s(new Date(t.date).toLocaleDateString()))])]):t._e(),t._v(" "),r("img",{attrs:{id:"thumbnail",src:t.imgUrl||"@/assets/landscape.png",alt:"ImagenNoticia"}}),t._v(" "),t._m(0),t._v(" "),r("div",{attrs:{id:"info-card"}},[r("nuxt-link",{attrs:{to:"/publications/"+t.postId}},[r("strong",{staticClass:"titl"},[t._v(t._s(t.title))])]),t._v(" "),r("div",{attrs:{id:"description"}},[t._v("\n      "+t._s(t.description)+"\n    ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"stats"}},[e("a",{attrs:{href:"#"}},[e("span",{attrs:{id:"like-count"}},[e("span",{attrs:{id:"like-num"}},[this._v("10")]),this._v(" Me gustas")])]),this._v(" |\n    "),e("a",{attrs:{href:"#"}},[e("span",{attrs:{id:"com-count"}},[e("span",{attrs:{id:"com-num"}},[this._v("2")]),this._v(" Comentarios")])])])}],!1,null,"3c9e0d3a",null);e.a=component.exports},324:function(t,e,n){"use strict";var r=n(268);n.n(r).a},325:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".tm-card[data-v-767863a9]{margin-bottom:20px}",""])},326:function(t,e,n){"use strict";var r=n(269);n.n(r).a},327:function(t,e,n){(t.exports=n(12)(!1)).push([t.i,"article{max-width:800px;width:100%}#tm{min-width:300px;width:60%;margin:0 auto}@media screen and (max-width:400px){#tm{min-width:100%;width:100%;margin:0}}",""])},333:function(t,e,n){"use strict";n.r(e);n(28),n(19),n(16),n(9),n(25);var r=n(10),o=n(7),c=n(270),d=n(14),l={created:function(){var t=this;this.publicaciones.forEach((function(e){e.thumbnail&&d.e.ref(e.thumbnail).getDownloadURL().then((function(n){t.thumbnails[e.id].url=n}))}))},methods:{},data:function(){var t={};return this.publicaciones.forEach((function(e){t[e.id]={url:""}})),{thumbnails:t}},props:["publicaciones"],components:{Card:c.a}},f=(n(324),n(5));function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Timeline:Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"timeline"}},t._l(t.publicaciones,(function(e){return n("Card",{key:e.id,staticClass:"tm-card",attrs:{title:e.titulo,description:e.descripcion,postId:e.id,esEvento:e.esEvento,date:e.fechaEvento,imgUrl:t.thumbnails[e.id].url}})})),1)}),[],!1,null,"767863a9",null).exports},methods:m({},Object(o.d)(["ChangePresent"])),beforeMount:function(){this.ChangePresent(0)},asyncData:function(){return d.c.collection("posts").get().then((function(t){var e=[];return t.forEach((function(t){return e.push(t)})),{publicaciones:e.map((function(t){return m({id:t.id},t.data())}))}}))}},x=(n(326),Object(f.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("Timeline",{attrs:{publicaciones:this.publicaciones,id:"tm"}})],1)}),[],!1,null,null,null));e.default=x.exports}}]);