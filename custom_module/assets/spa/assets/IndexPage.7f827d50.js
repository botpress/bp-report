import{c as L,h as Q,b as Se,d as ye}from"./dom.a9f3f6f5.js";import{U as d,ad as m,l as S,u as A,aa as j,bx as Y,ag as ue,br as xe,aZ as C,ap as de,by as Te,b7 as Ve,at as Be,am as me,s as Le,b4 as pe,bo as Ce,bs as Oe,bw as $e,aH as Qe,az as O,V as z,b2 as V,a3 as B,a2 as Z,F,Y as P,X as M,aF as je,a0 as Ee,W as G,J as De}from"./index.e75fb9e9.js";import{u as Re,a as Ae,Q as J,b as ce,c as Pe,v as ze,R as Fe}from"./Ripple.45e40e4f.js";import{Q as He}from"./QResizeObserver.6f66e913.js";import{b as Ne}from"./index.b7f28e66.js";var Ke=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const t=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:t.value},Q(o.default))}});const N={dark:{type:Boolean,default:null}};function K(e,o){return d(()=>e.dark===null?o.dark.isActive:e.dark)}function Ue(e,o){const t=S(null),n=d(()=>e.disable===!0?null:m("span",{ref:t,class:"no-outline",tabindex:-1}));function l(i){const u=o.value;i!==void 0&&i.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():t.value!==null&&(i===void 0||u!==null&&u.contains(i.target)===!0)&&t.value.focus()}return{refocusTargetEl:n,refocusTarget:l}}const Me={name:String};function Ge(e={}){return(o,t,n)=>{o[t](m("input",{class:"hidden"+(n||""),...e.value}))}}var We={xs:30,sm:35,md:40,lg:50,xl:60};const Ye={...N,...Ae,...Me,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ze=["update:modelValue"];function Je(e,o){const{props:t,slots:n,emit:l,proxy:i}=j(),{$q:u}=i,s=K(t,u),r=S(null),{refocusTargetEl:g,refocusTarget:v}=Ue(t,r),q=Re(t,We),y=d(()=>t.val!==void 0&&Array.isArray(t.modelValue)),x=d(()=>{const b=A(t.val);return y.value===!0?t.modelValue.findIndex(c=>A(c)===b):-1}),h=d(()=>y.value===!0?x.value>-1:A(t.modelValue)===A(t.trueValue)),f=d(()=>y.value===!0?x.value===-1:A(t.modelValue)===A(t.falseValue)),_=d(()=>h.value===!1&&f.value===!1),w=d(()=>t.disable===!0?-1:t.tabindex||0),a=d(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(s.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),k=d(()=>{const b=h.value===!0?"truthy":f.value===!0?"falsy":"indet",c=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?h.value===!0:f.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${b}${c}`}),p=d(()=>{const b={type:"checkbox"};return t.name!==void 0&&Object.assign(b,{"^checked":h.value===!0?"checked":void 0,name:t.name,value:y.value===!0?t.val:t.trueValue}),b}),D=Ge(p),X=d(()=>{const b={tabindex:w.value,role:"checkbox","aria-label":t.label,"aria-checked":_.value===!0?"mixed":h.value===!0?"true":"false"};return t.disable===!0&&(b["aria-disabled"]="true"),b});function R(b){b!==void 0&&(Y(b),v(b)),t.disable!==!0&&l("update:modelValue",ee(),b)}function ee(){if(y.value===!0){if(h.value===!0){const b=t.modelValue.slice();return b.splice(x.value,1),b}return t.modelValue.concat([t.val])}if(h.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(f.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function te(b){(b.keyCode===13||b.keyCode===32)&&Y(b)}function ne(b){(b.keyCode===13||b.keyCode===32)&&R(b)}const ae=o(h,_);return Object.assign(i,{toggle:R}),()=>{const b=ae();t.disable!==!0&&D(b,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const c=[m("div",{class:k.value,style:q.value},b)];g.value!==null&&c.push(g.value);const T=t.label!==void 0?Se(n.default,[t.label]):Q(n.default);return T!==void 0&&c.push(m("div",{class:`q-${e}__label q-anchor--skip`},T)),m("div",{ref:r,class:a.value,...X.value,onClick:R,onKeydown:te,onKeyup:ne},c)}}var ge=L({name:"QToggle",props:{...Ye,icon:String,iconColor:String},emits:Ze,setup(e){function o(t,n){const l=d(()=>(t.value===!0?e.checkedIcon:n.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),i=d(()=>t.value===!0?e.iconColor:null);return()=>[m("div",{class:"q-toggle__track"}),m("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},l.value!==void 0?[m(J,{name:l.value,color:i.value})]:void 0)]}return Je("toggle",o)}}),Xe=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const t=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:t.value},Q(o.default))}}),et=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:t}){const{proxy:{$q:n}}=j(),l=ue(xe,()=>{console.error("QHeader needs to be child of QLayout")}),i=S(parseInt(e.heightHint,10)),u=S(!0),s=d(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||n.platform.is.ios&&l.isContainer.value===!0),r=d(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return u.value===!0?i.value:0;const a=i.value-l.scroll.value.position;return a>0?a:0}),g=d(()=>e.modelValue!==!0||s.value===!0&&u.value!==!0),v=d(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),q=d(()=>"q-header q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=d(()=>{const a=l.rows.value.top,k={};return a[0]==="l"&&l.left.space===!0&&(k[n.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),a[2]==="r"&&l.right.space===!0&&(k[n.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),k});function x(a,k){l.update("header",a,k)}function h(a,k){a.value!==k&&(a.value=k)}function f({height:a}){h(i,a),x("size",a)}function _(a){v.value===!0&&h(u,!0),t("focusin",a)}C(()=>e.modelValue,a=>{x("space",a),h(u,!0),l.animate()}),C(r,a=>{x("offset",a)}),C(()=>e.reveal,a=>{a===!1&&h(u,e.modelValue)}),C(u,a=>{l.animate(),t("reveal",a)}),C(l.scroll,a=>{e.reveal===!0&&h(u,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const w={};return l.instances.header=w,e.modelValue===!0&&x("size",i.value),x("space",e.modelValue),x("offset",r.value),de(()=>{l.instances.header===w&&(l.instances.header=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const a=ye(o.default,[]);return e.elevated===!0&&a.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(m(He,{debounce:0,onResize:f})),m("header",{class:q.value,style:y.value,onFocusin:_},a)}}}),se=L({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const t=d(()=>parseInt(e.lines,10)),n=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),l=d(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>m("div",{style:l.value,class:n.value},Q(o.default))}}),H=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const t=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:t.value},Q(o.default))}}),qe=L({name:"QItem",props:{...N,...ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:t}){const{proxy:{$q:n}}=j(),l=K(e,n),{hasRouterLink:i,hasLink:u,linkProps:s,linkClass:r,linkTag:g,navigateToRouterLink:v}=Pe(),q=S(null),y=S(null),x=d(()=>e.clickable===!0||u.value===!0||e.tag==="label"),h=d(()=>e.disable!==!0&&x.value===!0),f=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?r.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=d(()=>{if(e.insetLevel===void 0)return null;const p=n.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function w(p){h.value===!0&&(y.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===q.value?y.value.focus():document.activeElement===y.value&&q.value.focus()),i.value===!0&&v(p),t("click",p))}function a(p){if(h.value===!0&&Te(p,13)===!0){Y(p),p.qKeyEvent=!0;const D=new MouseEvent("click",p);D.qKeyEvent=!0,q.value.dispatchEvent(D)}t("keyup",p)}function k(){const p=ye(o.default,[]);return h.value===!0&&p.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:y})),p}return()=>{const p={ref:q,class:f.value,style:_.value,onClick:w,onKeyup:a};return h.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):x.value===!0&&(p["aria-disabled"]="true"),m(g.value,p,k())}}}),tt=L({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:o,emit:t}){let n=!1,l,i,u,s,r,g;function v(){l&&l(),l=null,n=!1,clearTimeout(u),clearTimeout(s),i!==void 0&&i.removeEventListener("transitionend",r),r=null}function q(f,_,w){f.style.overflowY="hidden",_!==void 0&&(f.style.height=`${_}px`),f.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,n=!0,l=w}function y(f,_){f.style.overflowY=null,f.style.height=null,f.style.transition=null,v(),_!==g&&t(_)}function x(f,_){let w=0;i=f,n===!0?(v(),w=f.offsetHeight===f.scrollHeight?0:void 0):g="hide",q(f,w,_),u=setTimeout(()=>{f.style.height=`${f.scrollHeight}px`,r=a=>{(Object(a)!==a||a.target===f)&&y(f,"show")},f.addEventListener("transitionend",r),s=setTimeout(r,e.duration*1.1)},100)}function h(f,_){let w;i=f,n===!0?v():(g="show",w=f.scrollHeight),q(f,w,_),u=setTimeout(()=>{f.style.height=0,r=a=>{(Object(a)!==a||a.target===f)&&y(f,"hide")},f.addEventListener("transitionend",r),s=setTimeout(r,e.duration*1.1)},100)}return de(()=>{n===!0&&v()}),()=>m(Ve,{css:!1,appear:e.appear,onEnter:x,onLeave:h},o.default)}});const nt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},oe={xs:2,sm:4,md:8,lg:16,xl:24};var be=L({name:"QSeparator",props:{...N,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=j(),t=K(e,o.proxy.$q),n=d(()=>e.vertical===!0?"vertical":"horizontal"),l=d(()=>` q-separator--${n.value}`),i=d(()=>e.inset!==!1?`${l.value}-${nt[e.inset]}`:""),u=d(()=>`q-separator${l.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),s=d(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const g=e.spaced===!0?`${oe.md}px`:e.spaced in oe?`${oe[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${v[0]}`]=r[`margin${v[1]}`]=g}return r});return()=>m("hr",{class:u.value,style:s.value,"aria-orientation":n.value})}});const at={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ot=["before-show","show","before-hide","hide"];function lt({showing:e,canShow:o,hideOnRouteChange:t,handleShow:n,handleHide:l,processOnMount:i}){const u=j(),{props:s,emit:r,proxy:g}=u;let v;function q(a){e.value===!0?h(a):y(a)}function y(a){if(s.disable===!0||a!==void 0&&a.qAnchorHandled===!0||o!==void 0&&o(a)!==!0)return;const k=s["onUpdate:modelValue"]!==void 0;k===!0&&(r("update:modelValue",!0),v=a,me(()=>{v===a&&(v=void 0)})),(s.modelValue===null||k===!1)&&x(a)}function x(a){e.value!==!0&&(e.value=!0,r("before-show",a),n!==void 0?n(a):r("show",a))}function h(a){if(s.disable===!0)return;const k=s["onUpdate:modelValue"]!==void 0;k===!0&&(r("update:modelValue",!1),v=a,me(()=>{v===a&&(v=void 0)})),(s.modelValue===null||k===!1)&&f(a)}function f(a){e.value!==!1&&(e.value=!1,r("before-hide",a),l!==void 0?l(a):r("hide",a))}function _(a){s.disable===!0&&a===!0?s["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):a===!0!==e.value&&(a===!0?x:f)(v)}C(()=>s.modelValue,_),t!==void 0&&ze(u)===!0&&C(()=>g.$route.fullPath,()=>{t.value===!0&&e.value===!0&&h()}),i===!0&&Be(()=>{_(s.modelValue)});const w={show:y,hide:h,toggle:q};return Object.assign(g,w),w}let le,W=0;const I=new Array(256);for(let e=0;e<256;e++)I[e]=(e+256).toString(16).substring(1);const it=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let n=o;n>0;n--)t.push(Math.floor(Math.random()*256));return t}})(),he=4096;function rt(){(le===void 0||W+16>he)&&(W=0,le=it(he));const e=Array.prototype.slice.call(le,W,W+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,I[e[0]]+I[e[1]]+I[e[2]]+I[e[3]]+"-"+I[e[4]]+I[e[5]]+"-"+I[e[6]]+I[e[7]]+"-"+I[e[8]]+I[e[9]]+"-"+I[e[10]]+I[e[11]]+I[e[12]]+I[e[13]]+I[e[14]]+I[e[15]]}const E=Le({}),ut=Object.keys(ce);var st=L({name:"QExpansionItem",props:{...ce,...at,...N,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...ot,"click","after-show","after-hide"],setup(e,{slots:o,emit:t}){const{proxy:{$q:n}}=j(),l=K(e,n),i=S(e.modelValue!==null?e.modelValue:e.defaultOpened),u=S(null),{hide:s,toggle:r}=lt({showing:i});let g,v;const q=d(()=>`q-expansion-item q-item-type q-expansion-item--${i.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),y=d(()=>{if(e.contentInsetLevel===void 0)return null;const c=n.lang.rtl===!0?"Right":"Left";return{["padding"+c]:e.contentInsetLevel*56+"px"}}),x=d(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),h=d(()=>{const c={};return ut.forEach(T=>{c[T]=e[T]}),c}),f=d(()=>x.value===!0||e.expandIconToggle!==!0),_=d(()=>e.expandedIcon!==void 0&&i.value===!0?e.expandedIcon:e.expandIcon||n.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),w=d(()=>e.disable!==!0&&(x.value===!0||e.expandIconToggle===!0));C(()=>e.group,c=>{v!==void 0&&v(),c!==void 0&&R()});function a(c){x.value!==!0&&r(c),t("click",c)}function k(c){c.keyCode===13&&p(c,!0)}function p(c,T){T!==!0&&u.value!==null&&u.value.focus(),r(c),Y(c)}function D(){t("after-show")}function X(){t("after-hide")}function R(){g===void 0&&(g=rt()),i.value===!0&&(E[e.group]=g);const c=C(i,U=>{U===!0?E[e.group]=g:E[e.group]===g&&delete E[e.group]}),T=C(()=>E[e.group],(U,Ie)=>{Ie===g&&U!==void 0&&U!==g&&s()});v=()=>{c(),T(),E[e.group]===g&&delete E[e.group],v=void 0}}function ee(){const c={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},T=[m(J,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&i.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:_.value})];return w.value===!0&&(Object.assign(c,{tabindex:0,onClick:p,onKeyup:k}),T.unshift(m("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(H,c,()=>T)}function te(){let c;return o.header!==void 0?c=[].concat(o.header({expanded:i.value===!0})):(c=[m(H,()=>[m(se,{lines:e.labelLines},()=>e.label||""),e.caption?m(se,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&c[e.switchToggleSide===!0?"push":"unshift"](m(H,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(J,{name:e.icon})))),e.disable!==!0&&c[e.switchToggleSide===!0?"unshift":"push"](ee()),c}function ne(){const c={ref:"item",style:e.headerStyle,class:e.headerClass,dark:l.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return f.value===!0&&(c.clickable=!0,c.onClick=a,x.value===!0&&Object.assign(c,h.value)),m(qe,c,te)}function ae(){return pe(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:y.value},Q(o.default)),[[Ce,i.value]])}function b(){const c=[ne(),m(tt,{duration:e.duration,onShow:D,onHide:X},ae)];return e.expandSeparator===!0&&c.push(m(be,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:l.value}),m(be,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:l.value})),c}return e.group!==void 0&&R(),de(()=>{v!==void 0&&v()}),()=>m("div",{class:q.value},[m("div",{class:"q-expansion-item__container relative-position"},b())])}}),dt=L({name:"QList",props:{...N,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const t=j(),n=K(e,t.proxy.$q),l=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m("div",{class:l.value},Q(o.default))}}),ct=L({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:t}}=j(),n=ue(xe);ue(Oe,()=>{console.error("QPage needs to be child of QPageContainer")});const l=d(()=>{const u=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const s=n.isContainer.value===!0?n.containerHeight.value:t.screen.height;return e.styleFn(u,s)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-u+"px":t.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":t.screen.height-u+"px"}}),i=d(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:i.value,style:l.value},Q(o.default))}});const ie=e=>e instanceof Date,fe=e=>Object.keys(e).length===0,$=e=>e!=null&&typeof e=="object",ve=(e,...o)=>Object.prototype.hasOwnProperty.call(e,...o),re=e=>$(e)&&fe(e),_e=(e,o)=>{if(e===o||!$(e)||!$(o))return{};const t=e,n=o;return Object.keys(n).reduce((l,i)=>{if(ve(t,i)){const u=_e(t[i],n[i]);return $(u)&&fe(u)||(l[i]=u),l}return l[i]=n[i],l},{})},ke=(e,o)=>{if(e===o||!$(e)||!$(o))return{};const t=e,n=o;return Object.keys(t).reduce((l,i)=>{if(ve(n,i)){const u=ke(t[i],n[i]);return $(u)&&fe(u)||(l[i]=u),l}return l[i]=void 0,l},{})},we=(e,o)=>{if(e===o)return{};if(!$(e)||!$(o))return o;const t=e,n=o;return ie(t)||ie(n)?t.valueOf()==n.valueOf()?{}:n:Object.keys(n).reduce((l,i)=>{if(ve(t,i)){const u=we(t[i],n[i]);return re(u)&&!ie(u)&&(re(t[i])||!re(n[i]))||(l[i]=u),l}return l},{})},ft=(e,o)=>({added:_e(e,o),deleted:ke(e,o),updated:we(e,o)}),vt={setup(){const e=S(null),o=S(null),t=S([]),n=S(!1),l=S(!1),i=S(null),u=d(()=>t.value.filter(s=>n.value||s.debugType==="event"));return{results:t,showLogs:n,filtered:u,expandAll:l,description:i,botId:e,reportId:o}},mounted(){const e=window.location.search,o=new URLSearchParams(e),t=o.get("reportId"),n=o.get("botId");this.reportId=t,Ne.get(`/api/v1/bots/${n}/mod/debug/query.json?id=${t}`).then(l=>{this.description=l.data.description;const i=l.data.mergedLogsAndEvents.filter(r=>r.debugType==="event"),u=l.data.mergedLogsAndEvents.filter(r=>r.debugType!=="event");this.botId=i[0].botId;const s=[];for(let r=1;r<i.length;r++){const g=y=>({state:y.state,flags:y.flags}),v=g(i[r]),q=g(i[r-1]);s.push(ft(v,q))}for(let r=1;r<i.length;r++)i[r].diff=s[r];this.results=i.map(r=>{var v,q,y;const g={};return((v=r.diff)==null?void 0:v.added)&&Object.keys(r.diff.added).length>0&&(g.added=r.diff.added),((q=r.diff)==null?void 0:q.removed)&&Object.keys(r.diff.removed).length>0&&(g.removed=r.diff.removed),((y=r.diff)==null?void 0:y.updated)&&Object.keys(r.diff.updated).length>0&&(g.updated=r.diff.updated),{debugType:r.debugType,timestamp:r.timestamp,simplifiedDiff:g,raw:r}}),this.results=this.results.concat(u),this.results.sort((r,g)=>{const v=Date.parse(r.timestamp),q=Date.parse(g.timestamp);return q>v?-1:q<v})})}},mt={class:"text-h6 q-pl-md full-width"},gt=Z("Description of issue for botId "),bt={class:"text-body1 q-pl-md q-mt-sm"},ht=Z("Events and logs"),yt={key:0,class:"q-ma-md"},xt={key:0,class:"text-h6 q-mt-md"},pt=P("div",{class:"text-h6 q-mt-md"},"Payload",-1),qt=P("div",{class:"text-h6 q-mt-md"},"Raw Event",-1),_t={key:1,class:"q-ma-md"};function kt(e,o,t,n,l,i){const u=Qe("json-tree");return O(),z(ct,{class:"q-my-lg full-width overflow-hidden"},{default:V(()=>[B(et,null,{default:V(()=>[B(Xe,{class:"bg-blue-9"},{default:V(()=>[B(Ke,null,{default:V(()=>[Z(" Log Snapshot "+F(n.reportId),1)]),_:1}),B(ge,{modelValue:n.showLogs,"onUpdate:modelValue":o[0]||(o[0]=s=>n.showLogs=s),label:"Show Logs",color:"white"},null,8,["modelValue"]),B(ge,{modelValue:n.expandAll,"onUpdate:modelValue":o[1]||(o[1]=s=>n.expandAll=s),label:"Expand All",color:"white"},null,8,["modelValue"])]),_:1})]),_:1}),P("div",mt,[gt,P("strong",null,F(n.botId),1)]),P("div",bt,F(n.description),1),(O(),z(dt,{dense:"",class:"full-width q-mt-lg",key:n.expandAll,separator:!n.showLogs},{default:V(()=>[B(se,{header:""},{default:V(()=>[ht]),_:1}),(O(!0),M(De,null,je(n.filtered,(s,r)=>(O(),z(st,{key:r,dense:"","dense-toggle":"","default-opened":n.expandAll,class:"full-width","header-class":s.debugType},Ee({default:V(()=>[s.debugType==="event"?(O(),M("div",yt,[Object.keys(s.simplifiedDiff).length?(O(),M("div",xt,"State & Flag Changes")):G("",!0),Object.keys(s.simplifiedDiff).length?(O(),z(u,{key:1,data:s.simplifiedDiff,showDoubleQuotes:!1},null,8,["data"])):G("",!0),pt,B(u,{data:s.raw.payload,showDoubleQuotes:!1},null,8,["data"]),qt,B(u,{data:s.raw,showDoubleQuotes:!1,deep:n.expandAll?void 0:0},null,8,["data","deep"])])):G("",!0),s.debugType==="log"?(O(),M("div",_t,[B(u,{data:s,showDoubleQuotes:!1},null,8,["data"])])):G("",!0)]),_:2},[s.debugType==="event"?{name:"header",fn:V(()=>[pe((O(),z(qe,{clickable:"",class:"full-width"},{default:V(()=>[B(H,{avatar:""},{default:V(()=>[B(J,{name:s.raw.direction==="incoming"?"account_circle":"smart_toy"},null,8,["name"])]),_:2},1024),B(H,null,{default:V(()=>[Z(F(s.raw.preview),1)]),_:2},1024)]),_:2},1024)),[[Fe]])])}:{name:"header",fn:V(()=>[P("code",{class:"full-width"},F(s.message),1)])}]),1032,["default-opened","header-class"]))),128))]),_:1},8,["separator"]))]),_:1})}var Bt=$e(vt,[["render",kt]]);export{Bt as default};