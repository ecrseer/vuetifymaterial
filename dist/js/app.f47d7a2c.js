(function(t){function e(e){for(var r,o,i=e[0],s=e[1],c=e[2],f=0,m=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),l()}function l(){for(var t,e=0;e<n.length;e++){for(var l=n[e],r=!0,i=1;i<l.length;i++){var s=l[i];0!==a[s]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=l[0]))}return t}var r={},a={app:0},n=[];function o(e){if(r[e])return r[e].exports;var l=r[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=t,o.c=r,o.d=function(t,e,l){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(l,r,function(e){return t[e]}.bind(null,r));return l},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;n.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"56d7":function(t,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var r=l("2b0e"),a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",[l("v-main",[l("HelloWorld")],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",[l("v-row",{staticClass:"text-center"},[l("FilmeFormulario",{attrs:{filme:t.filme},on:{salvou:t.cadastra}}),l("FilmeLista",{attrs:{titulo:"filmes em destaque"}},t._l(t.filmes,(function(e){return l("FilmeItem",{attrs:{filme:e},on:{editar:t.edicao}})})),1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-form",{staticClass:"form my-3"},[l("Campo",{attrs:{nome:"Titulo"},model:{value:t.filme.titulo,callback:function(e){t.$set(t.filme,"titulo",e)},expression:"filme.titulo"}}),l("Campo",{attrs:{nome:"Valor"},model:{value:t.filme.valor,callback:function(e){t.$set(t.filme,"valor",e)},expression:"filme.valor"}}),l("Campo",{attrs:{nome:"Descrição"},model:{value:t.filme.descricao,callback:function(e){t.$set(t.filme,"descricao",e)},expression:"filme.descricao"}}),l("button",{staticClass:"btn btn-success mt-3",on:{click:t.salvar}},[t._v("Salvar")])],1)},c=[],u=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-input",{staticClass:"col-12"},[l("label",{staticClass:"form-label",attrs:{for:t.nome}},[t._v(t._s(t.nome))]),l("input",{staticClass:"form-control",attrs:{type:"text",id:t.nome,placeholder:t.nome},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},f=[],m={name:"Campo",props:{nome:String,value:String}},p=m,d=l("2877"),v=l("6544"),b=l.n(v),h=l("b675"),_=Object(d["a"])(p,u,f,!1,null,"0a318291",null),y=_.exports;b()(_,{VInput:h["a"]});var C={name:"FilmeFormulario",components:{Campo:y},props:{filme:Object},methods:{salvar:function(t){t.preventDefault(),this.$emit("salvou",this.filme)}}},g=C,O=l("4bd4"),w=Object(d["a"])(g,s,c,!1,null,"6301dc8f",null),x=w.exports;b()(w,{VForm:O["a"]});var j=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"row row-cols-1 row-cols-md-3 mb-3 text-center"},[t.titulo?l("h1",[t._v(t._s(t.titulo))]):t._e(),t._t("default")],2)},F=[],$={name:"FilmeLista",props:{titulo:String}},S=$,V=Object(d["a"])(S,j,F,!1,null,"65a8ce90",null),k=V.exports,P=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-col",{staticClass:"col",attrs:{cols:"5"}},[l("div",{staticClass:"card mb-4 rounded-3 shadow-sm"},[l("div",{staticClass:"card-header py-3"},[l("h4",{staticClass:"my-0 fw-normal",on:{click:t.editar}},[t._v(t._s(t.filme.titulo))])]),l("FilmeBody",{attrs:{filme:t.filme}})],1)])},E=[],M=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[l("ul",{staticClass:"list-unstyled mt-3 mb-4"},[l("li",[t._v(t._s(t.filme.valor))]),l("li",[t._v(t._s(t.filme.descricao))])]),l("button",{staticClass:"w-100 btn btn-lg btn-outline-primary",attrs:{type:"button"}},[t._v("Alugar")])])},I=[],T={name:"FilmeBody",props:{filme:Object}},A=T,B=l("b0af"),H=Object(d["a"])(A,M,I,!1,null,"03f139d0",null),L=H.exports;b()(H,{VCard:B["a"]});var W={name:"FilmeItem",props:{filme:Object},components:{FilmeBody:L},methods:{editar:function(){this.$emit("editar",this.filme)}}},D=W,J=l("62ad"),q=Object(d["a"])(D,P,E,!1,null,"1b9b4ef6",null),R=q.exports;b()(q,{VCol:J["a"]});var z={name:"HelloWorld",components:{FilmeFormulario:x,FilmeLista:k,FilmeItem:R},data:function(){return{teste:"",filme:{titulo:"3",valor:"1",descricao:"2"},filmes:[{titulo:"234",valor:"1232222",descricao:"ttt2222"},{titulo:"f",valor:"d",descricao:"a"},{titulo:"e",valor:"d",descricao:"t"},{titulo:"t",valor:"d",descricao:"a"},{},{},{}]}},methods:{carregar:function(){this.filmes=[]},cadastra:function(){this.filmes.push(this.filme),this.filme={}},edicao:function(t){this.filme=t}},mounted:function(){this.carregar()}},G=z,K=l("a523"),N=l("0fd9"),Q=Object(d["a"])(G,o,i,!1,null,null,null),U=Q.exports;b()(Q,{VContainer:K["a"],VRow:N["a"]});var X=l("bdfe"),Y=l.n(X);function Z(){console.log("12039"+Y.a[0])}Z();var tt={name:"App",components:{HelloWorld:U}},et=tt,lt=l("7496"),rt=l("f6c4"),at=Object(d["a"])(et,a,n,!1,null,null,null),nt=at.exports;b()(at,{VApp:lt["a"],VMain:rt["a"]});var ot=l("f309");r["a"].use(ot["a"]);var it=new ot["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:it,render:function(t){return t(nt)}}).$mount("#app")},bdfe:function(t,e){t.exports={listinhaC:[1,2,3]}}});
//# sourceMappingURL=app.f47d7a2c.js.map