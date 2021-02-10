(this["webpackJsonppoke-client"]=this["webpackJsonppoke-client"]||[]).push([[0],{69:function(t,e,n){},70:function(t,e,n){},76:function(t,e,n){},78:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(69),n(16)),o=n(134),u=n(137),l=n(132),j=n(138),f=n(125),p=n(126),h=n(128),d=n(127),b=n(129),m=n(131),O=n(136),v=n(130),g=n(139),x=(n(70),n(6)),y=function(t){return{normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD"}[t]||""};var k=function(t){var e=t.type;return e?Object(x.jsx)(g.a,{className:"type-tag",label:e.type.name,style:{backgroundColor:y(e.type.name)}}):null},_=(n(76),function(t){return t.other["official-artwork"].front_default||""});var C=function(t){var e=t.name,n=t.types,c=void 0===n?[]:n,r=t.sprites,i=t.stats,o=void 0===i?[]:i,u=Object(a.useState)(!1),l=Object(s.a)(u,2),j=l[0],g=l[1];return Object(x.jsx)(f.a,{className:"item",color:"primary",onClick:function(){g(!j)},children:Object(x.jsxs)(p.a,{color:"primary",children:[r&&Object(x.jsx)(d.a,{className:"item__avatar",image:_(r),title:e}),Object(x.jsxs)(h.a,{children:[Object(x.jsxs)(b.a,{className:"item__title",gutterBottom:!0,variant:"h5",component:"h2",children:[e,c.map((function(t){return Object(x.jsx)("div",{className:"item__chip",children:Object(x.jsx)(k,{type:t})},t.slot)}))]}),Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p"})]}),Object(x.jsx)(v.a,{in:j,children:Object(x.jsx)(h.a,{children:o.map((function(t){var e=t.stat,n=t.base_stat;return Object(x.jsxs)(O.a,{display:"flex",alignItems:"center",children:[Object(x.jsx)(O.a,{minWidth:150,children:Object(x.jsx)(b.a,{variant:"body2",color:"textSecondary",children:"".concat(e.name,": ").concat(n)})}),Object(x.jsx)(O.a,{width:"100%",mr:1,children:Object(x.jsx)(m.a,{variant:"determinate",value:n})})]},e.url)}))})})]})})},N=n(22),S=n.n(N),w=n(32),F=n(40),A=n(41),E=function(){function t(e){var n=e.path;Object(F.a)(this,t),this.path="",this.path=n}return Object(A.a)(t,[{key:"getPokemons",value:function(){var t=Object(w.a)(S.a.mark((function t(e){var n,a,c,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.offset,a=void 0===n?20:n,c=e.limit,r=void 0===c?20:c,t.abrupt("return",fetch("".concat(this.path,"/pokemon?offset=").concat(a,"&limit=").concat(r)).then((function(t){return t.json()})));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var t=Object(w.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(this.path,"/pokemon/").concat(e)).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),B=function(){function t(){Object(F.a)(this,t)}return Object(A.a)(t,null,[{key:"createService",value:function(){return new E({path:"https://pokeapi.co/api/v2"})}}]),t}(),P=function(t){var e=t.search,n=void 0===e?"":e,c=t.page,r=void 0===c?1:c,i=Object(a.useState)(20*r),o=Object(s.a)(i,2),u=o[0],l=o[1],j=Object(a.useState)(!0),f=Object(s.a)(j,2),p=f[0],h=f[1];Object(a.useEffect)((function(){l(20*r)}),[r]);var d=Object(a.useState)([]),b=Object(s.a)(d,2),m=b[0],O=b[1],v=Object(a.useState)([]),g=Object(s.a)(v,2),x=g[0],y=g[1],k=Object(a.useState)(0),_=Object(s.a)(k,2),C=_[0],N=_[1],F=Object(a.useRef)(B.createService());return Object(a.useEffect)((function(){y(""!==n?m.filter((function(t){return function(t,e){return e.name.includes(t)||e.types&&e.types.find((function(e){return e.type.name.includes(t)}))}(n,t)})):m)}),[n,m]),Object(a.useEffect)((function(){h(!0),F.current.getPokemons({offset:u,limit:20}).then(function(){var t=Object(w.a)(S.a.mark((function t(e){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(Math.floor(e.count/20)),t.next=3,Promise.all(e.results.map((function(t){var e=t.url.split("/"),n=e[e.length-2];return F.current.getPokemon(n).then((function(t){return h(!1),t}))})));case 3:n=t.sent,O(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[u]),{count:C,filttered:x,loading:p}},D=(n(78),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,a=function(){for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];clearTimeout(e),e=setTimeout((function(){return t.apply(void 0,c)}),n)};return a});var I=function(t){t.name;var e=Object(a.useState)(1),n=Object(s.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(""),f=Object(s.a)(i,2),p=f[0],h=f[1],d=P({search:p,page:c}),b=d.filttered,m=d.count,O=d.loading,v=function(t,e){r(e)},g=D((function(t){h(t.target.value)}),200);return Object(x.jsxs)("div",{className:"listing",children:[Object(x.jsx)("div",{className:"listing__search",children:Object(x.jsx)(o.a,{className:"listing__search-input",label:"Quick Filter",onChange:g})}),Object(x.jsx)("div",{className:"listing__pagination",children:Object(x.jsx)(u.a,{count:m,page:c,onChange:v,variant:"outlined",shape:"rounded",size:"large",color:"primary"})}),Object(x.jsx)("div",{className:"listing__items",children:b.map((function(t){var e=t.name,n=t.id,a=t.types,c=t.sprites,r=t.stats;return Object(x.jsx)("div",{className:"listing__item",children:Object(x.jsx)(C,{name:e,types:a,sprites:c,stats:r},"item_"+n)},n)}))}),Object(x.jsx)("div",{className:"listing__pagination",children:Object(x.jsx)(u.a,{count:m,page:c,onChange:v,variant:"outlined",shape:"rounded",size:"large"})}),Object(x.jsx)(j.a,{open:O,style:{zIndex:2e3},children:Object(x.jsx)(l.a,{color:"primary"})})]})},T=n(56),z=n(133),J=(n(80),Object(T.a)({palette:{primary:{main:"#ff5000"}}}));var L=function(){return Object(x.jsx)(z.a,{theme:J,children:Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)("header",{className:"app__header"}),Object(x.jsx)(I,{})]})})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),M()}},[[81,1,2]]]);
//# sourceMappingURL=main.62989b2c.chunk.js.map