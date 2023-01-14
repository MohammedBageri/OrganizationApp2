!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch($){d=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,c=Object.create(o.prototype),a=new L(n||[]);return i(c,"_invoke",{value:y(t,r,a)}),c}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}r.wrap=u;var v={};function x(){}function b(){}function h(){}var m={};d(m,a,(function(){return this}));var f=Object.getPrototypeOf,g=f&&f(f(j([])));g&&g!==n&&o.call(g,a)&&(m=g);var k=h.prototype=x.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){function n(i,c,a,s){var l=p(e[i],e,c);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==t(u)&&o.call(u,"__await")?r.resolve(u.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):r.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}var c;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return c=c?c.then(o,o):o()}})}function y(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=_(c,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:O}}function O(){return{value:void 0,done:!0}}return b.prototype=h,i(k,"constructor",{value:h,configurable:!0}),i(h,"constructor",{value:b,configurable:!0}),b.displayName=d(h,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,d(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},S(w.prototype),d(w.prototype,s,(function(){return this})),r.AsyncIterator=w,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new w(u(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(k),d(k,l,"Generator"),d(k,a,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},r}function r(t,e,r,n,o,i,c){try{var a=t[i](c),s=a.value}catch(l){return void r(l)}a.done?e(s):Promise.resolve(s).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,s,"next",t)}function s(t){r(c,o,i,a,s,"throw",t)}a(void 0)}))}}System.register(["./index-legacy.95b5d96b.js","./Section2-legacy.9d768ae5.js","./‏‏‏Section19-legacy.c3078569.js","./‏‏‏Section20-legacy.9ad933ed.js","./dayjs.min-legacy.4fd796db.js"],(function(t,r){"use strict";var o,i,c,a,s,l,d,u,p,v,x,b,h,m,f,g,k,S,w,y,_,C;return{setters:[function(t){o=t.n,i=t.A},function(t){c=t.S,a=t.a},function(t){s=t.S,l=t.a,d=t.b,u=t.c,p=t.d,v=t.e,x=t.f,b=t.g,h=t.h,m=t.i,f=t.j,g=t.k,k=t.l,S=t.m,w=t.n,y=t.o,_=t.p},function(t){C=t.S},function(){}],execute:function(){t("default",o({components:{AppLayout:i,Section1:c,Section2:a,Section3:s,Section4:l,Section5:d,Section6:u,Section7:p,Section8:v,Section9:x,Section10:b,Section11:h,Section12:m,Section13:f,Section14:g,Section15:k,Section16:S,Section17:w,Section18:y,Section19:_,Section20:C},data:function(){return{snackbarErro:!1,snackbarSucess:!1,snackbarEdit:!1,msg:"",section:1,dialog:!0,nextStep:1}},mounted:function(){var t=this.$route.params.id;this.$store.dispatch("organization/getOrganization",t)},methods:{next:function(){this.section=this.section+1},previous:function(){this.section=this.section-1},add:function(){var t=this;return n(e().mark((function r(){var n,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("checkValidation",t.$store.state.sectionForm);case 2:return n=e.sent,e.next=5,t.$store.dispatch("checkValidation",t.$store.state.sectionFormTow);case 5:if(o=e.sent,!n||!o){e.next=13;break}return e.next=9,t.$store.dispatch("organization/createOrganization",t.$store.state.organization.organization);case 9:t.$store.state.organization.organization=t.$store.state.organization.defaultOrganization,t.snackbarSucess=!0,e.next=14;break;case 13:t.snackbarErro=!0;case 14:case"end":return e.stop()}}),r)})))()},edit:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("organization/updateOrganization",t.$store.state);case 2:t.snackbarEdit=!0,console.log("Fuck Org");case 4:case"end":return e.stop()}}),r)})))()},goOrg:function(){this.$router.push("/"),this.snackbarEdit=!1},sucessAdding:function(){this.$router.push("/organizations"),this.snackbarSucess=!1},checkValidate:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=t.nextStep){e.next=7;break}return e.next=3,t.$store.dispatch("checkValidation",t.$store.state.sectionForm);case 3:e.sent&&(t.nextStep=2),e.next=12;break;case 7:if(2!=t.nextStep){e.next=12;break}return e.next=10,t.$store.dispatch("checkValidation",t.$store.state.sectionFormTow);case 10:e.sent&&(t.nextStep=3);case 12:case"end":return e.stop()}}),r)})))()},chickFinal:function(){var t=this;return n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!=t.nextStep){e.next=5;break}return e.next=3,t.$store.dispatch("checkValidation",t.$store.state.sectionFormTow);case 3:e.sent&&(t.nextStep=19);case 5:case"end":return e.stop()}}),r)})))()}}},(function(){var t=this,e=t._self._c;return e("AppLayout",[e("v-container",{staticClass:"ml-10",staticStyle:{height:"100%"}},[e("v-row",{staticClass:"mb-5",attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"rounded-tr-xl rounded-tl-xl",attrs:{dir:"rtl",width:"900px"}},[e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mt-3",attrs:{cols:"6",sm:"4",md:"4",lg:"2"}},[e("v-img",{attrs:{src:"/Yemen.png","max-height":"150","max-width":"150"}})],1),e("v-col",{staticClass:"mt-5",attrs:{cols:"6",sm:"6",md:"6",lg:"4"}},[e("h3",[t._v("وزارة الشئون الإجتماعية و العمل")]),e("h5",[t._v("نظام تسجيل المنظمات و تجديد الرخص")])])],1)],1)],1)])],1),e("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"mt-20 mx-5 shadow-lg",staticStyle:{"z-index":"1"},attrs:{rounded:"lg",width:"900px",dir:"rtl",transition:"scroll-x-transition"}},[e("v-card-title",{staticClass:"grey lighten-3"},[e("div",[t._v("إستمارة تقديم طلب إضافة المنظمة لوزارة الشئون الإجتماعية والعمل")]),e("v-spacer"),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e("v-btn",t._g(t._b({staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.goOrg}},"v-btn",o,!1),n),[t._v("رجوع")])]}}])},[e("span",[t._v("الصفحة الرئيسية")])])],1),e("v-card-text",{staticClass:"mt-2"},[e("v-stepper",{attrs:{vertical:"",dir:"rtl"},model:{value:t.nextStep,callback:function(e){t.nextStep=e},expression:"nextStep"}},[e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>1,color:1==t.nextStep?"background":"green",step:"1",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" البيانات الأساسية للمنظمة "),e("small",[t._v("الرجاء إضفافةالحقول الازمة")])])]),e("v-stepper-content",{attrs:{step:"1"}},[e("Section1"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>2,color:2==t.nextStep?"background":"green",step:"2",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" البيانات المركز الرئيسي للمنظمة ")])]),e("v-stepper-content",{attrs:{step:"2"}},[e("Section2"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=1}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"green"},on:{click:t.edit}},[t._v(" تعديل البيانات الأساسية "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>3,color:3==t.nextStep?"background":"green",step:"3",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الفروع و المكاتب التابعة للمؤسسة ")])]),e("v-stepper-content",{attrs:{step:"3"}},[e("Section3"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=4}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=2}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>4,color:4==t.nextStep?"background":"green",step:"4",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" المرافق والمراكز التابعة للمؤسسة ")])]),e("v-stepper-content",{attrs:{step:"4"}},[e("Section4"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=5}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=3}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>5,color:5==t.nextStep?"background":"green",step:"5",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" بيانات المؤسسين ")])]),e("v-stepper-content",{attrs:{step:"5"}},[e("Section5"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=6}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=4}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>6,color:6==t.nextStep?"background":"green",step:"6",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" بيانات مجلس الأمناء ")])]),e("v-stepper-content",{attrs:{step:"6"}},[e("Section6"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=7}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=5}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>7,color:7==t.nextStep?"background":"green",step:"7",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" بيانات لجنة الراقبة ")])]),e("v-stepper-content",{attrs:{step:"7"}},[e("Section7"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=8}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=6}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>8,color:8==t.nextStep?"background":"green",step:"8",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الموظفين ")])]),e("v-stepper-content",{attrs:{step:"8"}},[e("Section8"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=9}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=7}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>9,color:9==t.nextStep?"background":"green",step:"9",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" اللجنة الدائمة التابعة للمؤسسة ")])]),e("v-stepper-content",{attrs:{step:"9"}},[e("Section9"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=10}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=8}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>10,color:10==t.nextStep?"background":"green",step:"10",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الانشطة والمشاريع الممولة ذاتيا او من اشخاص او جهات محلية يمنية ")])]),e("v-stepper-content",{attrs:{step:"10"}},[e("Section10"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=11}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=9}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>11,color:11==t.nextStep?"background":"green",step:"11",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الانشطة والمشاريع الممولة من اشخاص او جهات عربية/اجنبية ")])]),e("v-stepper-content",{attrs:{step:"11"}},[e("Section11"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=12}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=10}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>12,color:12==t.nextStep?"background":"green",step:"12",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" مشاريع المؤسسة ")])]),e("v-stepper-content",{attrs:{step:"12"}},[e("Section12"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=13}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=11}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>13,color:13==t.nextStep?"background":"green",step:"13",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الحسابات البنكية ")])]),e("v-stepper-content",{attrs:{step:"13"}},[e("Section13"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=14}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=12}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>14,color:14==t.nextStep?"background":"green",step:"14",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الميزانية ")])]),e("v-stepper-content",{attrs:{step:"14"}},[e("Section14"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=15}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=13}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>15,color:15==t.nextStep?"background":"green",step:"15",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" الاشخاص والجهات الداعمة والمانحة للمؤسسة ")])]),e("v-stepper-content",{attrs:{step:"15"}},[e("Section16"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=15}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=14}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>16,color:16==t.nextStep?"background":"green",step:"16",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" اهداف المؤسسة ")])]),e("v-stepper-content",{attrs:{step:"16"}},[e("Section17"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=17}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=16}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>17,color:17==t.nextStep?"background":"green",step:"17",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" لوائح المؤسسة ")])]),e("v-stepper-content",{attrs:{step:"17"}},[e("Section18"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(e){t.nextStep=18}}},[t._v(" التالي "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(e){t.nextStep=16}}},[t._v(" السابق "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>18,color:18==t.nextStep?"background":"green",step:"18",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" المخاطر و التحديات ")])]),e("v-stepper-content",{attrs:{step:"18"}},[e("Section19")],1)],1)],1),e("v-card-actions",{staticClass:"text-center mb-2"},[e("div",{staticStyle:{width:"100%"}},[20==t.section&&t.$store.state.organization.organization._id?e("v-btn",{attrs:{color:"green mr-2"},on:{click:t.edit}},[t._v("تعديل")]):t._e(),20==t.section&&""==t.$store.state.organization.organization._id?e("v-btn",{attrs:{color:"green mr-2"},on:{click:t.add}},[t._v("إضافة ")]):t._e(),e("v-snackbar",{attrs:{shaped:"",top:"",color:"red"},scopedSlots:t._u([{key:"action",fn:function(r){var n=r.attrs;return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackbarErro=!1}}},"v-btn",n,!1),[t._v(" إغلاق ")])]}}]),model:{value:t.snackbarErro,callback:function(e){t.snackbarErro=e},expression:"snackbarErro"}},[e("v-icon",[t._v("mdi-bomb")]),t._v(" يرجى التحقق من الحقول اللازمة ")],1),e("v-snackbar",{attrs:{shaped:"",top:"",color:"green"},scopedSlots:t._u([{key:"action",fn:function(r){var n=r.attrs;return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:t.sucessAdding}},"v-btn",n,!1),[t._v(" موافق ")])]}}]),model:{value:t.snackbarSucess,callback:function(e){t.snackbarSucess=e},expression:"snackbarSucess"}},[e("v-icon",[t._v("mdi-party-popper")]),t._v(" تمت ارسال طلبك بنجاح ")],1),e("v-snackbar",{attrs:{shaped:"",top:"",color:"green"},scopedSlots:t._u([{key:"action",fn:function(r){var n=r.attrs;return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:t.goOrg}},"v-btn",n,!1),[t._v(" موافق ")])]}}]),model:{value:t.snackbarEdit,callback:function(e){t.snackbarEdit=e},expression:"snackbarEdit"}},[e("v-icon",[t._v("mdi-feather")]),t._v(" تم تعديل معلومات المنظمة بنجاح ")],1)],1)])],1)],1)],1),e("v-row",{attrs:{justify:"center"}})],1)}),[],!1,null,null,null,null).exports)}}}))}();
