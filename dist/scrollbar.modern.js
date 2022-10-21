import t from"zustand";import r,{useLayoutEffect as e,useEffect as o,forwardRef as n,useRef as i,useImperativeHandle as l,useCallback as c,useState as s}from"react";import{addEffect as a,invalidate as u}from"@react-three/fiber";import d from"debounce";import h from"@studio-freight/lenis";import{useInView as v}from"react-intersection-observer";import p from"vecn";function w(){return w=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},w.apply(this,arguments)}function f(t,r){if(null==t)return{};var e,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r.indexOf(e=i[o])>=0||(n[e]=t[e]);return n}function g(t){var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof r?r:String(r)}const m=t(t=>({debug:!1,scaleMultiplier:1,globalRender:!0,globalPriority:1e3,globalAutoClear:!1,globalClearDepth:!0,globalRenderQueue:!1,clearGlobalRenderQueue:()=>t(()=>({globalRenderQueue:!1})),isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:(r,e,o={})=>t(({canvasChildren:t})=>Object.getOwnPropertyDescriptor(t,r)?(t[r].instances+=1,t[r].props.inactive=!1,{canvasChildren:t}):{canvasChildren:w({},t,{[r]:{mesh:e,props:o,instances:1}})}),updateCanvas:(r,e)=>t(({canvasChildren:t})=>{if(!t[r])return;const{[r]:{mesh:o,props:n,instances:i}}=t;return{canvasChildren:w({},t,{[r]:{mesh:o,props:w({},n,e),instances:i}})}}),removeFromCanvas:(r,e=!0)=>t(({canvasChildren:t})=>{var o;return(null==(o=t[r])?void 0:o.instances)>1?(t[r].instances-=1,{canvasChildren:t}):e?{canvasChildren:f(t,[r].map(g))}:(t[r].instances=0,t[r].props.inactive=!0,{canvasChildren:w({},t)})}),pageReflow:0,requestReflow:()=>{t(t=>({pageReflow:t.pageReflow+1}))},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:""},scrollTo:t=>window.scrollTo(0,t),onScroll:()=>()=>{}})),b=()=>({enabled:m(t=>t.hasSmoothScrollbar),scroll:m(t=>t.scroll),scrollTo:m(t=>t.scrollTo),onScroll:m(t=>t.onScroll)}),y="undefined"!=typeof window?e:o,S=["children","duration","easing","smooth","direction","config"],C=t=>1===t?1:1-Math.pow(2,-10*t);var x=n(function(t,r){let{children:e,duration:n=1,easing:c=C,smooth:s=!0,direction:a="vertical",config:u}=t,d=f(t,S);const v=i();return l(r,()=>({start:()=>{var t;return null==(t=v.current)?void 0:t.start()},stop:()=>{var t;return null==(t=v.current)?void 0:t.stop()},on:(t,r)=>{var e;return null==(e=v.current)?void 0:e.on(t,r)},once:(t,r)=>{var e;return null==(e=v.current)?void 0:e.once(t,r)},off:(t,r)=>{var e;return null==(e=v.current)?void 0:e.off(t,r)},scrollTo:(t,r)=>{var e;return null==(e=v.current)?void 0:e.scrollTo(t,r)},raf:t=>{var r;return null==(r=v.current)?void 0:r.raf(t)}})),o(function(){const t=v.current=new h(w({duration:n,easing:c,smooth:s,direction:a},u));return()=>{t.destroy()}},[n,c,s,a]),e&&e(d)});const R=({children:t,enabled:e=!0,locked:n=!1,scrollRestoration:l="auto",disablePointerOnScroll:s=!0,horizontal:h=!1,config:v})=>{const p=i(),f=i(),g=i(!1),b=m(t=>t.scroll);b.direction=h?"horizontal":"vertical";const S=t=>{s&&p.current&&g.current!==t&&(g.current=t,p.current.style.pointerEvents=t?"none":"auto")},C=c(()=>{S(!1)},[]),R=c(t=>{var r;return null==(r=f.current)||r.on("scroll",t),()=>{var r;return null==(r=f.current)?void 0:r.off("scroll",t)}},[]);return y(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=l)},[]),o(()=>{var t,r;const o=a(t=>{var r;return null==(r=f.current)?void 0:r.raf(t)});null==(t=f.current)||t.on("scroll",({scroll:t,limit:r,velocity:e,direction:o,progress:n})=>{b.y="vertical"===o?t:0,b.x="horizontal"===o?t:0,b.limit=r,b.velocity=e,b.direction=o,b.progress=n;const i=d.debounce(()=>S(!0),100,!0);Math.abs(e)>1.4?i():S(!1),u()}),m.setState({scrollTo:null==(r=f.current)?void 0:r.scrollTo}),m.setState({onScroll:R}),m.getState().scroll.y=window.scrollY,m.getState().scroll.x=window.scrollX,document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",e),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!e),m.setState({hasSmoothScrollbar:e});const n=()=>u();return window.addEventListener("pointermove",C),window.addEventListener("wheel",n),()=>{o(),window.removeEventListener("pointermove",C),window.removeEventListener("wheel",n)}},[e]),o(()=>{var t,r;n?null==(t=f.current)||t.stop():null==(r=f.current)||r.start()},[n]),r.createElement(x,{ref:f,smooth:e,direction:h?"horizontal":"vertical",config:v},r=>t(w({},r,{ref:p})))},E="undefined"!=typeof window;function T(t,r,e,o,n){return o+(t-r)*(n-o)/(e-r)}const j={rootMargin:"50%",threshold:0,autoUpdate:!0};function L(t,r){const e=function(){const[t,r]=s({width:E?window.innerWidth:Infinity,height:E?window.innerHeight:Infinity});return o(()=>{function t(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),t}(),{scroll:n,onScroll:l}=b(),a=m(t=>t.scaleMultiplier),u=m(t=>t.pageReflow),{rootMargin:d,threshold:h,autoUpdate:f}=w({},j,r),{ref:g,inView:S}=v({rootMargin:d,threshold:h});y(()=>{g(t.current)},[t]);const[C,x]=s(),R=i({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,L=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0}).current,[O,V]=s(L),z=i({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,U=i(p.vec3(0,0,0)).current;y(()=>{var r;const e=null==(r=t.current)?void 0:r.getBoundingClientRect();L.top=e.top+window.scrollY,L.bottom=e.bottom+window.scrollY,L.left=e.left+window.scrollX,L.right=e.right+window.scrollX,L.width=e.width,L.height=e.height,L.x=L.left+.5*e.width,L.y=L.top+.5*e.height,V(w({},L)),x(p.vec3((null==L?void 0:L.width)*a,(null==L?void 0:L.height)*a,1))},[t,e,u,a]);const M=c(({onlyUpdateInViewport:r=!0}={})=>{if(!t.current||r&&!R.inViewport)return;!function(t,r,e,o){t.top=r.top-e.y,t.bottom=r.bottom-e.y,t.left=r.left-e.x,t.right=r.right-e.x,t.width=r.width,t.height=r.height,t.x=t.left+.5*r.width-.5*o.width,t.y=t.top+.5*r.height-.5*o.height,t.positiveYUpBottom=o.height-t.bottom}(z,L,n,e),function(t,r,e){t.x=r.x*e,t.y=-1*r.y*e}(U,z,a);const o="horizontal"===n.direction,i=o?"width":"height",l=e[i]-z[o?"left":"top"];R.progress=T(l,0,e[i]+z[i],0,1),R.visibility=T(l,0,z[i],0,1),R.viewport=T(l,0,e[i],0,1)},[t,e,a,n]);return y(()=>{R.inViewport=S,M({onlyUpdateInViewport:!1})},[S]),y(()=>{M({onlyUpdateInViewport:!1})},[M]),o(()=>{if(f)return l(t=>M())},[f,M,l]),{rect:O,bounds:z,scale:C,position:U,scrollState:R,inViewport:S,update:()=>M({onlyUpdateInViewport:!1})}}export{R as SmoothScrollbar,b as useScrollbar,L as useTracker};
//# sourceMappingURL=scrollbar.modern.js.map
