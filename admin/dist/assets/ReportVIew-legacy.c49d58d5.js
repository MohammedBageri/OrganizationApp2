!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return a};var a={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(t,e,a){t[e]=a.value},n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function h(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(L){h=function(t,e,a){return t[e]=a}}function d(t,e,a,r){var i=e&&e.prototype instanceof _?e:_,n=Object.create(i.prototype),s=new $(r||[]);return o(n,"_invoke",{value:z(t,a,s)}),n}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(L){return{type:"throw",arg:L}}}a.wrap=d;var v={};function _(){}function f(){}function g(){}var y={};h(y,s,(function(){return this}));var w=Object.getPrototypeOf,p=w&&w(w(P([])));p&&p!==r&&i.call(p,s)&&(y=p);var m=g.prototype=_.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,a){function r(o,n,s,l){var c=u(e[o],e,n);if("throw"!==c.type){var h=c.arg,d=h.value;return d&&"object"==t(d)&&i.call(d,"__await")?a.resolve(d.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):a.resolve(d).then((function(t){h.value=t,s(h)}),(function(t){return r("throw",t,s,l)}))}l(c.arg)}var n;o(this,"_invoke",{value:function(t,e){function i(){return new a((function(a,i){r(t,e,a,i)}))}return n=n?n.then(i,i):i()}})}function z(t,e,a){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return O()}for(a.method=i,a.arg=o;;){var n=a.delegate;if(n){var s=C(n,a);if(s){if(s===v)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(t,e,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===v)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}function C(t,e){var a=t.iterator[e.method];if(void 0===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g,o(m,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:f,configurable:!0}),f.displayName=h(g,c,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},a.awrap=function(t){return{__await:t}},b(S.prototype),h(S.prototype,l,(function(){return this})),a.AsyncIterator=S,a.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var n=new S(d(t,e,r,i),o);return a.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},b(m),h(m,c,"Generator"),h(m,s,(function(){return this})),h(m,"toString",(function(){return"[object Generator]"})),a.keys=function(t){var e=Object(t),a=[];for(var r in e)a.push(r);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=P,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,r){return n.type="throw",n.arg=t,e.next=a,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],n=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=t,n.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),k(a),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var r=a.completion;if("throw"===r.type){var i=r.arg;k(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:P(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),v}},a}function a(t,e,a,r,i,o,n){try{var s=t[o](n),l=s.value}catch(c){return void a(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var n=t.apply(e,r);function s(t){a(n,i,o,s,l,"next",t)}function l(t){a(n,i,o,s,l,"throw",t)}s(void 0)}))}}System.register(["./index-legacy.be0403d2.js","./dayjs.min-legacy.f75db1e7.js"],(function(t,a){"use strict";var i,o,n=document.createElement("style");return n.innerHTML="table[data-v-0ab369ae],th[data-v-0ab369ae],td[data-v-0ab369ae],table[data-v-22e066af],th[data-v-22e066af],td[data-v-22e066af],table[data-v-e0d53ff7],th[data-v-e0d53ff7],td[data-v-e0d53ff7],table[data-v-0462582b],th[data-v-0462582b],td[data-v-0462582b],table[data-v-10e37ec6],th[data-v-10e37ec6],td[data-v-10e37ec6],table[data-v-e9629cb2],th[data-v-e9629cb2],td[data-v-e9629cb2],table[data-v-9555fb2a],th[data-v-9555fb2a],td[data-v-9555fb2a],table[data-v-882be32f],th[data-v-882be32f],td[data-v-882be32f]{border:1px solid black;text-align:center;font-size:14px}.row[data-v-26c0afaf]{justify-content:center}.page[data-v-26c0afaf]{height:1040px;width:794px;border:2px solid;padding:30px;size:7in 9.25in;font-size:16px;margin-bottom:6px}\n",document.head.appendChild(n),{setters:[function(t){i=t.n},function(t){o=t.d}],execute:function(){var a=i({methods:{print:function(){window.print()},backTo:function(){this.$router.push("/organizations")}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("div",[t._v("الجمهورية اليمنية")]),e("div",[t._v("وزارة الشؤون الاجتماعية والعمل")]),e("div",[t._v("قطاع التنمية الاجتماعية")]),e("div",[t._v("الادارة العامة للجمعيات والاتحادات")])]),e("v-col",{staticClass:"mr-16",attrs:{cols:"4"}},[e("v-img",{attrs:{src:"/Yemen.png","max-height":"100","max-width":"100"}})],1),e("v-col",{attrs:{cols:"2"}},[t._v("التاريخ...............")])],1),e("v-divider"),e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" استمارة تحديث بيانات ")])],1),e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(" اولا البيانات الاساسية للمؤسسة ")]),e("v-spacer"),e("v-col",{staticClass:"text-right mr-16",attrs:{cols:"2"}},[e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text hidden-print-only",attrs:{color:"#14425a"},on:{click:t.print}},[t._v(" طباعة "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-printer")])],1)],1),e("v-col",{attrs:{cols:"2"}},[e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text hidden-print-only",attrs:{color:"#14425a"},on:{click:t.backTo}},[t._v(" العودة "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-left-bold-circle")])],1)],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1 - البانات التعريفية")])],1)],1)],1)}),[],!1,null,null,null,null).exports,n=i({data:function(){return{showLogo:"",showOrganizationalChart:"",table:[{title:"اسم الموسسة بالعربي",data:this.$store.state.organization.organization.nameAr},{title:"إسم المؤسسة بالإنجليزي",data:this.$store.state.organization.organization.nameEn},{title:"نوع المؤسسة",data:this.$store.state.organization.organization.type},{title:"تاريخ التأسيس",data:o(this.$store.state.organization.organization.lastRenewalDate).format("YYYY-MM-DD")},{title:"رقم تصريح مزاولة النشاط",data:this.$store.state.organization.organization.permitNumber},{title:"تاريخ إصدارة",data:o(this.$store.state.organization.organization.permitDate).format("YYYY-MM-DD")},{title:"مجالات عمل المؤسسة",data:this.$store.state.organization.organization.fieldWork},{title:"البريد الإلكتروني",data:this.$store.state.organization.organization.email},{title:"الموقع الإلكتروني",data:this.$store.state.organization.organization.website},{title:"منظمة محلية/دولية",data:this.$store.state.organization.organization.localOrInternational},{title:"هاتف المؤسسة",data:this.$store.state.organization.organization.phone},{title:"شعار المؤسسة"}]}},components:{ReportHeader:a},created:function(){var t=this;return r(e().mark((function a(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,"https://organization2-api.novelsoft.com.co";case 2:return e.t0=e.sent,e.t1=e.t0+"/",e.t2=t.$store.state.organization.organization.logo.substring(7),t.showLogo=e.t1+e.t2,e.next=8,"https://organization2-api.novelsoft.com.co";case 8:e.t3=e.sent,e.t4=e.t3+"/",e.t5=t.$store.state.organization.organization.OrganizationalChart.substring(7),t.showOrganizationalChart=e.t4+e.t5;case 12:case"end":return e.stop()}}),a)})))()},computed:{mapArea:function(){return this.$store.state.organization.organization.mapArea}},mounted:function(){var t=this;return r(e().mark((function a(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,t.$store.state.organization.organization;case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1,"asaaa");case 5:case"end":return e.stop()}}),a)})))()},methods:{lastRenew:function(t){return o(this.$store.state.organization.organization.lastRenewalDate).format("YYYY-MM-DD")},permit:function(t){var e=o(this.$store.state.organization.organization.permitDate).format("YYYY-MM-DD");return e}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("ReportHeader"),e("table",{staticClass:"tableReport"},[e("tbody",[e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" اسم الموسسة بالعربي ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.nameAr)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" اسم الموسسة بالإنجليزي ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.nameEn)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" نوع المؤسسة ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.type)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" تاريخ التأسيس ")]),e("td",{staticStyle:{width:"50%"},domProps:{textContent:t._s(t.lastRenew())}})]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" رقم تصريح مزاولة النشاط ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.permitNumber)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" تاريخ إصدارة ")]),e("td",{staticStyle:{width:"50%"},domProps:{textContent:t._s(t.permit())}})]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" مجال عمل المؤسسة ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.fieldWork)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" البريد الإلكتروني ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.email)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" الموقع الإلكتروني ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.website)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" منظمة محلية/دولية ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.localOrInternational)+" ")])]),e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" الموقع الجغرافي ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(t.mapArea.name)+" ")]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" هاتف المؤسسة ")]),e("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.phone)+" ")])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" شعار المؤسسة ")]),e("td",{staticStyle:{width:"50%"}},[e("span",[e("a",{attrs:{href:t.showLogo,target:"_blank"}},[t._v("معاينةالصورة")])])])]),e("tr",[e("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" المرفقات ")]),e("td",{staticStyle:{width:"50%"}},[e("span",[e("a",{attrs:{href:t.showOrganizationalChart,target:"_blank"}},[t._v("معاينة المرفق")])])])])])]),e("br")],1)}),[],!1,null,"0ab369ae",null,null).exports,s=i({data:function(){return{}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 3- الفروع والمكاتب التابعة للمؤسسة")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.branche,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.dateCreated))]),e("td",[t._v(t._s(a.permitNumber))]),e("td",[t._v(t._s(a.street))]),e("td",[t._v(t._s(a.ownOrRent))]),e("td",[t._v(t._s(a.state.name))]),e("td",[t._v(t._s(a.city.name))])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 4- المرافق الراكز التابعة للمؤسسة")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.facilitiesAndCenter,(function(a){return e("tr",{key:a._id},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.activityType))]),e("td",[t._v(t._s(a.state.name))]),e("td",[t._v(t._s(a.dateCreated))]),e("td",[t._v(t._s(a.phone))])])}))],2)],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("اسم الفرع")]),e("th",{staticStyle:{width:"20%"}},[t._v("تاريخ الإنشاء")]),e("th",[t._v("رقم التصريح")]),e("th",[t._v("المحافظة")]),e("th",[t._v("المديرية")]),e("th",[t._v("الشارع")]),e("th",[t._v("ملك/إجار")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",[t._v(" إسم المرفق")]),e("th",[t._v(" نوع النشاط")]),e("th",[t._v("المحافظة")]),e("th",[t._v("تاريخ الإنشاء")]),e("th",[t._v("الهاتف")])])}],!1,null,"22e066af",null,null).exports,l=i({data:function(){return{founderChart:"",boardOfTrusteChart:""}},methods:{founderFile:function(t){this.founderChart="https://organization2-api.novelsoft.com.co/"+t.founderUpload.substring(7)},boardOfTrusteFile:function(t){this.boardOfTrusteChart="https://organization2-api.novelsoft.com.co/"+t.BoardOfTrusteUpload.substring(7)}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" ثانياًالفروع والمكاتب التابعة للمؤسسة")])],1),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- بيانات المؤسسين")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.founder,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.dateOfBirth))]),e("td",[t._v(t._s(a.placeOfBirth))]),e("td",[t._v(t._s(a.currentPlace))]),e("td",[t._v(t._s(a.job))]),e("td",[t._v(t._s(a.gualification))]),e("td",[t._v(t._s(a.phone))]),e("td",[e("span",{on:{click:function(e){return t.founderFile(a)}}},[e("a",{attrs:{href:t.founderChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- بيانات مجلس الأمناء")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.boardOfTruste,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.dateOfBirth))]),e("td",[t._v(t._s(a.placeOfBirth))]),e("td",[t._v(t._s(a.currentPlace))]),e("td",[t._v(t._s(a.job))]),e("td",[t._v(t._s(a.adjective))]),e("td",[t._v(t._s(a.phone))]),e("td",[e("span",{on:{click:function(e){return t.boardOfTrusteFile(a)}}},[e("a",{attrs:{href:t.boardOfTrusteChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2)],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("الاسم رباعياً")]),e("th",{staticStyle:{width:"10%"}},[t._v("تاريخ الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الإقامة الحالي")]),e("th",{staticStyle:{width:"10%"}},[t._v("الوظيفة")]),e("th",{staticStyle:{width:"10%"}},[t._v("المؤهل")]),e("th",{staticStyle:{width:"10%"}},[t._v("رقم الجوال")]),e("th",{staticStyle:{width:"20%"}},[t._v("معاينة")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("الاسم رباعياً")]),e("th",{staticStyle:{width:"10%"}},[t._v("تاريخ الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الإقامة الحالي")]),e("th",{staticStyle:{width:"10%"}},[t._v("الوظيفة")]),e("th",{staticStyle:{width:"10%"}},[t._v("الصفة في المؤسسة")]),e("th",{staticStyle:{width:"20%"}},[t._v("رقم الجوال")]),e("th",{staticStyle:{width:"20%"}},[t._v("المرفقات")])])}],!1,null,"e0d53ff7",null,null).exports,c=i({data:function(){return{oversightCommitteChart:""}},methods:{oversightCommitteFile:function(t){this.oversightCommitteChart="https://organization2-api.novelsoft.com.co/"+t.oversightCommitteUpload.substring(7)}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 3- بيانات لجنة المراقبة")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.oversightCommitte,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.dateOfBirth))]),e("td",[t._v(t._s(a.placeOfBirth))]),e("td",[t._v(t._s(a.currentPlace))]),e("td",[t._v(t._s(a.qualification))]),e("td",[t._v(t._s(a.phone))]),e("td",[e("span",{on:{click:function(e){return t.oversightCommitteFile(a)}}},[e("a",{attrs:{href:t.oversightCommitteChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 4- إحصائية العاملين بالمؤسسة (الموظفين/المتعاقدين/المتطوعين)")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),e("tr",[e("td",{staticStyle:{width:"20%"}},[t._v("الموظفين")]),e("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberStaff)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleStaff)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleStaff)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteStaff)+" ")])]),e("tr",[e("td",{staticStyle:{width:"20%"}},[t._v("المتعاقدين")]),e("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberContractors)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleContractors)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleContractors)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteContractors)+" ")])]),e("tr",[e("td",{staticStyle:{width:"20%"}},[t._v("المتطوعين")]),e("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberVolunteers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleVolunteers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleVolunteers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteVolunteers)+" ")])]),e("tr",[e("td",{staticStyle:{width:"20%"}},[t._v("اخرى")]),e("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberOthers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleOthers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleOthers)+" ")]),e("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteOthers)+" ")])])])],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("الاسم رباعياً")]),e("th",{staticStyle:{width:"10%"}},[t._v("تاريخ الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الميلاد")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان الإقامة الحالي")]),e("th",{staticStyle:{width:"10%"}},[t._v("الصفة في المؤسسة")]),e("th",{staticStyle:{width:"10%"}},[t._v("رقم الجوال")]),e("th",{staticStyle:{width:"10%"}},[t._v("المرفقات")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"10%"}},[t._v("الإسم")]),e("th",{staticStyle:{width:"20%"}},[t._v("العدد")]),e("th",{staticStyle:{width:"10%"}},[t._v("ذكور")]),e("th",{staticStyle:{width:"10%"}},[t._v("إناث")]),e("th",{staticStyle:{width:"10%"}},[t._v("ملاحظات")])])}],!1,null,"0462582b",null,null).exports,h=i({data:function(){return{standingCommitteChart:"",projectsByPeopleChart:""}},methods:{standingCommitteFile:function(t){console.log(t,"sss"),this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+t.standingCommitteUpload.substring(7)},projectsByPeopleFile:function(t){this.projectsByPeopleChart="https://organization2-api.novelsoft.com.co/"+t.projectsByPeopleUpload.substring(7)}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 5- اللجنة الدائمة التابعة للمؤسسة")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.standingCommitte,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.countMale))]),e("td",[t._v(t._s(a.countFemale))]),e("td",[t._v(t._s(a.note))]),e("td",[e("span",{on:{click:function(e){return t.standingCommitteFile(a)}}},[e("a",{attrs:{href:t.standingCommitteChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" ثالثاً مشاريع وانشطة وبرامج المؤسسة")])],1),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- الانشطة والمشاريع الممولة ذاتياً او من أشخاص او جهات محلية يمنية ")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.projectsByPeople,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.fundingSource))]),e("td",[t._v(t._s(a.beneficiaries))]),e("td",[t._v(t._s(a.executionPlace))]),e("td",[t._v(t._s(a.executionTime))]),e("td",[t._v(t._s(a.costProject))]),e("td",[e("span",{on:{click:function(e){return t.projectsByPeopleFile(a)}}},[e("a",{attrs:{href:t.projectsByPeopleChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2)],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("اسم اللجنة")]),e("th",{staticStyle:{width:"10%"}},[t._v("الذكور")]),e("th",{staticStyle:{width:"10%"}},[t._v("الإناث")]),e("th",{staticStyle:{width:"20%"}},[t._v("ملاحظة")]),e("th",{staticStyle:{width:"20%"}},[t._v("المرفقات")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("اسم المشروع")]),e("th",{staticStyle:{width:"10%"}},[t._v("جهة التمويل")]),e("th",{staticStyle:{width:"10%"}},[t._v("المستفيدون")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان التنفيذ")]),e("th",{staticStyle:{width:"10%"}},[t._v("فترة التنفيذ")]),e("th",{staticStyle:{width:"10%"}},[t._v("تكلفة المشروع")]),e("th",{staticStyle:{width:"10%"}},[t._v("المرفقات")])])}],!1,null,"10e37ec6",null,null).exports,d=i({data:function(){return{activitiesChart:"",bankAccountChart:""}},methods:{activitiesFile:function(t){this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+t.activityUpload.substring(7)},bankAccountFile:function(t){this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+t.bankUpload.substring(7)}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- الانشطة والمشاريع الممولة من أشخاص او جهات او منظمات عربية/اجنبيه ")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.activitiesAndProjectsByOthersOrganization,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.name))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.fundingSourceAndNationality))]),e("td",[t._v(t._s(a.numberBeneficiaries))]),e("td",[t._v(t._s(a.executionPlace))]),e("td",[t._v(t._s(a.executionTime))]),e("td",[t._v(t._s(a.costProject))]),e("td",[e("span",{on:{click:function(e){return t.activitiesFile(a)}}},[e("a",{attrs:{href:t.activitiesChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" رابعاً البيانات المالية")])],1),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- الحسابات البنكية ")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.bankAccount,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.bankName))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.address))]),e("td",[t._v(t._s(a.numberAccount))]),e("td",[t._v(t._s(a.currency))]),e("td",[t._v(t._s(a.balance))]),e("td",[e("span",{on:{click:function(e){return t.bankAccountFile(a)}}},[e("a",{attrs:{href:t.bankAccountChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2)],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("اسم المشروع")]),e("th",{staticStyle:{width:"10%"}},[t._v("جهة التمويل")]),e("th",{staticStyle:{width:"10%"}},[t._v("المستفيدون")]),e("th",{staticStyle:{width:"10%"}},[t._v("مكان التنفيذ")]),e("th",{staticStyle:{width:"10%"}},[t._v("فترة التنفيذ")]),e("th",{staticStyle:{width:"10%"}},[t._v("تكلفة المشروع")]),e("th",{staticStyle:{width:"10%"}},[t._v("المرفقات")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("اسم البنك")]),e("th",{staticStyle:{width:"10%"}},[t._v("المركز الرئيسي")]),e("th",{staticStyle:{width:"10%"}},[t._v("رقم الحساب")]),e("th",{staticStyle:{width:"10%"}},[t._v("العملة")]),e("th",{staticStyle:{width:"10%"}},[t._v("الرصيد البنكي")]),e("th",{staticStyle:{width:"10%"}},[t._v("المرفقات")])])}],!1,null,"e9629cb2",null,null).exports,u=i({data:function(){return{organizationGoalChart:"",organizationRegulationChart:""}},methods:{organizationGoalFile:function(t){this.organizationGoalChart="https://organization2-api.novelsoft.com.co/"+t.organizationGoalUpload.substring(7)},organizationRegulationFile:function(t){this.organizationRegulationChart="https://organization2-api.novelsoft.com.co/"+t.organizationRegulationUpload.substring(7)}}},(function(){var t=this,e=t._self._c;return e("div",{attrs:{dir:"rtl"}},[e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" خامسا اهداف وهيكل ولوائحالمؤسسة الأساسية التي تستند عليها في ممارسة عملها ونشاطها")])],1),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- اهداف المؤسسة ")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.organizationGoal,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.goal))]),e("td",[e("span",{on:{click:function(e){return t.organizationGoalFile(a)}}},[e("a",{attrs:{href:t.organizationGoalChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2),e("br"),e("v-row",[e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- لوائح المؤسسة ")])],1),e("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.organizationRegulation,(function(a){return e("tr",{key:a._id},[e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.regulation))]),e("td",{staticStyle:{width:"20%"}},[t._v(t._s(a.isAvailable))]),e("td",[t._v(t._s(a.numberDoors))]),e("td",[t._v(t._s(a.numberLuck))]),e("td",[t._v(t._s(a.numberMaterials))]),e("td",[t._v(t._s(a.note))]),e("td",[e("span",{on:{click:function(e){return t.organizationRegulationFile(a)}}},[e("a",{attrs:{href:t.organizationGoalChart,target:"_blank"}},[t._v("معاينة")])])])])}))],2)],1)}),[function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("الأهداف")]),e("th",{staticStyle:{width:"20%"}},[t._v("معاينة")])])},function(){var t=this,e=t._self._c;return e("tr",{staticStyle:{"background-color":"cornflowerblue"}},[e("th",{staticStyle:{width:"20%"}},[t._v("الوائح")]),e("th",{staticStyle:{width:"10%"}},[t._v("متوفرة")]),e("th",{staticStyle:{width:"10%"}},[t._v("عدد الأبواب")]),e("th",{staticStyle:{width:"10%"}},[t._v("عدد الفصول")]),e("th",{staticStyle:{width:"10%"}},[t._v("عدد المواد")]),e("th",{staticStyle:{width:"10%"}},[t._v("ملاحظات")]),e("th",{staticStyle:{width:"10%"}},[t._v("المرفقات")])])}],!1,null,"9555fb2a",null,null).exports,v=i({},(function(){return(0,this._self._c)("div",{attrs:{dir:"rtl"}})}),[],!1,null,"882be32f",null,null).exports,_=i({},(function(){return(0,this._self._c)("div",[this._v("page")])}),[],!1,null,null,null,null).exports,f=i({},(function(){return(0,this._self._c)("div",[this._v("page")])}),[],!1,null,null,null,null).exports,g=i({},(function(){return(0,this._self._c)("div",[this._v("page")])}),[],!1,null,null,null,null).exports;t("default",i({data:function(){return{valid:!1,pages:11}},components:{ReportHeader:a,Page1:n,Page2:s,Page3:l,Page4:c,Page5:h,Page6:d,Page7:u,Page8:v,Page9:_,Page10:f,Page11:g},mounted:function(){var t=this;return r(e().mark((function a(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.id,console.log(r,"ss"),e.next=4,t.$store.dispatch("organization/getOrganization",r);case 4:t.valid=!0;case 5:case"end":return e.stop()}}),a)})))()}},(function(){var t=this,e=t._self._c;return e("v-app",[e("v-main",[e("v-container",[t.valid?e("v-row",t._l(t.pages,(function(a,r){return e("div",{key:r,staticClass:"page"},[0==r?e("Page1"):t._e(),1==r?e("Page2"):t._e(),2==r?e("Page3"):t._e(),3==r?e("Page4"):t._e(),4==r?e("Page5"):t._e(),5==r?e("Page6"):t._e(),6==r?e("Page7"):t._e(),7==r?e("Page8"):t._e(),8==r?e("Page9"):t._e(),9==r?e("Page10"):t._e(),10==r?e("Page11"):t._e()],1)})),0):t._e()],1)],1)],1)}),[],!1,null,"26c0afaf",null,null).exports)}}}))}();
