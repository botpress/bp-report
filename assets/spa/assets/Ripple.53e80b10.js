import{U as c,ad as d,aa as P,bz as T,by as K,bA as V,bB as F,bC as N,bD as D}from"./index.b2200ba1.js";import{c as Q,h as U,b as $,e as H,a as X}from"./dom.0dd266ae.js";const Y={xs:18,sm:24,md:32,lg:38,xl:46},G={size:String};function J(e,r=Y){return c(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}const E="0 0 24 24",w=e=>e,S=e=>`ionicons ${e}`,j={"mdi-":e=>`mdi ${e}`,"icon-":w,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":w,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},z={o_:"-outlined",r_:"-round",s_:"-sharp"},I={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},W=new RegExp("^("+Object.keys(j).join("|")+")"),Z=new RegExp("^("+Object.keys(z).join("|")+")"),C=new RegExp("^("+Object.keys(I).join("|")+")"),ee=/^[Mm]\s?[-+]?\.?\d/,te=/^img:/,re=/^svguse:/,ne=/^ion-/,se=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var pe=Q({name:"QIcon",props:{...G,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:t}}=P(),s=J(e),a=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=c(()=>{let i,n=e.name;if(n==="none"||!n)return{none:!0};if(t.iconMapFn!==null){const u=t.iconMapFn(n);if(u!==void 0)if(u.icon!==void 0){if(n=u.icon,n==="none"||!n)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(ee.test(n)===!0){const[u,v=E]=n.split("|");return{svg:!0,viewBox:v,nodes:u.split("&&").map(g=>{const[p,b,k]=g.split("@@");return d("path",{style:b,d:p,transform:k})})}}if(te.test(n)===!0)return{img:!0,src:n.substring(4)};if(re.test(n)===!0){const[u,v=E]=n.split("|");return{svguse:!0,src:u.substring(7),viewBox:v}}let f=" ";const y=n.match(W);if(y!==null)i=j[y[1]](n);else if(se.test(n)===!0)i=n;else if(ne.test(n)===!0)i=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(C.test(n)===!0){i="notranslate material-symbols";const u=n.match(C);u!==null&&(n=n.substring(6),i+=I[u[1]]),f=n}else{i="notranslate material-icons";const u=n.match(Z);u!==null&&(n=n.substring(2),i+=z[u[1]]),f=n}return{cls:i,content:f}});return()=>{const i={class:a.value,style:s.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?d(e.tag,i,U(r.default)):o.value.img===!0?d("span",i,$(r.default,[d("img",{src:o.value.src})])):o.value.svg===!0?d("span",i,$(r.default,[d("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?d("span",i,$(r.default,[d("svg",{viewBox:o.value.viewBox},[d("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(i.class+=" "+o.value.cls),d(e.tag,i,$(r.default,[o.value.content])))}}});function ae(e){return e.appContext.config.globalProperties.$router!==void 0}function A(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function B(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function ie(e,r){for(const t in r){const s=r[t],a=e[t];if(typeof s=="string"){if(s!==a)return!1}else if(Array.isArray(a)===!1||a.length!==s.length||s.some((o,i)=>o!==a[i]))return!1}return!0}function O(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((t,s)=>t===r[s]):e.length===1&&e[0]===r}function oe(e,r){return Array.isArray(e)===!0?O(e,r):Array.isArray(r)===!0?O(r,e):e===r}function ue(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const t in e)if(oe(e[t],r[t])===!1)return!1;return!0}const de={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ve(e){const r=P(),{props:t,proxy:s}=r,a=ae(r),o=c(()=>t.disable!==!0&&t.href!==void 0),i=c(()=>a===!0&&t.disable!==!0&&o.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),n=c(()=>{if(i.value===!0)try{return s.$router.resolve(t.to)}catch{}return null}),f=c(()=>n.value!==null),y=c(()=>o.value===!0||f.value===!0),u=c(()=>t.type==="a"||y.value===!0?"a":t.tag||e||"div"),v=c(()=>o.value===!0?{href:t.href,target:t.target}:f.value===!0?{href:n.value.href,target:t.target}:{}),g=c(()=>{if(f.value===!1)return null;const{matched:l}=n.value,{length:h}=l,x=l[h-1];if(x===void 0)return-1;const m=s.$route.matched;if(m.length===0)return-1;const _=m.findIndex(B.bind(null,x));if(_>-1)return _;const q=A(l[h-2]);return h>1&&A(x)===q&&m[m.length-1].path!==q?m.findIndex(B.bind(null,l[h-2])):_}),p=c(()=>f.value===!0&&g.value>-1&&ie(s.$route.params,n.value.params)),b=c(()=>p.value===!0&&g.value===s.$route.matched.length-1&&ue(s.$route.params,n.value.params)),k=c(()=>f.value===!0?b.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":p.value===!0?` ${t.activeClass}`:"":"");function R(l){return t.disable===!0||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.__qNavigate!==!0&&l.defaultPrevented===!0||l.button!==void 0&&l.button!==0||t.target==="_blank"?!1:(T(l),s.$router[t.replace===!0?"replace":"push"](t.to).catch(h=>h))}return{hasRouterLink:f,hasHrefLink:o,hasLink:y,linkTag:u,linkRoute:n,linkIsActive:p,linkIsExactActive:b,linkClass:k,linkProps:v,navigateToRouterLink:R}}function le(e,r=250){let t=!1,s;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},r),s=e.apply(this,arguments)),s}}function L(e,r,t,s){t.modifiers.stop===!0&&N(e);const a=t.modifiers.color;let o=t.modifiers.center;o=o===!0||s===!0;const i=document.createElement("span"),n=document.createElement("span"),f=D(e),{left:y,top:u,width:v,height:g}=r.getBoundingClientRect(),p=Math.sqrt(v*v+g*g),b=p/2,k=`${(v-p)/2}px`,R=o?k:`${f.left-y-b}px`,l=`${(g-p)/2}px`,h=o?l:`${f.top-u-b}px`;n.className="q-ripple__inner",X(n,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${R},${h},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${a?" text-"+a:""}`,i.setAttribute("dir","ltr"),i.appendChild(n),r.appendChild(i);const x=()=>{i.remove(),clearTimeout(m)};t.abort.push(x);let m=setTimeout(()=>{n.classList.add("q-ripple__inner--enter"),n.style.transform=`translate3d(${k},${l},0) scale3d(1,1,1)`,n.style.opacity=.2,m=setTimeout(()=>{n.classList.remove("q-ripple__inner--enter"),n.classList.add("q-ripple__inner--leave"),n.style.opacity=0,m=setTimeout(()=>{i.remove(),t.abort.splice(t.abort.indexOf(x),1)},275)},250)},50)}function M(e,{modifiers:r,value:t,arg:s}){const a=Object.assign({},e.cfg.ripple,r,t);e.modifiers={early:a.early===!0,stop:a.stop===!0,center:a.center===!0,color:a.color||s,keyCodes:[].concat(a.keyCodes||13)}}var me=H({name:"ripple",beforeMount(e,r){const t=r.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const s={cfg:t,enabled:r.value!==!1,modifiers:{},abort:[],start(a){s.enabled===!0&&a.qSkipRipple!==!0&&a.type===(s.modifiers.early===!0?"pointerdown":"click")&&L(a,e,s,a.qKeyEvent===!0)},keystart:le(a=>{s.enabled===!0&&a.qSkipRipple!==!0&&K(a,s.modifiers.keyCodes)===!0&&a.type===`key${s.modifiers.early===!0?"down":"up"}`&&L(a,e,s,!0)},300)};M(s,r),e.__qripple=s,V(s,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,r){if(r.oldValue!==r.value){const t=e.__qripple;t!==void 0&&(t.enabled=r.value!==!1,t.enabled===!0&&Object(r.value)===r.value&&M(t,r))}},beforeUnmount(e){const r=e.__qripple;r!==void 0&&(r.abort.forEach(t=>{t()}),F(r,"main"),delete e._qripple)}});export{pe as Q,me as R,G as a,de as b,ve as c,Y as d,J as u,ae as v};
