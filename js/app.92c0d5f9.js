(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e0757849"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"eaee6050"}[e]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===a||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["default"].use(o["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:e.goDark}},[n("v-content",[n("v-container",{attrs:{"align-center":""}},[n("TheHeader",{attrs:{goDark:e.goDark},on:{changeTheme:function(t){return e.updateTheme(t)}}}),n("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[n("router-view")],1)],1)],1),n("TheFooter")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:"",width:"150",height:"340"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pt-4"},[n("v-list-tile",{attrs:{"active-class":"green--text",to:"/"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("HOME")])],1)],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/resume"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("RESUME")])],1)],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/services"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("SERVICES")])],1)],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/Space"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("Space")])],1)],1),n("v-list-tile",{attrs:{"active-class":"green--text",to:"/contact"}},[n("v-list-tile-content",[n("v-list-tile-title",[e._v("CONTACT")])],1)],1)],1)],1),n("v-toolbar",{attrs:{flat:"",dense:"",color:"transparent","scroll-off-screen":""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"font-weight-light"},[e._v("Ahsan")]),n("span",{staticClass:"green--text"},[e._v("Waseem")])]),n("v-spacer"),n("v-btn",{staticClass:"hidden-md-and-up",attrs:{depressed:"",small:"",icon:""},on:{click:e.changeTheme}},[1==e.goDark?n("v-icon",[e._v("fas fa-sun")]):n("v-icon",[e._v("fas fa-moon")])],1),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/","active-class":"green--text headline"}},[e._v("Home")]),n("v-btn",{attrs:{flat:"",to:"/resume","active-class":"green--text headline"}},[e._v("Resume")]),n("v-btn",{attrs:{flat:"",to:"/services","active-class":"green--text headline"}},[e._v("Services")]),n("v-btn",{attrs:{flat:"",to:"/Space","active-class":"green--text headline"}},[e._v("Space")]),n("v-btn",{attrs:{flat:"",to:"/contact","active-class":"green--text headline"}},[e._v("Contact")]),n("v-btn",{attrs:{depressed:"",small:"",icon:""},on:{click:e.changeTheme}},[1==e.goDark?n("v-icon",[e._v("fas fa-sun")]):n("v-icon",[e._v("fas fa-moon")])],1)],1)],1)],1)},l=[],c={props:{goDark:{type:Boolean}},data:function(){return{drawer:null}},methods:{changeTheme:function(){this.$emit("changeTheme",this.goDark)}}},u=c,d=n("2877"),f=n("6544"),p=n.n(f),h=n("8336"),m=n("132d"),v=n("8860"),g=n("ba95"),b=n("5d23"),w=n("f774"),y=n("9910"),_=n("71d9"),x=n("2a7f"),k=n("706c"),C=Object(d["a"])(u,s,l,!1,null,null,null),T=C.exports;p()(C,{VBtn:h["a"],VIcon:m["a"],VList:v["a"],VListTile:g["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:w["a"],VSpacer:y["a"],VToolbar:_["a"],VToolbarItems:x["a"],VToolbarSideIcon:k["a"],VToolbarTitle:x["b"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{staticClass:"pa-3"},[e._v("\n  Developed with \n  "),n("v-icon",{attrs:{small:"",color:"red"}},[e._v("fas fa-heart")]),e._v(" and \n  "),n("v-icon",{attrs:{small:"",color:"green"}},[e._v("fab fa-vuejs")]),n("v-spacer"),n("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)},P=[],I={},S=I,A=n("553a"),j=Object(d["a"])(S,V,P,!1,null,"dc425718",null),E=j.exports;p()(j,{VFooter:A["a"],VIcon:m["a"],VSpacer:y["a"]});var O={name:"App",metaInfo:{title:"Home",titleTemplate:"%s ← Ahsan's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Ahsan Waseem's Space"},{charset:"utf-8"},{property:"og:title",content:"Ahsan' Space"},{property:"og:site_name",content:"Ahsan' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://ahsanwaseem.tk"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Ahsan Waseem's Space"}]},components:{TheHeader:T,TheFooter:E},data:function(){return{goDark:!1}},methods:{updateTheme:function(e){this.goDark=!e}}},D=O,L=(n("034f"),n("7496")),W=n("a523"),H=n("549c"),F=Object(d["a"])(D,r,i,!1,null,null,null),z=F.exports;p()(F,{VApp:L["a"],VContainer:W["a"],VContent:H["a"]});var B=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"mt-4 pt-2",attrs:{column:"","justify-center":"","align-center":""}},[n("VueCompareImage",{staticClass:"hidden-md-and-down",style:{minWidth:"1300px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage,rightImage:e.rightImage,sliderPositionPercentage:e.sliderPosition}}),n("VueCompareImage",{staticClass:"hidden-lg-and-up",style:{maxWidth:"400px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage2,rightImage:e.rightImage2,sliderPositionPercentage:e.sliderPosition}}),n("br"),n("vue-typer",{staticClass:"headline",attrs:{repeat:0,text:"Ahsan Waseem"}}),n("vue-typer",{attrs:{text:e.text1,repeat:1/0,shuffle:!1,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1980,"erase-delay":150,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"smooth"}}),n("br"),n("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl4:""}},[n("v-card",{attrs:{flat:"",color:"transparent","max-width":"500"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[n("span",[e._v("About")]),n("span",{staticClass:"green--text"},[e._v("Me")])]),n("div",[n("p",[e._v("\n              Hello! I’m Ahsan Waseem. I'm a computer scientist who is passionate about Laravel and\n              "),n("span",{staticClass:"green--text font-weight-bold"},[e._v("VUE")]),e._v(", developing state-of-the-art applications, building great user experiences by bringing simplicity to life and constantly learning. When I'm not coding or designing, you'll find me switching between gaming consoles.\n            ")])])])]),n("v-card-actions",{staticClass:"hidden-sm-and-down"},e._l(e.icons,(function(t){return n("v-btn",{key:t.icon,attrs:{fab:"",dark:"",outline:"",color:"green",href:t.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1),n("v-card-actions",{staticClass:"hidden-md-and-up justify-center"},e._l(e.icons,(function(t){return n("v-btn",{key:t.icon,attrs:{small:"",fab:"",dark:"",outline:"",color:"green",href:t.href,target:"_blank"}},[n("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1)],1)],1)],1)},N=[],$=n("e956"),R=n("83c1"),U=n.n(R),q={metaInfo:{title:"Home",titleTemplate:"%s ← Ahsan's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Ahsan Waseem's Space"},{charset:"utf-8"},{property:"og:title",content:"Ahsan' Space"},{property:"og:site_name",content:"Ahsan' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://ahsanwaseem.tk"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Ahsan Waseem's Space"}]},components:{"vue-typer":$["VueTyper"],VueCompareImage:U.a},data:function(){return{icons:[{href:"https://github.com/ahsanhere",icon:"fab fa-github"},{href:"https://stackoverflow.com/story/ahsanwaseem",icon:"fab fa-stack-overflow"},{href:"https://twitter.com/Ahxanwaxeem",icon:"fab fa-twitter"},{href:"https://www.linkedin.com/in/ahsanwaseem",icon:"fab fa-linkedin-in"},{href:"https://www.snapchat.com/add/ahsan.waseem112",icon:"fab fa-snapchat"},{href:"https://www.facebook.com/ahxan.waxeem",icon:"fab fa-facebook-f"},{href:"https://www.instagram.com/ahsanhere_",icon:"fab fa-instagram"}],text1:["Back-End Developer","Front-End Developer","Web Designer"],leftImage:"/assets/final_ff1.jpg",rightImage:"/assets/final_ff2.jpg",leftImage2:"/assets/final_ff3.jpg",rightImage2:"/assets/final_ff4.jpg",sliderLine:0,hSize:0,sliderPosition:.5}}},G=q,J=(n("cccb"),n("b0af")),K=n("99d9"),Y=n("12b2"),Q=n("0e8f"),X=n("a722"),Z=Object(d["a"])(G,M,N,!1,null,null,null),ee=Z.exports;p()(Z,{VBtn:h["a"],VCard:J["a"],VCardActions:K["a"],VCardTitle:Y["a"],VFlex:Q["a"],VIcon:m["a"],VLayout:X["a"]});var te=n("0a89"),ne=n.n(te);a["default"].use(B["a"]),a["default"].use(ne.a);var ae=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ee},{path:"/contact",name:"contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/resume",name:"resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/blog",name:"blog",component:function(){return n.e("about").then(n.bind(null,"fd3f"))}},{path:"/blog/:id",name:"blogPost",component:function(){return n.e("about").then(n.bind(null,"6b0f"))}},{path:"/services",name:"services",component:function(){return n.e("about").then(n.bind(null,"f23e"))}},{path:"/Space",name:"Space",component:function(){return n.e("about").then(n.bind(null,"d084"))}},{path:"/Space/video",name:"videoSpace",component:function(){return n.e("about").then(n.bind(null,"acf1"))}},{path:"/Space/graphic",name:"graphicSpace",component:function(){return n.e("about").then(n.bind(null,"cc8b"))}},{path:"/Space/web",name:"webSpace",component:function(){return n.e("about").then(n.bind(null,"c753"))}},{path:"*",name:"Error",component:function(){return n.e("about").then(n.bind(null,"dda8"))}}]}),oe=n("9747"),re=n.n(oe),ie=n("0284"),se=n.n(ie);a["default"].config.productionTip=!1;var le=!0;new a["default"]({router:ae,render:function(e){return e(z)}}).$mount("#app"),a["default"].use(re.a),a["default"].use(se.a,{id:"UA-139190314-1",router:ae,debug:{enabled:!le,sendHitTask:le}})},"64a9":function(e,t,n){},cccb:function(e,t,n){"use strict";var a=n("d563"),o=n.n(a);o.a},d563:function(e,t,n){}});
//# sourceMappingURL=app.92c0d5f9.js.map
