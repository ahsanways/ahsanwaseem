(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"79a80f1e"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"eaee6050"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===n||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t),a.d(t,"bus",(function(){return le}));a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["default"].use(r["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:e.goDark}},[a("v-content",[a("v-container",{attrs:{"align-center":""}},[a("TheHeader",{attrs:{goDark:e.goDark},on:{changeTheme:function(t){return e.updateTheme(t)}}}),a("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[a("router-view")],1)],1)],1),a("TheFooter")],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",app:"",width:"150",height:"340"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"pt-4"},[a("v-list-tile",{attrs:{"active-class":"green--text",to:"/"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("HOME")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/resume"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("RESUME")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/services"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("SERVICES")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/portfolio"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("PORTFOLIO")])],1)],1),a("v-list-tile",{attrs:{"active-class":"green--text",to:"/contact"}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v("CONTACT")])],1)],1)],1)],1),a("v-toolbar",{attrs:{flat:"",dense:"",color:"transparent","scroll-off-screen":""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"headline"},[a("span",{staticClass:"font-weight-light"},[e._v("Ahsan")]),a("span",{staticClass:"green--text"},[e._v("Waseem")])]),a("v-spacer"),a("v-btn",{staticClass:"hidden-md-and-up",attrs:{depressed:"",small:"",icon:""},on:{click:e.changeTheme}},[1==e.goDark?a("v-icon",[e._v("fas fa-sun")]):a("v-icon",[e._v("fas fa-moon")])],1),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:"",to:"/","active-class":"green--text headline"}},[e._v("Home")]),a("v-btn",{attrs:{flat:"",to:"/resume","active-class":"green--text headline"}},[e._v("Resume")]),a("v-btn",{attrs:{flat:"",to:"/services","active-class":"green--text headline"}},[e._v("Services")]),a("v-btn",{attrs:{flat:"",to:"/portfolio","active-class":"green--text headline"}},[e._v("Portfolio")]),a("v-btn",{attrs:{flat:"",to:"/contact","active-class":"green--text headline"}},[e._v("Contact")]),a("v-btn",{attrs:{depressed:"",small:"",icon:""},on:{click:e.changeTheme}},[1==e.goDark?a("v-icon",[e._v("fas fa-sun")]):a("v-icon",[e._v("fas fa-moon")])],1)],1)],1)],1)},l=[],c={props:{goDark:{type:Boolean}},data:function(){return{drawer:null}},methods:{changeTheme:function(){this.$emit("changeTheme",this.goDark),le.$emit("darkModeEnabled",this.goDark)}}},d=c,u=a("2877"),f=a("6544"),p=a.n(f),h=a("8336"),m=a("132d"),g=a("8860"),v=a("ba95"),b=a("5d23"),w=a("f774"),y=a("9910"),_=a("71d9"),k=a("2a7f"),x=a("706c"),I=Object(u["a"])(d,s,l,!1,null,null,null),C=I.exports;p()(I,{VBtn:h["a"],VIcon:m["a"],VList:g["a"],VListTile:v["a"],VListTileContent:b["a"],VListTileTitle:b["b"],VNavigationDrawer:w["a"],VSpacer:y["a"],VToolbar:_["a"],VToolbarItems:k["a"],VToolbarSideIcon:x["a"],VToolbarTitle:k["b"]});var S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"pa-3"},[e._v("\n  Developed with \n  "),a("v-icon",{attrs:{small:"",color:"red"}},[e._v("fas fa-heart")]),e._v(" and \n  "),a("v-icon",{attrs:{small:"",color:"green"}},[e._v("fab fa-vuejs")]),a("v-spacer"),a("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)},T=[],V={},P=V,j=a("553a"),A=Object(u["a"])(P,S,T,!1,null,"d508edde",null),E=A.exports;p()(A,{VFooter:j["a"],VIcon:m["a"],VSpacer:y["a"]});var L={name:"App",metaInfo:{title:"Home",titleTemplate:"%s | Ahsan's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Ahsan Waseem's Space"},{charset:"utf-8"},{property:"og:title",content:"Ahsan' Space"},{property:"og:site_name",content:"Ahsan' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://ahsanwaseem.tk"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Ahsan Waseem's Space"}]},components:{TheHeader:C,TheFooter:E},data:function(){return{goDark:!1}},methods:{updateTheme:function(e){this.goDark=!e}}},O=L,D=(a("034f"),a("7496")),W=a("a523"),z=a("549c"),M=Object(u["a"])(O,o,i,!1,null,null,null),F=M.exports;p()(M,{VApp:D["a"],VContainer:W["a"],VContent:z["a"]});var H=a("8c4f"),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"mt-4 pt-2",attrs:{column:"","justify-center":"","align-center":""}},[0==e.darked?a("VueCompareImage",{staticClass:"hidden-md-and-down",style:{minWidth:"1300px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.darkLeftImage,rightImage:e.darkRightImage,sliderPositionPercentage:e.sliderPosition}}):a("VueCompareImage",{staticClass:"hidden-md-and-down",style:{minWidth:"1300px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage,rightImage:e.rightImage,sliderPositionPercentage:e.sliderPosition}}),0==e.darked?a("VueCompareImage",{staticClass:"hidden-lg-and-up",style:{maxWidth:"400px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.darkLeftImage2,rightImage:e.darkRightImage2,sliderPositionPercentage:e.sliderPosition}}):a("VueCompareImage",{staticClass:"hidden-lg-and-up",style:{maxWidth:"400px"},attrs:{hover:"",sliderLineWidth:e.sliderLine,handleSize:e.hSize,leftImage:e.leftImage2,rightImage:e.rightImage2,sliderPositionPercentage:e.sliderPosition}}),a("br"),a("vue-typer",{staticClass:"headline",attrs:{repeat:0,text:"Ahsan Waseem"}}),a("vue-typer",{attrs:{text:e.text1,repeat:1/0,shuffle:!1,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1980,"erase-delay":150,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"smooth"}}),a("br"),a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"",xl4:""}},[a("v-card",{attrs:{flat:"",color:"transparent","max-width":"500"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[a("span",[e._v("About")]),a("span",{staticClass:"green--text"},[e._v("Me")])]),a("div",[a("p",[e._v("\n              Hello! I’m Ahsan Waseem. I'm a computer scientist who is passionate about "),a("span",{staticClass:"green--text font-weight-bold"},[e._v("VUE")]),e._v(", developing state-of-the-art applications, building great user experiences by bringing simplicity to life and constantly learning. When I'm not coding or designing, you'll find me switching between gaming consoles.\n            ")])])])]),a("v-card-actions",{staticClass:"hidden-sm-and-down"},e._l(e.icons,(function(t){return a("v-btn",{key:t.icon,attrs:{fab:"",dark:"",outline:"",color:"green",href:t.href,target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1),a("v-card-actions",{staticClass:"hidden-md-and-up justify-center"},e._l(e.icons,(function(t){return a("v-btn",{key:t.icon,attrs:{small:"",fab:"",dark:"",outline:"",color:"green",href:t.href,target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1)})),1)],1)],1)],1)},$=[],B=a("e956"),N=a("83c1"),U=a.n(N),q={metaInfo:{title:"Home",titleTemplate:"%s | Ahsan's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Ahsan Waseem's Space"},{charset:"utf-8"},{property:"og:title",content:"Ahsan' Space"},{property:"og:site_name",content:"Ahsan' Space"},{property:"og:type",content:"website"},{property:"og:url",content:"https://ahsanwaseem.tk"},{property:"og:image",content:"https://i.imgur.com/Dcz2PGx.jpg"},{property:"og:description",content:"Ahsan Waseem's Space"}]},components:{"vue-typer":B["VueTyper"],VueCompareImage:U.a},data:function(){return{icons:[{href:"https://github.com/ahsanhere",icon:"fab fa-github"},{href:"https://stackoverflow.com/story/ahsanwaseem",icon:"fab fa-stack-overflow"},{href:"https://twitter.com/Ahxanwaxeem",icon:"fab fa-twitter"},{href:"https://www.linkedin.com/in/ahsanwaseem",icon:"fab fa-linkedin-in"},{href:"https://www.snapchat.com/add/ahsan.waseem112",icon:"fab fa-snapchat"},{href:"https://www.facebook.com/ahxan.waxeem",icon:"fab fa-facebook-f"},{href:"https://www.instagram.com/ahsanhere_",icon:"fab fa-instagram"}],text1:["Back-End Developer","Front-End Developer","Web Designer"],leftImage:"/assets/final_ff1.jpg",rightImage:"/assets/final_ff2.jpg",leftImage2:"/assets/final_ff3.jpg",rightImage2:"/assets/final_ff4.jpg",darkLeftImage:"/assets/final_ff5.jpg",darkRightImage:"/assets/final_ff6.jpg",darkLeftImage2:"/assets/final_ff7.jpg",darkRightImage2:"/assets/final_ff8.jpg",sliderLine:0,hSize:0,sliderPosition:.5,darked:!0}},created:function(){var e=this;le.$on("darkModeEnabled",(function(t){e.darked=t}))}},G=q,J=(a("cccb"),a("b0af")),K=a("99d9"),Y=a("12b2"),Q=a("0e8f"),X=a("a722"),Z=Object(u["a"])(G,R,$,!1,null,null,null),ee=Z.exports;p()(Z,{VBtn:h["a"],VCard:J["a"],VCardActions:K["a"],VCardTitle:Y["a"],VFlex:Q["a"],VIcon:m["a"],VLayout:X["a"]});var te=a("0a89"),ae=a.n(te);n["default"].use(H["a"]),n["default"].use(ae.a);var ne=new H["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ee},{path:"/contact",name:"contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/resume",name:"resume",component:function(){return a.e("about").then(a.bind(null,"1ba2"))}},{path:"/blog",name:"blog",component:function(){return a.e("about").then(a.bind(null,"fd3f"))}},{path:"/blog/:id",name:"blogPost",component:function(){return a.e("about").then(a.bind(null,"6b0f"))}},{path:"/services",name:"services",component:function(){return a.e("about").then(a.bind(null,"f23e"))}},{path:"/portfolio",name:"portfolio",component:function(){return a.e("about").then(a.bind(null,"d084"))}},{path:"/portfolio/video",name:"videoPortfolio",component:function(){return a.e("about").then(a.bind(null,"acf1"))}},{path:"/portfolio/graphic",name:"graphicPortfolio",component:function(){return a.e("about").then(a.bind(null,"cc8b"))}},{path:"/portfolio/projects",name:"webPortfolio",component:function(){return a.e("about").then(a.bind(null,"c753"))}},{path:"*",name:"Error",component:function(){return a.e("about").then(a.bind(null,"dda8"))}}]}),re=a("9747"),oe=a.n(re),ie=a("0284"),se=a.n(ie),le=new n["default"];n["default"].config.productionTip=!1;new n["default"]({router:ne,render:function(e){return e(F)}}).$mount("#app"),n["default"].use(oe.a),n["default"].use(se.a,{id:"UA-135285468-2",router:ne})},"64a9":function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("d563"),r=a.n(n);r.a},d563:function(e,t,a){}});
//# sourceMappingURL=app.a6d48c26.js.map