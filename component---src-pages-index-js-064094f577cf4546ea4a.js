(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+OzK":function(e,t,s){s("2Spj"),s("KKXr"),function(){"use strict";var e=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()};window.MaterialTextfield=e,e.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},e.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},e.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},e.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},e.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.onReset_=function(e){this.updateClasses_()},e.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},e.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},e.prototype.checkDisabled=e.prototype.checkDisabled,e.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},e.prototype.checkFocus=e.prototype.checkFocus,e.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},e.prototype.checkValidity=e.prototype.checkValidity,e.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},e.prototype.checkDirty=e.prototype.checkDirty,e.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},e.prototype.enable=e.prototype.enable,e.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},e.prototype.change=e.prototype.change,e.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:e,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0})}()},"25dN":function(e,t,s){var n=s("XKFU");n(n.S,"Object",{is:s("g6HL")})},B9Yq:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},CX2u:function(e,t,s){"use strict";var n=s("XKFU"),i=s("g3g5"),o=s("dyZX"),a=s("69bn"),r=s("vKrd");n(n.P+n.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),s="function"==typeof e;return this.then(s?function(s){return r(t,e()).then((function(){return s}))}:e,s?function(s){return r(t,e()).then((function(){throw s}))}:e)}})},"F/NL":function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialProgress=e,e.prototype.Constant_={},e.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},e.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},e.prototype.setProgress=e.prototype.setProgress,e.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},e.prototype.setBuffer=e.prototype.setBuffer,e.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0})}()},RXBc:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m})),s.d(t,"query",(function(){return _}));var n=s("Wcq6"),i=s("I5iV"),o=s("fRuu"),a=s("Bl7J"),r=s("q1tI"),l=s("/MKj"),d=s("qhky"),c=s("Wbzz"),u=(s("3Fm7"),s("Tp/d")),h=s("T59Y"),p=s("3F9S"),f=s("qKvR");function m(e){var t=e.data,s=Object(l.b)(),m=Object(l.c)((function(e){return e.privateEdges})),_=Object(u.a)();return Object(r.useEffect)((function(){var e=new i.a.AuthUI(n.auth());return e.start("#firebaseui-auth-container",{signInSuccessUrl:"https://auson.love/#for-us",signInOptions:[n.auth.GoogleAuthProvider.PROVIDER_ID]}),function(){e.delete()}}),[]),Object(r.useEffect)((function(){_&&!m&&Object(h.a)().then((function(e){s(Object(p.b)(e))}))}),[_,m,s]),Object(f.b)(a.a,{isIndex:!0},Object(f.b)(d.a,null,Object(f.b)("meta",{charSet:"utf-8"}),Object(f.b)("link",{type:"text/css",rel:"stylesheet",href:"https://www.gstatic.com/firebasejs/ui/4.5.0/firebase-ui-auth.css"})),Object(f.b)("div",null,Object(f.b)("h1",null,Object(f.b)("span",{role:"img","aria-label":"mailbox"},"📬")," ","Posts"),Object(f.b)(o.a,{edges:t.posts.edges}),Object(f.b)(c.a,{to:"/posts"},"All posts...")),Object(f.b)("h1",null,Object(f.b)("span",{role:"img","aria-label":"letter"},"💌")," ","Letters"),Object(f.b)(o.a,{edges:t.letters.edges}),Object(f.b)(c.a,{to:"/letters"},"All letters..."),Object(f.b)("h1",{id:"for-us"},Object(f.b)("span",{role:"img","aria-label":"letter"},"🙈")," ","For Us"),null==_&&Object(f.b)("div",{id:"firebaseui-auth-container"}),!1===_&&Object(f.b)("p",null,"You do not have sufficient permissions to view this section!"),_&&!m&&Object(f.b)("p",null,"Loading..."),m&&Object(f.b)(o.a,{edges:m}))}var _="1553235712"},Tlfp:function(e,t,s){s("0l/t"),s("LK8F"),s("8+KV"),s("V+eJ"),s("KKXr");var n={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};(n=function(){"use strict";var e=[],t=[];function s(t,s){for(var n=0;n<e.length;n++)if(e[n].className===t)return void 0!==s&&(e[n]=s),e[n];return!1}function n(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function i(e,t){return-1!==n(e).indexOf(t)}function o(e,t,s){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:s});var n=document.createEvent("Events");return n.initEvent(e,t,s),n}function a(t,n){if(void 0===t&&void 0===n)for(var i=0;i<e.length;i++)a(e[i].className,e[i].cssClass);else{var o=t;if(void 0===n){var l=s(o);l&&(n=l.cssClass)}for(var d=document.querySelectorAll("."+n),c=0;c<d.length;c++)r(d[c],o)}}function r(a,r){if(!("object"==typeof a&&a instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var l=o("mdl-componentupgrading",!0,!0);if(a.dispatchEvent(l),!l.defaultPrevented){var d=n(a),c=[];if(r)i(a,r)||c.push(s(r));else{var u=a.classList;e.forEach((function(e){u.contains(e.cssClass)&&-1===c.indexOf(e)&&!i(a,e.className)&&c.push(e)}))}for(var h,p=0,f=c.length;p<f;p++){if(!(h=c[p]))throw new Error("Unable to find a registered component for the given class.");d.push(h.className),a.setAttribute("data-upgraded",d.join(","));var m=new h.classConstructor(a);m.mdlComponentConfigInternal_=h,t.push(m);for(var _=0,g=h.callbacks.length;_<g;_++)h.callbacks[_](a);h.widget&&(a[h.className]=m);var b=o("mdl-componentupgraded",!0,!1);a.dispatchEvent(b)}}}function l(e){if(e){var s=t.indexOf(e);t.splice(s,1);var n=e.element_.getAttribute("data-upgraded").split(","),i=n.indexOf(e.mdlComponentConfigInternal_.classAsString);n.splice(i,1),e.element_.setAttribute("data-upgraded",n.join(","));var a=o("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(a)}}return{upgradeDom:a,upgradeElement:r,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var s,n=0,i=t.length;n<i;n++)(s=t[n])instanceof HTMLElement&&(r(s),s.children.length>0&&e(s.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)a(e[t].className)},registerUpgradedCallback:function(e,t){var n=s(e);n&&n.callbacks.push(t)},register:function(t){var n=!0;void 0===t.widget&&void 0===t.widget||(n=t.widget||t.widget);var i={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:n,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===i.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===i.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty("mdlComponentConfigInternal_"))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");s(t.classAsString,i)||e.push(i)},downgradeElements:function(e){var s=function(e){t.filter((function(t){return t.element_===e})).forEach(l)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)s(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");s(e)}}}}()).ComponentConfigPublic,n.ComponentConfig,n.Component,n.upgradeDom=n.upgradeDom,n.upgradeElement=n.upgradeElement,n.upgradeElements=n.upgradeElements,n.upgradeAllRegistered=n.upgradeAllRegistered,n.registerUpgradedCallback=n.registerUpgradedCallback,n.register=n.register,n.downgradeElements=n.downgradeElements,window.componentHandler=n,window.componentHandler=n,window.addEventListener("load",(function(){"use strict";"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),n.upgradeAllRegistered()):(n.upgradeElement=function(){},n.register=function(){})}))},XBV3:function(e,t){!function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialSpinner=e,e.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},e.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},e.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var o=[s,n,i],a=0;a<o.length;a++){var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),o[a].appendChild(r)}t.appendChild(s),t.appendChild(n),t.appendChild(i),this.element_.appendChild(t)},e.prototype.createLayer=e.prototype.createLayer,e.prototype.stop=function(){this.element_.classList.remove("is-active")},e.prototype.stop=e.prototype.stop,e.prototype.start=function(){this.element_.classList.add("is-active")},e.prototype.start=e.prototype.start,e.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:e,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0})}()},fRuu:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));s("pIFo"),s("q1tI");var n=s("qKvR"),i=s("Wbzz"),o=s("p3AD"),a={name:"nn640c",styles:"text-decoration:none;color:inherit;"},r={name:"sm0090",styles:"color:#555;"};function l(e){return e.edges.map((function(e,t){var s=e.node;return Object(n.b)("div",{key:t},Object(n.b)(i.a,{to:s.fields.slug,css:a},Object(n.b)("h3",{css:Object(n.a)("margin-bottom:",Object(o.a)(1/4),";")},s.frontmatter.title," ",Object(n.b)("span",{css:r},"— ",s.frontmatter.date.replace(",",""))),s.frontmatter.by&&Object(n.b)("p",null,"By: ",s.frontmatter.by),Object(n.b)("p",null,s.excerpt)))}))}},"v/ix":function(e,t,s){s("2Spj"),function(){"use strict";var e=function(e){this.element_=e,this.init()};window.MaterialButton=e,e.prototype.Constant_={},e.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},e.prototype.blurHandler_=function(e){e&&this.element_.blur()},e.prototype.disable=function(){this.element_.disabled=!0},e.prototype.disable=e.prototype.disable,e.prototype.enable=function(){this.element_.disabled=!1},e.prototype.enable=e.prototype.enable,e.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:e,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0})}()},yXDX:function(e,t,s){var n;s("V+eJ"),s("bWfx"),s("HAE/"),s("8+KV"),s("2Spj"),function(){var i=window.CustomEvent;function o(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function a(e){e&&e.blur&&e!==document.body&&e.blur()}function r(e,t){for(var s=0;s<e.length;++s)if(e[s]===t)return!0;return!1}function l(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function d(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,s=!1,n=function(){s?this.downgradeModal():this.maybeHideModal(),s=!1}.bind(this),i=function(i){if(i.target===e){var o="DOMNodeRemoved";s|=i.type.substr(0,o.length)===o,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,i)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}i&&"object"!=typeof i||((i=function(e,t){t=t||{};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),s}).prototype=window.Event.prototype),d.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),c.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var s=document.createEvent("MouseEvents");s.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(s),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}a(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!c.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),s=function(e,s){return!(void 0===t[e]||t[e]===s)};if(t.opacity<1||s("zIndex","auto")||s("transform","none")||s("mixBlendMode","normal")||s("filter","none")||s("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,c.needsCentering(this.dialog_)?(c.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new i("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var c={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,s=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,s)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var s=document.styleSheets[t],n=null;try{n=s.cssRules}catch(c){}if(n)for(var i=0;i<n.length;++i){var o=n[i],a=null;try{a=document.querySelectorAll(o.selectorText)}catch(c){}if(a&&r(a,e)){var l=o.style.getPropertyValue("top"),d=o.style.getPropertyValue("bottom");if(l&&"auto"!==l||d&&"auto"!==d)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!c.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new d(e)},registerDialog:function(e){e.showModal||c.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var s=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&s.push(t),s=s.concat(t.querySelectorAll("dialog")))})),s.length&&e(s)})))}};if(c.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},c.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},c.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,s=0;e=this.pendingDialogStack[s];++s)e.updateZIndex(--t,--t),0===s&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},c.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=o(e);){for(var t,s=0;t=this.pendingDialogStack[s];++s)if(t.dialog===e)return 0===s;e=e.parentElement}return!1},c.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),a(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},c.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new i("cancel",{bubbles:!1,cancelable:!0}),s=this.pendingDialogStack[0];s&&s.dialog.dispatchEvent(t)&&s.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},c.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},c.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},c.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},c.dm=new c.DialogManager,c.formSubmitter=null,c.useValue=null,void 0===window.HTMLDialogElement){var u=document.createElement("form");if(u.setAttribute("method","dialog"),"dialog"!==u.method){var h=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(h){var p=h.get;h.get=function(){return l(this)?"dialog":p.call(this)};var f=h.set;h.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):f.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",h)}}document.addEventListener("click",(function(e){if(c.formSubmitter=null,c.useValue=null,!e.defaultPrevented){var t=e.target;if(t&&l(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;c.useValue=e.offsetX+","+e.offsetY}o(t)&&(c.formSubmitter=t)}}}),!1);var m=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!l(this))return m.call(this);var e=o(this);e&&e.close()},document.addEventListener("submit",(function(e){var t=e.target;if(l(t)){e.preventDefault();var s=o(t);if(s){var n=c.formSubmitter;n&&n.form===t?s.close(c.useValue||n.value):s.close(),c.formSubmitter=null}}}),!0)}c.forceRegisterDialog=c.forceRegisterDialog,c.registerDialog=c.registerDialog,"amd"in s("B9Yq")?void 0===(n=function(){return c}.call(t,s,t,e))||(e.exports=n):"object"==typeof e.exports?e.exports=c:window.dialogPolyfill=c}()}}]);
//# sourceMappingURL=component---src-pages-index-js-064094f577cf4546ea4a.js.map