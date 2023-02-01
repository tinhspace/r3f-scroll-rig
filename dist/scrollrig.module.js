import e,{useLayoutEffect as r,useEffect as t,forwardRef as n,useRef as o,useMemo as i,Fragment as a,cloneElement as c,useState as u,useCallback as l,memo as s,useImperativeHandle as f}from"react";import{useThree as d,invalidate as p,useFrame as v,Canvas as m,createPortal as y,useLoader as h,addEffect as g}from"@react-three/fiber";import{ResizeObserver as b}from"@juggle/resize-observer";import{parse as w}from"query-string";import S from"zustand";import E from"react-merge-refs";import{Vector2 as O,Color as R,Scene as C,MathUtils as T,DefaultLoadingManager as x,TextureLoader as I,ImageBitmapLoader as P,Texture as j,CanvasTexture as k}from"three";import{useInView as M}from"react-intersection-observer";import _ from"debounce";import V from"vecn";import{suspend as $}from"suspend-react";import D from"supports-webp";import L from"fast-deep-equal";import A from"@studio-freight/lenis";function F(){return F=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},F.apply(this,arguments)}function z(e,r){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},z(e,r)}function N(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t]);return o}function U(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof r?r:String(r)}var q="undefined"!=typeof window?r:t,Y={PRIORITY_PRELOAD:0,PRIORITY_SCISSORS:1,PRIORITY_VIEWPORTS:1,PRIORITY_GLOBAL:1e3,DEFAULT_SCALE_MULTIPLIER:1,preloadQueue:[]},W=S(function(e){return{debug:!1,scaleMultiplier:Y.DEFAULT_SCALE_MULTIPLIER,globalRender:!0,globalPriority:Y.PRIORITY_GLOBAL,globalClearDepth:!1,globalRenderQueue:!1,clearGlobalRenderQueue:function(){return e(function(){return{globalRenderQueue:!1}})},isCanvasAvailable:!0,hasSmoothScrollbar:!1,canvasChildren:{},renderToCanvas:function(r,t,n){return void 0===n&&(n={}),e(function(e){var o,i=e.canvasChildren;return Object.getOwnPropertyDescriptor(i,r)?(i[r].instances+=1,i[r].props.inactive=!1,{canvasChildren:i}):{canvasChildren:F({},i,((o={})[r]={mesh:t,props:n,instances:1},o))}})},updateCanvas:function(r,t){return e(function(e){var n,o=e.canvasChildren;if(o[r]){var i=o[r],a=i.instances;return{canvasChildren:F({},o,((n={})[r]={mesh:i.mesh,props:F({},i.props,t),instances:a},n))}}})},removeFromCanvas:function(r,t){return void 0===t&&(t=!0),e(function(e){var n,o=e.canvasChildren;return(null==(n=o[r])?void 0:n.instances)>1?(o[r].instances-=1,{canvasChildren:o}):t?{canvasChildren:N(o,[r].map(U))}:(o[r].instances=0,o[r].props.inactive=!0,{canvasChildren:F({},o)})})},pageReflow:0,requestReflow:function(){e(function(e){return{pageReflow:e.pageReflow+1}})},scroll:{y:0,x:0,limit:0,velocity:0,progress:0,direction:0,scrollDirection:void 0},scrollTo:function(e){return window.scrollTo(0,e)},onScroll:function(){return function(){}}}}),B=function(){var e=W(function(e){return e.requestReflow});return t(function(){"fonts"in document&&document.fonts.ready.then(function(){var r,t;r=e,t={}.timeout,"requestIdleCallback"in window?window.requestIdleCallback(r,{timeout:void 0===t?100:t}):setTimeout(r,0)})},[]),null},Q=["makeDefault"],G=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=N(r,Q),u=d(function(e){return e.set}),l=d(function(e){return e.camera}),s=d(function(e){return e.size}),f=d(function(e){return e.viewport}),p=o(null),v=W(function(e){return e.pageReflow}),m=W(function(e){return e.scaleMultiplier}),y=i(function(){var e,r=s.width*m,t=s.height*m,n=r/t,o=c.fov,i=(null==c||null==(e=c.position)?void 0:e[2])||Math.max(r,t);return o?i=t/(2*Math.tan(o/2*Math.PI/180)):o=180/Math.PI*2*Math.atan(t/(2*i)),{fov:o,distance:i,aspect:n}},[s,m,v]),h=y.fov,g=y.distance,b=y.aspect;return q(function(){p.current.updateProjectionMatrix(),p.current.updateMatrixWorld(),u(function(e){return{viewport:F({},e.viewport,f.getCurrentViewport(l))}})},[s,m,v]),q(function(){if(a){var e=l;return u(function(){return{camera:p.current}}),function(){return u(function(){return{camera:e}})}}},[p,a,u]),e.createElement("perspectiveCamera",F({ref:E([p,t]),position:[0,0,g],onUpdate:function(e){return e.updateProjectionMatrix()},near:.1,aspect:b,fov:h,far:2*g},c))}),H=["makeDefault"],X=n(function(r,t){var n=r.makeDefault,a=void 0!==n&&n,c=N(r,H),u=d(function(e){return e.set}),l=d(function(e){return e.camera}),s=d(function(e){return e.size}),f=W(function(e){return e.pageReflow}),p=W(function(e){return e.scaleMultiplier}),v=i(function(){return Math.max(s.width*p,s.height*p)},[s,f,p]),m=o(null);return q(function(){m.current.lookAt(0,0,0),m.current.updateProjectionMatrix(),m.current.updateMatrixWorld()},[v,s]),q(function(){if(a){var e=l;return u(function(){return{camera:m.current}}),function(){return u(function(){return{camera:e}})}}},[m,a,u]),e.createElement("orthographicCamera",F({left:s.width*p/-2,right:s.width*p/2,top:s.height*p/2,bottom:s.height*p/-2,far:2*v,position:[0,0,v],near:.001,ref:E([m,t]),onUpdate:function(e){return e.updateProjectionMatrix()}},c))});function J(e,r){e&&(!1===r?(e.wasFrustumCulled=e.frustumCulled,e.wasVisible=e.visible,e.visible=!0,e.frustumCulled=!1):(e.visible=!!e.wasVisible,e.frustumCulled=!!e.wasFrustumCulled),e.children.forEach(function(e){return J(e,r)}))}var K=new O,Z=function(e){void 0===e&&(e=[0]),W.getState().globalRenderQueue=W.getState().globalRenderQueue||[0],W.getState().globalRenderQueue=[].concat(W.getState().globalRenderQueue||[],e)},ee=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.autoClear,f=e.clearDepth,d=void 0!==f&&f;t&&n&&(r.autoClear=void 0!==s&&s,r.setScissor(o,i,a,c),r.setScissorTest(!0),n.layers.set(l),d&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1))},re=function(e){var r=e.gl,t=e.scene,n=e.camera,o=e.left,i=e.top,a=e.width,c=e.height,u=e.layer,l=void 0===u?0:u,s=e.scissor,f=void 0===s||s,d=e.autoClear,p=void 0!==d&&d,v=e.clearDepth,m=void 0!==v&&v;t&&n&&(r.getSize(K),r.autoClear=p,r.setViewport(o,i,a,c),r.setScissor(o,i,a,c),r.setScissorTest(f),n.layers.set(l),m&&r.clearDepth(),r.render(t,n),r.setScissorTest(!1),r.setViewport(0,0,K.x,K.y))},te=function(e,r,t,n){void 0===t&&(t=0),Y.preloadQueue.push(function(o,i,a){o.setScissorTest(!1),J(e||i,!1),r.layers.set(t),o.render(e||i,r||a),J(e||i,!0),n&&n()}),p()},ne=function(){var e=W(function(e){return e.isCanvasAvailable}),r=W(function(e){return e.hasSmoothScrollbar}),n=W(function(e){return e.requestReflow}),o=W(function(e){return e.pageReflow}),i=W(function(e){return e.debug}),a=W(function(e){return e.scaleMultiplier});return t(function(){i&&(window._scrollRig=window._scrollRig||{},window._scrollRig.reflow=n)},[]),{debug:i,isCanvasAvailable:e,hasSmoothScrollbar:r,scaleMultiplier:a,preloadScene:te,requestRender:Z,renderScissor:ee,renderViewport:re,reflow:n,reflowCompleted:o}},oe=function(r){var n=r.children,o=W(function(e){return e.canvasChildren}),i=ne();return t(function(){Object.keys(o).length||(i.debug&&console.log("GlobalRenderer","auto render empty canvas"),i.requestRender(),p())},[o]),i.debug&&console.log("GlobalChildren",Object.keys(o).length),e.createElement(e.Fragment,null,n,Object.keys(o).map(function(r){var t=o[r],n=t.mesh,u=t.props;return"function"==typeof n?e.createElement(a,{key:r},n(F({key:r},i,u))):c(n,F({key:r},u))}))},ie=function(){var e=d(function(e){return e.gl}),r=d(function(e){return e.frameloop}),t=W(function(e){return e.globalClearDepth}),n=W(function(e){return e.globalPriority}),o=ne();return q(function(){e.debug.checkShaderErrors=o.debug},[o.debug]),v(function(r){var t=r.camera,n=r.scene;Y.preloadQueue.length&&(Y.preloadQueue.forEach(function(r){return r(e,n,t)}),e.clear(),Y.preloadQueue=[],o.debug&&console.log("GlobalRenderer","preload complete. trigger global render"),o.requestRender(),p())},Y.PRIORITY_PRELOAD),v(function(n){var o=n.camera,i=n.scene,a=W.getState().globalRenderQueue;("always"===r||a)&&(o.layers.disableAll(),a?a.forEach(function(e){o.layers.enable(e)}):o.layers.enable(0),t&&e.clearDepth(),e.render(i,o)),W.getState().clearGlobalRenderQueue()},n),null};function ae(e){var r={exports:{}};return e(r,r.exports),r.exports}var ce="function"==typeof Symbol&&Symbol.for,ue=ce?Symbol.for("react.element"):60103,le=ce?Symbol.for("react.portal"):60106,se=ce?Symbol.for("react.fragment"):60107,fe=ce?Symbol.for("react.strict_mode"):60108,de=ce?Symbol.for("react.profiler"):60114,pe=ce?Symbol.for("react.provider"):60109,ve=ce?Symbol.for("react.context"):60110,me=ce?Symbol.for("react.async_mode"):60111,ye=ce?Symbol.for("react.concurrent_mode"):60111,he=ce?Symbol.for("react.forward_ref"):60112,ge=ce?Symbol.for("react.suspense"):60113,be=ce?Symbol.for("react.suspense_list"):60120,we=ce?Symbol.for("react.memo"):60115,Se=ce?Symbol.for("react.lazy"):60116,Ee=ce?Symbol.for("react.block"):60121,Oe=ce?Symbol.for("react.fundamental"):60117,Re=ce?Symbol.for("react.responder"):60118,Ce=ce?Symbol.for("react.scope"):60119;function Te(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case ue:switch(e=e.type){case me:case ye:case se:case de:case fe:case ge:return e;default:switch(e=e&&e.$$typeof){case ve:case he:case Se:case we:case pe:return e;default:return r}}case le:return r}}}function xe(e){return Te(e)===ye}var Ie={AsyncMode:me,ConcurrentMode:ye,ContextConsumer:ve,ContextProvider:pe,Element:ue,ForwardRef:he,Fragment:se,Lazy:Se,Memo:we,Portal:le,Profiler:de,StrictMode:fe,Suspense:ge,isAsyncMode:function(e){return xe(e)||Te(e)===me},isConcurrentMode:xe,isContextConsumer:function(e){return Te(e)===ve},isContextProvider:function(e){return Te(e)===pe},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===ue},isForwardRef:function(e){return Te(e)===he},isFragment:function(e){return Te(e)===se},isLazy:function(e){return Te(e)===Se},isMemo:function(e){return Te(e)===we},isPortal:function(e){return Te(e)===le},isProfiler:function(e){return Te(e)===de},isStrictMode:function(e){return Te(e)===fe},isSuspense:function(e){return Te(e)===ge},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===se||e===ye||e===de||e===fe||e===ge||e===be||"object"==typeof e&&null!==e&&(e.$$typeof===Se||e.$$typeof===we||e.$$typeof===pe||e.$$typeof===ve||e.$$typeof===he||e.$$typeof===Oe||e.$$typeof===Re||e.$$typeof===Ce||e.$$typeof===Ee)},typeOf:Te},Pe=ae(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,v=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var p=e.type;switch(p){case l:case s:case o:case a:case i:case d:return p;default:var y=p&&p.$$typeof;switch(y){case u:case f:case m:case v:case c:return y;default:return r}}case n:return r}}}var S=s,E=u,O=c,R=t,C=f,T=o,x=m,I=v,P=n,j=a,k=i,M=d,_=!1;function V(e){return w(e)===s}r.AsyncMode=l,r.ConcurrentMode=S,r.ContextConsumer=E,r.ContextProvider=O,r.Element=R,r.ForwardRef=C,r.Fragment=T,r.Lazy=x,r.Memo=I,r.Portal=P,r.Profiler=j,r.StrictMode=k,r.Suspense=M,r.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),V(e)||w(e)===l},r.isConcurrentMode=V,r.isContextConsumer=function(e){return w(e)===u},r.isContextProvider=function(e){return w(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return w(e)===f},r.isFragment=function(e){return w(e)===o},r.isLazy=function(e){return w(e)===m},r.isMemo=function(e){return w(e)===v},r.isPortal=function(e){return w(e)===n},r.isProfiler=function(e){return w(e)===a},r.isStrictMode=function(e){return w(e)===i},r.isSuspense=function(e){return w(e)===d},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===f||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b||e.$$typeof===y)},r.typeOf=w}()}),je=ae(function(e){e.exports="production"===process.env.NODE_ENV?Ie:Pe}),ke=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;function Ve(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var $e=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(e){return r[e]});if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=Ve(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))Me.call(t,a)&&(o[a]=t[a]);if(ke){n=ke(t);for(var c=0;c<n.length;c++)_e.call(t,n[c])&&(o[n[c]]=t[n[c]])}}return o},De=Function.call.bind(Object.prototype.hasOwnProperty),Le="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ae=De,Fe=function(){};if("production"!==process.env.NODE_ENV){var ze=Le,Ne={},Ue=Ae;Fe=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function qe(e,r,t,n,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(Ue(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}a=e[i](r,i,n,t,null,ze)}catch(e){a=e}if(!a||a instanceof Error||Fe((n||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in Ne)){Ne[a.message]=!0;var u=o?o():"";Fe("Failed "+t+" type: "+a.message+(null!=u?u:""))}}}qe.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(Ne={})};var Ye=qe,We=function(){};function Be(){return null}function Qe(){}function Ge(){}"production"!==process.env.NODE_ENV&&(We=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),Ge.resetWarningCache=Qe;var He=ae(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,n="<<anonymous>>",o={array:u("array"),bigint:u("bigint"),bool:u("boolean"),func:u("function"),number:u("number"),object:u("object"),string:u("string"),symbol:u("symbol"),any:c(Be),arrayOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=r[t];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var l=e(c,u,n,o,i+"["+u+"]",Le);if(l instanceof Error)return l}return null})},element:c(function(r,t,n,o,i){var c=r[t];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+n+"`, expected a single ReactElement.")}),elementType:c(function(e,r,t,n,o){var i=e[r];return je.isValidElementType(i)?null:new a("Invalid "+n+" `"+o+"` of type `"+f(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return c(function(r,t,o,i,c){return r[t]instanceof e?null:new a("Invalid "+i+" `"+c+"` of type `"+((u=r[t]).constructor&&u.constructor.name?u.constructor.name:n)+"` supplied to `"+o+"`, expected instance of `"+(e.name||n)+"`.");var u})},node:c(function(e,r,t,n,o){return s(e[r])?null:new a("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return c(function(r,t,n,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected an object.");for(var l in c)if(Ae(c,l)){var s=e(c,l,n,o,i+"."+l,Le);if(s instanceof Error)return s}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&We(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Be;function r(r,t,n,o,c){for(var u=r[t],l=0;l<e.length;l++)if(i(u,e[l]))return null;var s=JSON.stringify(e,function(e,r){return"symbol"===d(r)?String(r):r});return new a("Invalid "+o+" `"+c+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return c(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&We("Invalid argument supplied to oneOfType, expected an instance of array."),Be;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return We("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+p(t)+" at index "+r+"."),Be}return c(function(r,t,n,o,i){for(var c=[],u=0;u<e.length;u++){var l=(0,e[u])(r,t,n,o,i,Le);if(null==l)return null;l.data&&Ae(l.data,"expectedType")&&c.push(l.data.expectedType)}return new a("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")})},shape:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var p=e[s];if("function"!=typeof p)return l(n,o,i,s,d(p));var v=p(c,s,n,o,i+"."+s,Le);if(v)return v}return null})},exact:function(e){return c(function(r,t,n,o,i){var c=r[t],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var s=$e({},r[t],e);for(var p in s){var v=e[p];if(Ae(e,p)&&"function"!=typeof v)return l(n,o,i,p,d(v));if(!v)return new a("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=v(c,p,n,o,i+"."+p,Le);if(m)return m}return null})}};function i(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function c(e){function r(r,t,o,i,c,u,l){if(i=i||n,u=u||o,l!==Le){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}return null==t[o]?r?new a(null===t[o]?"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `null`.":"The "+c+" `"+u+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(t,o,i,c,u)}process;var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function u(e){return c(function(r,t,n,o,i,c){var u=r[t];return f(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+d(u)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null})}function l(e,r,t,n,o){return new a((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function s(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(s);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!s(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!s(a[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function d(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function p(e){var r=d(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,o.checkPropTypes=Ye,o.resetWarningCache=Ye.resetWarningCache,o.PropTypes=o,o}(je.isElement):function(){function e(e,r,t,n,o,i){if(i!==Le){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Ge,resetWarningCache:Qe};return t.PropTypes=t,t}()}),Xe=/*#__PURE__*/function(e){var r,t;function n(r){var t;return(t=e.call(this,r)||this).state={error:!1},t.props=r,t}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,z(r,t),n.getDerivedStateFromError=function(e){return{error:e}},n.prototype.render=function(){return this.state.error?(this.props.onError&&this.props.onError(this.state.error),null):this.props.children},n}(e.Component);Xe.propTypes={onError:He.func};var Je=["as","children","gl","style","orthographic","camera","debug","scaleMultiplier","globalRender","globalPriority","globalClearDepth"],Ke=["children","onError"],Ze=function(r){var t=r.as,n=void 0===t?m:t,o=r.children,i=r.gl,a=r.style,c=r.orthographic,u=r.camera,l=r.debug,s=r.scaleMultiplier,f=void 0===s?Y.DEFAULT_SCALE_MULTIPLIER:s,d=r.globalRender,p=void 0===d||d,v=r.globalPriority,y=void 0===v?Y.PRIORITY_GLOBAL:v,h=r.globalClearDepth,g=void 0!==h&&h,S=N(r,Je),E=W(function(e){return e.globalRender});return q(function(){var e=w(window.location.search);(l||void 0!==e.debug)&&W.setState({debug:!0})},[l]),q(function(){W.setState({scaleMultiplier:f,globalRender:p,globalPriority:y,globalClearDepth:g})},[f,y,p,g]),e.createElement(n,F({id:"ScrollRig-canvas",camera:{manual:!0},gl:F({failIfMajorPerformanceCaveat:!0},i),resize:{scroll:!1,debounce:0,polyfill:b},style:F({position:"fixed",top:0,left:0,right:0,height:"100vh"},a)},S),"function"==typeof o?o(e.createElement(oe,null)):e.createElement(oe,null,o),E&&e.createElement(ie,null),!c&&e.createElement(G,F({manual:!0,makeDefault:!0},u)),c&&e.createElement(X,F({manual:!0,makeDefault:!0},u)),e.createElement(B,null))},er=function(r){var t=r.children,n=r.onError,o=N(r,Ke);return q(function(){document.documentElement.classList.add("js-has-global-canvas")},[]),e.createElement(Xe,{onError:function(e){n&&n(e),W.setState({isCanvasAvailable:!1}),document.documentElement.classList.remove("js-has-global-canvas"),document.documentElement.classList.add("js-global-canvas-error")}},e.createElement(Ze,F({},o),t),e.createElement("noscript",null,e.createElement("style",null,"\n          .ScrollRig-visibilityHidden,\n          .ScrollRig-transparentColor {\n            visibility: unset;\n            color: unset;\n          }\n          ")))},rr=function(r){return e.createElement("mesh",{scale:r.scale},e.createElement("planeGeometry",null),e.createElement("shaderMaterial",{args:[{uniforms:{color:{value:new R("hotpink")}},vertexShader:"\n            void main() {\n              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n            }\n          ",fragmentShader:"\n            uniform vec3 color;\n            uniform float opacity;\n            void main() {\n              gl_FragColor.rgba = vec4(color, .5);\n            }\n          "}],transparent:!0}))},tr="undefined"!=typeof window;function nr(e){var r=(void 0===e?{}:e).debounce,n=void 0===r?0:r,o=u({width:tr?window.innerWidth:Infinity,height:tr?window.innerHeight:Infinity}),i=o[0],a=o[1];return t(function(){var e=document.getElementById("ScrollRig-canvas");function r(){var r=e?e.clientWidth:window.innerWidth,t=e?e.clientHeight:window.innerHeight;r===i.width&&t===i.height||a({width:r,height:t})}var t,o=_.debounce(r,n);return e?(t=new ResizeObserver(o)).observe(e):window.addEventListener("resize",o),r(),function(){var e;window.removeEventListener("resize",o),null==(e=t)||e.disconnect()}},[i,a]),i}function or(e,r,t,n,o){return n+(e-r)*(o-n)/(t-r)}var ir=function(){return{enabled:W(function(e){return e.hasSmoothScrollbar}),scroll:W(function(e){return e.scroll}),scrollTo:W(function(e){return e.scrollTo}),onScroll:W(function(e){return e.onScroll})}};function ar(e,r){var n=nr(),a=ne().debug,c=ir(),s=c.scroll,f=c.onScroll,d=W(function(e){return e.scaleMultiplier}),p=W(function(e){return e.pageReflow}),v=i(function(){var e={rootMargin:"0%",threshold:0,autoUpdate:!0},t=r||{};return Object.keys(t).map(function(r,n){void 0!==t[r]&&(e[r]=t[r])}),e},[r]),m=v.autoUpdate,y=v.wrapper,h=M({rootMargin:v.rootMargin,threshold:v.threshold}),g=h.ref,b=h.inView;q(function(){g(e.current)},[e]);var w=u(V.vec3(0,0,0)),S=w[0],E=w[1],O=o({inViewport:!1,progress:-1,visibility:-1,viewport:-1}).current,R=o({top:0,bottom:0,left:0,right:0,width:0,height:0}).current,C=u(R),T=C[0],x=C[1],I=o({top:0,bottom:0,left:0,right:0,width:0,height:0,x:0,y:0,positiveYUpBottom:0}).current,P=o(V.vec3(0,0,0)).current;q(function(){var r,t=null==(r=e.current)?void 0:r.getBoundingClientRect();if(t){var o=y?y.scrollTop:window.scrollY,i=y?y.scrollLeft:window.scrollX;R.top=t.top+o,R.bottom=t.bottom+o,R.left=t.left+i,R.right=t.right+i,R.width=t.width,R.height=t.height,x(F({},R)),E(V.vec3((null==R?void 0:R.width)*d,(null==R?void 0:R.height)*d,1)),a&&console.log("useTracker.getBoundingClientRect:",R,"intialScroll:",{initialY:o,initialX:i},"size:",n,"pageReflow:",p)}},[e,n,p,d,a]);var j=l(function(r){var t=void 0===r?{}:r,o=t.onlyUpdateInViewport;if(e.current&&(void 0===o||!o||O.inViewport)){var i=t.scroll||s;!function(e,r,t,n){e.top=r.top-(t.y||0),e.bottom=r.bottom-(t.y||0),e.left=r.left-(t.x||0),e.right=r.right-(t.x||0),e.width=r.width,e.height=r.height,e.x=e.left+.5*r.width-.5*n.width,e.y=e.top+.5*r.height-.5*n.height,e.positiveYUpBottom=n.height-e.bottom}(I,R,i,n),function(e,r,t){e.x=r.x*t,e.y=-1*r.y*t}(P,I,d);var a="horizontal"===i.scrollDirection,c=a?"width":"height",u=n[c]-I[a?"left":"top"];O.progress=or(u,0,n[c]+I[c],0,1),O.visibility=or(u,0,I[c],0,1),O.viewport=or(u,0,n[c],0,1)}},[e,n,d,s]);return q(function(){O.inViewport=b,j({onlyUpdateInViewport:!1}),a&&console.log("useTracker.inViewport:",b,"update()")},[b]),q(function(){j({onlyUpdateInViewport:!1}),a&&console.log("useTracker.update on resize/reflow")},[j,p]),t(function(){if(m)return f(function(e){return j({onlyUpdateInViewport:!0})})},[m,j,f]),{rect:T,bounds:I,scale:S,position:P,scrollState:O,inViewport:b,update:j}}var cr=["track","children","margin","inViewportMargin","inViewportThreshold","visible","hideOffscreen","scissor","debug","as","priority"],ur=s(function(r){var t=r.track,n=r.children,o=r.margin,i=void 0===o?0:o,a=r.inViewportMargin,c=r.inViewportThreshold,s=r.visible,f=void 0===s||s,d=r.hideOffscreen,p=void 0===d||d,m=r.scissor,h=void 0!==m&&m,g=r.debug,b=void 0!==g&&g,w=r.as,S=void 0===w?"scene":w,E=r.priority,O=void 0===E?Y.PRIORITY_SCISSORS:E,R=N(r,cr),T=l(function(e){null!==e&&P(e)},[]),x=u(h?new C:null),I=x[0],P=x[1],j=ne(),k=j.requestRender,M=j.renderScissor,_=W(function(e){return e.globalRender}),V=ar(t,{rootMargin:a,threshold:c}),$=V.bounds,D=V.scale,L=V.position,A=V.scrollState,z=V.inViewport;q(function(){I&&(I.visible=p?z&&f:f)},[I,z,p,f]),v(function(e){var r=e.gl,t=e.camera;I&&I.visible&&(I.position.y=L.y,I.position.x=L.x,h?M({gl:r,scene:I,camera:t,left:$.left-i,top:$.positiveYUpBottom-i,width:$.width+2*i,height:$.height+2*i}):k())},_?O:void 0);var U=e.createElement(e.Fragment,null,(!n||b)&&D&&e.createElement(rr,{scale:D}),n&&I&&D&&n(F({track:t,margin:i,scale:D,scrollState:A,inViewport:z,priority:O},R))),B=S;return h&&I?y(U,I):e.createElement(B,{ref:T},U)}),lr=["track","children","margin","visible","hideOffscreen","debug","orthographic","priority","inViewport","bounds","scale","scrollState","camera","hud"],sr=["track","margin","inViewportMargin","inViewportThreshold","priority"],fr=["bounds"],dr=function(r){var n=r.track,o=r.children,i=r.margin,a=void 0===i?0:i,c=r.visible,u=void 0===c||c,l=r.hideOffscreen,s=void 0===l||l,f=r.debug,p=void 0!==f&&f,m=r.orthographic,y=void 0!==m&&m,h=r.priority,g=void 0===h?Y.PRIORITY_VIEWPORTS:h,b=r.inViewport,w=r.bounds,S=r.scale,E=r.scrollState,O=r.camera,R=r.hud,C=N(r,lr),T=d(function(e){return e.scene}),x=d(function(e){return e.get}),I=d(function(e){return e.setEvents}),P=ne().renderViewport;return q(function(){T.visible=s?b&&u:u},[b,s,u]),t(function(){var e=x().events.connected;return I({connected:n.current}),function(){return I({connected:e})}},[]),v(function(e){var r=e.scene;r.visible&&P({gl:e.gl,scene:r,camera:e.camera,left:w.left-a,top:w.positiveYUpBottom-a,width:w.width+2*a,height:w.height+2*a,clearDepth:!!R})},g),e.createElement(e.Fragment,null,!y&&e.createElement(G,F({manual:!0,makeDefault:!0},O)),y&&e.createElement(X,F({manual:!0,makeDefault:!0},O)),(!o||p)&&S&&e.createElement(rr,{scale:S}),o&&S&&o(F({track:n,margin:a,scale:S,scrollState:E,inViewport:b,priority:g},C)))},pr=s(function(r){var t=r.track,n=r.margin,o=void 0===n?0:n,i=r.inViewportMargin,a=r.inViewportThreshold,c=r.priority,s=N(r,sr),f=u(function(){return new C})[0],d=ar(t,{rootMargin:i,threshold:a}),p=d.bounds,v=N(d,fr),m=l(function(e,r){t.current&&e.target===t.current&&(r.pointer.set((e.clientX-p.left+o)/(p.width+2*o)*2-1,-(e.clientY-p.top+o)/(p.height+2*o)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera))},[p]);return p&&y(e.createElement(dr,F({track:t,bounds:p,priority:c},s,v)),f,{events:{compute:m,priority:c},size:{width:p.width,height:p.height}})});function vr(e,r,n){void 0===r&&(r={});var o=void 0===n?{}:n,a=o.key,c=o.dispose,u=void 0===c||c,s=W(function(e){return e.updateCanvas}),f=W(function(e){return e.renderToCanvas}),d=W(function(e){return e.removeFromCanvas}),p=i(function(){return a||T.generateUUID()},[]);q(function(){f(p,e,{inactive:!1})},[p]),t(function(){return function(){d(p,u)}},[p]);var v=l(function(e){s(p,e)},[s,p]);return t(function(){v(r)},[].concat(Object.values(r))),v}var mr=["children","id"],yr=n(function(e,r){var t=e.id;return vr(e.children,F({},N(e,mr),{ref:r}),{key:t}),null}),hr=!1;function gr(e,r){var n,o,a,c=void 0===r?{}:r,u=c.initTexture,l=void 0===u||u,s=c.premultiplyAlpha,f=void 0===s?"default":s,p=d(function(e){return e.gl}),v=nr(),m=W(function(e){return e.debug}),y=$(function(){return x.itemStart("waiting for DOM image"),new Promise(function(r){var t=e.current;function n(){r(null==t?void 0:t.currentSrc)}null==t||t.addEventListener("load",n,{once:!0}),null!=t&&t.complete&&(null==t||t.removeEventListener("load",n),n())})},[e,v],{equal:L}),g=(n=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=(o=navigator.userAgent.indexOf("Firefox")>-1)?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1,"undefined"==typeof createImageBitmap||n||o&&a<98?I:P),b=h(g,y,function(e){e instanceof P&&(e.setOptions({colorSpaceConversion:"none",premultiplyAlpha:f,imageOrientation:"flipY"}),e.setRequestHeader({Accept:(hr?"image/webp,":"")+"*/*"}))}),w=i(function(){return b instanceof j?b:b instanceof ImageBitmap?new k(b):void 0},[b]);return t(function(){l&&p.initTexture(w),x.itemEnd("waiting for DOM image"),m&&console.log("useImageAsTexture","initTexture()")},[p,w,l]),w}D.then(function(e){hr=e});var br=["children","duration","easing","smooth","direction","config"],wr=function(e){return 1===e?1:1-Math.pow(2,-10*e)},Sr=n(function(e,r){var n=e.children,i=e.duration,a=void 0===i?1:i,c=e.easing,u=void 0===c?wr:c,l=e.smooth,s=void 0===l||l,d=e.direction,p=void 0===d?"vertical":d,v=e.config,m=N(e,br),y=o();return f(r,function(){return{start:function(){var e;return null==(e=y.current)?void 0:e.start()},stop:function(){var e;return null==(e=y.current)?void 0:e.stop()},on:function(e,r){var t;return null==(t=y.current)?void 0:t.on(e,r)},once:function(e,r){var t;return null==(t=y.current)?void 0:t.once(e,r)},off:function(e,r){var t;return null==(t=y.current)?void 0:t.off(e,r)},notify:function(){var e;return null==(e=y.current)?void 0:e.notify()},scrollTo:function(e,r){var t;return null==(t=y.current)?void 0:t.scrollTo(e,r)},raf:function(e){var r;return null==(r=y.current)?void 0:r.raf(e)},__lenis:y.current}}),t(function(){var e=y.current=new A(F({duration:a,easing:u,smooth:s,direction:p},v));return function(){e.destroy()}},[a,u,s,p]),n&&n(m)}),Er=n(function(r,n){var a=r.children,c=r.enabled,u=void 0===c||c,s=r.locked,d=void 0!==s&&s,v=r.scrollRestoration,m=void 0===v?"auto":v,y=r.disablePointerOnScroll,h=void 0===y||y,b=r.horizontal,w=void 0!==b&&b,S=r.scrollInContainer,E=void 0!==S&&S,O=r.updateGlobalState,R=void 0===O||O,C=r.onScroll,T=r.config,x=o(),I=o(),P=o(!1),j=W(function(e){return e.scroll});f(n,function(){return{scrollTo:function(e,r){var t;return null==(t=I.current)?void 0:t.scrollTo(e,r)},__lenis:I.current}});var k=function(e){h&&x.current&&P.current!==e&&(P.current=e,x.current.style.pointerEvents=e?"none":"auto")},M=l(function(){k(!1)},[]),V=l(function(e){var r;return null==(r=I.current)||r.on("scroll",e),function(){var r;return null==(r=I.current)?void 0:r.off("scroll",e)}},[]);q(function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration=m)},[]),t(function(){var e,r,t,n=g(function(e){var r;return null==(r=I.current)?void 0:r.raf(e)});null==(e=I.current)||e.on("scroll",function(e){var r=e.scroll,t=e.limit,n=e.velocity,o=e.direction,i=e.progress,a=w?r:0;R&&(j.y=w?0:r,j.x=a,j.limit=t,j.velocity=n,j.direction=o,j.progress=i);var c=_.debounce(function(){return k(!0)},100,!0);Math.abs(n)>1.4?c():k(!1),C&&C({scroll:r,limit:t,velocity:n,direction:o,progress:i}),p()}),null==(r=I.current)||r.notify(),R&&(j.scrollDirection=w?"horizontal":"vertical",W.setState({scrollTo:null==(t=I.current)?void 0:t.scrollTo}),W.setState({onScroll:V}),W.getState().scroll.y=window.scrollY,W.getState().scroll.x=window.scrollX);var o=function(){return p()};return window.addEventListener("pointermove",M),window.addEventListener("wheel",o),function(){var e;null==(e=I.current)||e.off("scroll"),n(),window.removeEventListener("pointermove",M),window.removeEventListener("wheel",o)}},[]),t(function(){R&&(document.documentElement.classList.toggle("js-smooth-scrollbar-enabled",u),document.documentElement.classList.toggle("js-smooth-scrollbar-disabled",!u),W.setState({hasSmoothScrollbar:u}))},[u]),t(function(){var e,r;d?null==(e=I.current)||e.stop():null==(r=I.current)||r.start()},[d]);var $=i(function(){if("undefined"==typeof document)return{};var e=document.documentElement,r=document.body,t=document.body.firstElementChild;return e.classList.toggle("ScrollRig-scrollHtml",E),r.classList.toggle("ScrollRig-scrollWrapper",E),{wrapper:r,content:t}},[E]);return e.createElement(Sr,{ref:I,direction:w?"horizontal":"vertical",config:F(E?{smoothTouch:!0,wrapper:$.wrapper,content:$.content}:{},T)},function(e){return a(F({},e,{ref:x}))})}),Or={hidden:"ScrollRig-visibilityHidden",hiddenWhenSmooth:"ScrollRig-visibilityHidden ScrollRig-hiddenIfSmooth",transparentColor:"ScrollRig-transparentColor",transparentColorWhenSmooth:"ScrollRig-transparentColor ScrollRig-hiddenIfSmooth"};export{er as GlobalCanvas,ur as ScrollScene,Er as SmoothScrollbar,yr as UseCanvas,pr as ViewportScrollScene,Or as styles,vr as useCanvas,W as useCanvasStore,gr as useImageAsTexture,ne as useScrollRig,ir as useScrollbar,ar as useTracker};
//# sourceMappingURL=scrollrig.module.js.map
