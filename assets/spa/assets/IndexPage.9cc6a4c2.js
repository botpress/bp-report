import{c as L,h as $,b as Ie,d as ye}from"./dom.0dd266ae.js";import{U as s,ad as m,l as I,u as R,aa as j,bx as Y,ag as ue,br as xe,aZ as C,ap as de,by as Te,b7 as Ve,at as Be,am as me,s as Le,b4 as pe,bo as Ce,bs as Oe,bw as Qe,aH as $e,az as O,V as z,b2 as V,a3 as B,a2 as Z,F,Y as A,X as M,aF as je,a0 as Ee,W as G,J as De}from"./index.b2200ba1.js";import{u as Pe,a as Re,Q as J,b as ce,c as Ae,v as ze,R as Fe}from"./Ripple.53e80b10.js";import{Q as He}from"./QResizeObserver.0607589d.js";import{b as Ne}from"./index.b7f28e66.js";var Ke=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const t=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:t.value},$(i.default))}});const N={dark:{type:Boolean,default:null}};function K(e,i){return s(()=>e.dark===null?i.dark.isActive:e.dark)}function Ue(e,i){const t=I(null),n=s(()=>e.disable===!0?null:m("span",{ref:t,class:"no-outline",tabindex:-1}));function l(r){const u=i.value;r!==void 0&&r.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():t.value!==null&&(r===void 0||u!==null&&u.contains(r.target)===!0)&&t.value.focus()}return{refocusTargetEl:n,refocusTarget:l}}const Me={name:String};function Ge(e={}){return(i,t,n)=>{i[t](m("input",{class:"hidden"+(n||""),...e.value}))}}var We={xs:30,sm:35,md:40,lg:50,xl:60};const Ye={...N,...Re,...Me,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ze=["update:modelValue"];function Je(e,i){const{props:t,slots:n,emit:l,proxy:r}=j(),{$q:u}=r,a=K(t,u),d=I(null),{refocusTargetEl:g,refocusTarget:v}=Ue(t,d),p=Pe(t,We),k=s(()=>t.val!==void 0&&Array.isArray(t.modelValue)),y=s(()=>{const b=R(t.val);return k.value===!0?t.modelValue.findIndex(c=>R(c)===b):-1}),h=s(()=>k.value===!0?y.value>-1:R(t.modelValue)===R(t.trueValue)),f=s(()=>k.value===!0?y.value===-1:R(t.modelValue)===R(t.falseValue)),q=s(()=>h.value===!1&&f.value===!1),w=s(()=>t.disable===!0?-1:t.tabindex||0),o=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(a.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),_=s(()=>{const b=h.value===!0?"truthy":f.value===!0?"falsy":"indet",c=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?h.value===!0:f.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${b}${c}`}),x=s(()=>{const b={type:"checkbox"};return t.name!==void 0&&Object.assign(b,{"^checked":h.value===!0?"checked":void 0,name:t.name,value:k.value===!0?t.val:t.trueValue}),b}),D=Ge(x),X=s(()=>{const b={tabindex:w.value,role:"checkbox","aria-label":t.label,"aria-checked":q.value===!0?"mixed":h.value===!0?"true":"false"};return t.disable===!0&&(b["aria-disabled"]="true"),b});function P(b){b!==void 0&&(Y(b),v(b)),t.disable!==!0&&l("update:modelValue",ee(),b)}function ee(){if(k.value===!0){if(h.value===!0){const b=t.modelValue.slice();return b.splice(y.value,1),b}return t.modelValue.concat([t.val])}if(h.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(f.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function te(b){(b.keyCode===13||b.keyCode===32)&&Y(b)}function ne(b){(b.keyCode===13||b.keyCode===32)&&P(b)}const ae=i(h,q);return Object.assign(r,{toggle:P}),()=>{const b=ae();t.disable!==!0&&D(b,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const c=[m("div",{class:_.value,style:p.value},b)];g.value!==null&&c.push(g.value);const T=t.label!==void 0?Ie(n.default,[t.label]):$(n.default);return T!==void 0&&c.push(m("div",{class:`q-${e}__label q-anchor--skip`},T)),m("div",{ref:d,class:o.value,...X.value,onClick:P,onKeydown:te,onKeyup:ne},c)}}var ge=L({name:"QToggle",props:{...Ye,icon:String,iconColor:String},emits:Ze,setup(e){function i(t,n){const l=s(()=>(t.value===!0?e.checkedIcon:n.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=s(()=>t.value===!0?e.iconColor:null);return()=>[m("div",{class:"q-toggle__track"}),m("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},l.value!==void 0?[m(J,{name:l.value,color:r.value})]:void 0)]}return Je("toggle",i)}}),Xe=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const t=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:t.value},$(i.default))}}),et=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:t}){const{proxy:{$q:n}}=j(),l=ue(xe,()=>{console.error("QHeader needs to be child of QLayout")}),r=I(parseInt(e.heightHint,10)),u=I(!0),a=s(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||n.platform.is.ios&&l.isContainer.value===!0),d=s(()=>{if(e.modelValue!==!0)return 0;if(a.value===!0)return u.value===!0?r.value:0;const o=r.value-l.scroll.value.position;return o>0?o:0}),g=s(()=>e.modelValue!==!0||a.value===!0&&u.value!==!0),v=s(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),p=s(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=s(()=>{const o=l.rows.value.top,_={};return o[0]==="l"&&l.left.space===!0&&(_[n.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(_[n.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),_});function y(o,_){l.update("header",o,_)}function h(o,_){o.value!==_&&(o.value=_)}function f({height:o}){h(r,o),y("size",o)}function q(o){v.value===!0&&h(u,!0),t("focusin",o)}C(()=>e.modelValue,o=>{y("space",o),h(u,!0),l.animate()}),C(d,o=>{y("offset",o)}),C(()=>e.reveal,o=>{o===!1&&h(u,e.modelValue)}),C(u,o=>{l.animate(),t("reveal",o)}),C(l.scroll,o=>{e.reveal===!0&&h(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const w={};return l.instances.header=w,e.modelValue===!0&&y("size",r.value),y("space",e.modelValue),y("offset",d.value),de(()=>{l.instances.header===w&&(l.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const o=ye(i.default,[]);return e.elevated===!0&&o.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(m(He,{debounce:0,onResize:f})),m("header",{class:p.value,style:k.value,onFocusin:q},o)}}}),se=L({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const t=s(()=>parseInt(e.lines,10)),n=s(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(t.value===1?" ellipsis":"")),l=s(()=>e.lines!==void 0&&t.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":t.value}:null);return()=>m("div",{style:l.value,class:n.value},$(i.default))}}),H=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const t=s(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:t.value},$(i.default))}}),qe=L({name:"QItem",props:{...N,...ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:t}){const{proxy:{$q:n}}=j(),l=K(e,n),{hasRouterLink:r,hasLink:u,linkProps:a,linkClass:d,linkTag:g,navigateToRouterLink:v}=Ae(),p=I(null),k=I(null),y=s(()=>e.clickable===!0||u.value===!0||e.tag==="label"),h=s(()=>e.disable!==!0&&y.value===!0),f=s(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?d.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=s(()=>{if(e.insetLevel===void 0)return null;const x=n.lang.rtl===!0?"Right":"Left";return{["padding"+x]:16+e.insetLevel*56+"px"}});function w(x){h.value===!0&&(k.value!==null&&(x.qKeyEvent!==!0&&document.activeElement===p.value?k.value.focus():document.activeElement===k.value&&p.value.focus()),r.value===!0&&v(x),t("click",x))}function o(x){if(h.value===!0&&Te(x,13)===!0){Y(x),x.qKeyEvent=!0;const D=new MouseEvent("click",x);D.qKeyEvent=!0,p.value.dispatchEvent(D)}t("keyup",x)}function _(){const x=ye(i.default,[]);return h.value===!0&&x.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:k})),x}return()=>{const x={ref:p,class:f.value,style:q.value,onClick:w,onKeyup:o};return h.value===!0?(x.tabindex=e.tabindex||"0",Object.assign(x,a.value)):y.value===!0&&(x["aria-disabled"]="true"),m(g.value,x,_())}}}),tt=L({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:i,emit:t}){let n=!1,l,r,u,a,d,g;function v(){l&&l(),l=null,n=!1,clearTimeout(u),clearTimeout(a),r!==void 0&&r.removeEventListener("transitionend",d),d=null}function p(f,q,w){f.style.overflowY="hidden",q!==void 0&&(f.style.height=`${q}px`),f.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,n=!0,l=w}function k(f,q){f.style.overflowY=null,f.style.height=null,f.style.transition=null,v(),q!==g&&t(q)}function y(f,q){let w=0;r=f,n===!0?(v(),w=f.offsetHeight===f.scrollHeight?0:void 0):g="hide",p(f,w,q),u=setTimeout(()=>{f.style.height=`${f.scrollHeight}px`,d=o=>{(Object(o)!==o||o.target===f)&&k(f,"show")},f.addEventListener("transitionend",d),a=setTimeout(d,e.duration*1.1)},100)}function h(f,q){let w;r=f,n===!0?v():(g="show",w=f.scrollHeight),p(f,w,q),u=setTimeout(()=>{f.style.height=0,d=o=>{(Object(o)!==o||o.target===f)&&k(f,"hide")},f.addEventListener("transitionend",d),a=setTimeout(d,e.duration*1.1)},100)}return de(()=>{n===!0&&v()}),()=>m(Ve,{css:!1,appear:e.appear,onEnter:y,onLeave:h},i.default)}});const nt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},le={xs:2,sm:4,md:8,lg:16,xl:24};var be=L({name:"QSeparator",props:{...N,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const i=j(),t=K(e,i.proxy.$q),n=s(()=>e.vertical===!0?"vertical":"horizontal"),l=s(()=>` q-separator--${n.value}`),r=s(()=>e.inset!==!1?`${l.value}-${nt[e.inset]}`:""),u=s(()=>`q-separator${l.value}${r.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),a=s(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const g=e.spaced===!0?`${le.md}px`:e.spaced in le?`${le[e.spaced]}px`:e.spaced,v=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${v[0]}`]=d[`margin${v[1]}`]=g}return d});return()=>m("hr",{class:u.value,style:a.value,"aria-orientation":n.value})}});const at={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},lt=["before-show","show","before-hide","hide"];function ot({showing:e,canShow:i,hideOnRouteChange:t,handleShow:n,handleHide:l,processOnMount:r}){const u=j(),{props:a,emit:d,proxy:g}=u;let v;function p(o){e.value===!0?h(o):k(o)}function k(o){if(a.disable===!0||o!==void 0&&o.qAnchorHandled===!0||i!==void 0&&i(o)!==!0)return;const _=a["onUpdate:modelValue"]!==void 0;_===!0&&(d("update:modelValue",!0),v=o,me(()=>{v===o&&(v=void 0)})),(a.modelValue===null||_===!1)&&y(o)}function y(o){e.value!==!0&&(e.value=!0,d("before-show",o),n!==void 0?n(o):d("show",o))}function h(o){if(a.disable===!0)return;const _=a["onUpdate:modelValue"]!==void 0;_===!0&&(d("update:modelValue",!1),v=o,me(()=>{v===o&&(v=void 0)})),(a.modelValue===null||_===!1)&&f(o)}function f(o){e.value!==!1&&(e.value=!1,d("before-hide",o),l!==void 0?l(o):d("hide",o))}function q(o){a.disable===!0&&o===!0?a["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):o===!0!==e.value&&(o===!0?y:f)(v)}C(()=>a.modelValue,q),t!==void 0&&ze(u)===!0&&C(()=>g.$route.fullPath,()=>{t.value===!0&&e.value===!0&&h()}),r===!0&&Be(()=>{q(a.modelValue)});const w={show:k,hide:h,toggle:p};return Object.assign(g,w),w}let oe,W=0;const S=new Array(256);for(let e=0;e<256;e++)S[e]=(e+256).toString(16).substring(1);const it=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return i=>{const t=new Uint8Array(i);return e.getRandomValues(t),t}}return i=>{const t=[];for(let n=i;n>0;n--)t.push(Math.floor(Math.random()*256));return t}})(),he=4096;function rt(){(oe===void 0||W+16>he)&&(W=0,oe=it(he));const e=Array.prototype.slice.call(oe,W,W+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,S[e[0]]+S[e[1]]+S[e[2]]+S[e[3]]+"-"+S[e[4]]+S[e[5]]+"-"+S[e[6]]+S[e[7]]+"-"+S[e[8]]+S[e[9]]+"-"+S[e[10]]+S[e[11]]+S[e[12]]+S[e[13]]+S[e[14]]+S[e[15]]}const E=Le({}),ut=Object.keys(ce);var st=L({name:"QExpansionItem",props:{...ce,...at,...N,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...lt,"click","after-show","after-hide"],setup(e,{slots:i,emit:t}){const{proxy:{$q:n}}=j(),l=K(e,n),r=I(e.modelValue!==null?e.modelValue:e.defaultOpened),u=I(null),{hide:a,toggle:d}=ot({showing:r});let g,v;const p=s(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),k=s(()=>{if(e.contentInsetLevel===void 0)return null;const c=n.lang.rtl===!0?"Right":"Left";return{["padding"+c]:e.contentInsetLevel*56+"px"}}),y=s(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),h=s(()=>{const c={};return ut.forEach(T=>{c[T]=e[T]}),c}),f=s(()=>y.value===!0||e.expandIconToggle!==!0),q=s(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||n.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),w=s(()=>e.disable!==!0&&(y.value===!0||e.expandIconToggle===!0));C(()=>e.group,c=>{v!==void 0&&v(),c!==void 0&&P()});function o(c){y.value!==!0&&d(c),t("click",c)}function _(c){c.keyCode===13&&x(c,!0)}function x(c,T){T!==!0&&u.value!==null&&u.value.focus(),d(c),Y(c)}function D(){t("after-show")}function X(){t("after-hide")}function P(){g===void 0&&(g=rt()),r.value===!0&&(E[e.group]=g);const c=C(r,U=>{U===!0?E[e.group]=g:E[e.group]===g&&delete E[e.group]}),T=C(()=>E[e.group],(U,Se)=>{Se===g&&U!==void 0&&U!==g&&a()});v=()=>{c(),T(),E[e.group]===g&&delete E[e.group],v=void 0}}function ee(){const c={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},T=[m(J,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:q.value})];return w.value===!0&&(Object.assign(c,{tabindex:0,onClick:x,onKeyup:_}),T.unshift(m("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),m(H,c,()=>T)}function te(){let c;return i.header!==void 0?c=[].concat(i.header({expanded:r.value===!0})):(c=[m(H,()=>[m(se,{lines:e.labelLines},()=>e.label||""),e.caption?m(se,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&c[e.switchToggleSide===!0?"push":"unshift"](m(H,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>m(J,{name:e.icon})))),e.disable!==!0&&c[e.switchToggleSide===!0?"unshift":"push"](ee()),c}function ne(){const c={ref:"item",style:e.headerStyle,class:e.headerClass,dark:l.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return f.value===!0&&(c.clickable=!0,c.onClick=o,y.value===!0&&Object.assign(c,h.value)),m(qe,c,te)}function ae(){return pe(m("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:k.value},$(i.default)),[[Ce,r.value]])}function b(){const c=[ne(),m(tt,{duration:e.duration,onShow:D,onHide:X},ae)];return e.expandSeparator===!0&&c.push(m(be,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:l.value}),m(be,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:l.value})),c}return e.group!==void 0&&P(),de(()=>{v!==void 0&&v()}),()=>m("div",{class:p.value},[m("div",{class:"q-expansion-item__container relative-position"},b())])}}),dt=L({name:"QList",props:{...N,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:i}){const t=j(),n=K(e,t.proxy.$q),l=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m("div",{class:l.value},$(i.default))}}),ct=L({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:i}){const{proxy:{$q:t}}=j(),n=ue(xe);ue(Oe,()=>{console.error("QPage needs to be child of QPageContainer")});const l=s(()=>{const u=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const a=n.isContainer.value===!0?n.containerHeight.value:t.screen.height;return e.styleFn(u,a)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-u+"px":t.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":t.screen.height-u+"px"}}),r=s(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:r.value,style:l.value},$(i.default))}});const ie=e=>e instanceof Date,fe=e=>Object.keys(e).length===0,Q=e=>e!=null&&typeof e=="object",ve=(e,...i)=>Object.prototype.hasOwnProperty.call(e,...i),re=e=>Q(e)&&fe(e),_e=(e,i)=>{if(e===i||!Q(e)||!Q(i))return{};const t=e,n=i;return Object.keys(n).reduce((l,r)=>{if(ve(t,r)){const u=_e(t[r],n[r]);return Q(u)&&fe(u)||(l[r]=u),l}return l[r]=n[r],l},{})},ke=(e,i)=>{if(e===i||!Q(e)||!Q(i))return{};const t=e,n=i;return Object.keys(t).reduce((l,r)=>{if(ve(n,r)){const u=ke(t[r],n[r]);return Q(u)&&fe(u)||(l[r]=u),l}return l[r]=void 0,l},{})},we=(e,i)=>{if(e===i)return{};if(!Q(e)||!Q(i))return i;const t=e,n=i;return ie(t)||ie(n)?t.valueOf()==n.valueOf()?{}:n:Object.keys(n).reduce((l,r)=>{if(ve(t,r)){const u=we(t[r],n[r]);return re(u)&&!ie(u)&&(re(t[r])||!re(n[r]))||(l[r]=u),l}return l},{})},ft=(e,i)=>({added:_e(e,i),deleted:ke(e,i),updated:we(e,i)}),vt={setup(){const e=I(null),i=I(null),t=I([]),n=I(!1),l=I(!1),r=I(null),u=s(()=>t.value.filter(a=>n.value||a.debugType==="event"));return{results:t,showLogs:n,filtered:u,expandAll:l,description:r,botId:e,reportId:i}},mounted(){const e=window.location.search,t=new URLSearchParams(e).get("reportId");this.reportId=t,Ne.get(`/api/v1/bots/303-tester/mod/debug/query.json?id=${t}`).then(n=>{this.description=n.data.description;const l=n.data.mergedLogsAndEvents.filter(a=>a.debugType==="event"),r=n.data.mergedLogsAndEvents.filter(a=>a.debugType!=="event");this.botId=l[0].botId;const u=[];for(let a=1;a<l.length;a++){const d=p=>({state:p.state,flags:p.flags}),g=d(l[a]),v=d(l[a-1]);u.push(ft(g,v))}for(let a=1;a<l.length;a++)l[a].diff=u[a];this.results=l.map(a=>{var g,v,p;const d={};return((g=a.diff)==null?void 0:g.added)&&Object.keys(a.diff.added).length>0&&(d.added=a.diff.added),((v=a.diff)==null?void 0:v.removed)&&Object.keys(a.diff.removed).length>0&&(d.removed=a.diff.removed),((p=a.diff)==null?void 0:p.updated)&&Object.keys(a.diff.updated).length>0&&(d.updated=a.diff.updated),{debugType:a.debugType,timestamp:a.timestamp,simplifiedDiff:d,raw:a}}),this.results=this.results.concat(r),this.results.sort((a,d)=>{const g=Date.parse(a.timestamp),v=Date.parse(d.timestamp);return v>g?-1:v<g})})}},mt={class:"text-h6 q-pl-md full-width"},gt=Z("Description of issue for botId "),bt={class:"text-body1 q-pl-md q-mt-sm"},ht=Z("Events and logs"),yt={key:0,class:"q-ma-md"},xt={key:0,class:"text-h6 q-mt-md"},pt=A("div",{class:"text-h6 q-mt-md"},"Payload",-1),qt=A("div",{class:"text-h6 q-mt-md"},"Raw Event",-1),_t={key:1,class:"q-ma-md"};function kt(e,i,t,n,l,r){const u=$e("json-tree");return O(),z(ct,{class:"q-my-lg full-width overflow-hidden"},{default:V(()=>[B(et,null,{default:V(()=>[B(Xe,{class:"bg-blue-9"},{default:V(()=>[B(Ke,null,{default:V(()=>[Z(" Log Snapshot "+F(n.reportId),1)]),_:1}),B(ge,{modelValue:n.showLogs,"onUpdate:modelValue":i[0]||(i[0]=a=>n.showLogs=a),label:"Show Logs",color:"white"},null,8,["modelValue"]),B(ge,{modelValue:n.expandAll,"onUpdate:modelValue":i[1]||(i[1]=a=>n.expandAll=a),label:"Expand All",color:"white"},null,8,["modelValue"])]),_:1})]),_:1}),A("div",mt,[gt,A("strong",null,F(n.botId),1)]),A("div",bt,F(n.description),1),(O(),z(dt,{dense:"",class:"full-width q-mt-lg",key:n.expandAll,separator:!n.showLogs},{default:V(()=>[B(se,{header:""},{default:V(()=>[ht]),_:1}),(O(!0),M(De,null,je(n.filtered,(a,d)=>(O(),z(st,{key:d,dense:"","dense-toggle":"","default-opened":n.expandAll,class:"full-width","header-class":a.debugType},Ee({default:V(()=>[a.debugType==="event"?(O(),M("div",yt,[Object.keys(a.simplifiedDiff).length?(O(),M("div",xt,"State & Flag Changes")):G("",!0),Object.keys(a.simplifiedDiff).length?(O(),z(u,{key:1,data:a.simplifiedDiff,showDoubleQuotes:!1},null,8,["data"])):G("",!0),pt,B(u,{data:a.raw.payload,showDoubleQuotes:!1},null,8,["data"]),qt,B(u,{data:a.raw,showDoubleQuotes:!1,deep:n.expandAll?void 0:0},null,8,["data","deep"])])):G("",!0),a.debugType==="log"?(O(),M("div",_t,[B(u,{data:a,showDoubleQuotes:!1},null,8,["data"])])):G("",!0)]),_:2},[a.debugType==="event"?{name:"header",fn:V(()=>[pe((O(),z(qe,{clickable:"",class:"full-width"},{default:V(()=>[B(H,{avatar:""},{default:V(()=>[B(J,{name:a.raw.direction==="incoming"?"account_circle":"smart_toy"},null,8,["name"])]),_:2},1024),B(H,null,{default:V(()=>[Z(F(a.raw.preview),1)]),_:2},1024)]),_:2},1024)),[[Fe]])])}:{name:"header",fn:V(()=>[A("code",{class:"full-width"},F(a.message),1)])}]),1032,["default-opened","header-class"]))),128))]),_:1},8,["separator"]))]),_:1})}var Bt=Qe(vt,[["render",kt]]);export{Bt as default};