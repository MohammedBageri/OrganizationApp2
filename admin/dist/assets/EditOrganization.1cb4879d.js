import{n as s,A as c}from"./index.abb8f9cd.js";import{S as o,a}from"./Section2.4a8eceb8.js";import{S as l,a as d,b as v,c as p,d as u,e as x,f as b,g as m,h as k,i as S,j as g,k as h,l as _,m as w,n as C,o as f,p as $}from"./\u200F\u200F\u200FSection19.715dcd1b.js";import{S as y}from"./\u200F\u200F\u200FSection20.8a56230f.js";import"./dayjs.min.5a7ef0ee.js";const z={components:{AppLayout:c,Section1:o,Section2:a,Section3:l,Section4:d,Section5:v,Section6:p,Section7:u,Section8:x,Section9:b,Section10:m,Section11:k,Section12:S,Section13:g,Section14:h,Section15:_,Section16:w,Section17:C,Section18:f,Section19:$,Section20:y},data:()=>({snackbarErro:!1,snackbarSucess:!1,snackbarEdit:!1,msg:"",section:1,dialog:!0,nextStep:1}),mounted(){const i=this.$route.params.id;this.$store.dispatch("organization/getOrganization",i)},methods:{next(){this.section=this.section+1},previous(){this.section=this.section-1},async add(){let i=await this.$store.dispatch("checkValidation",this.$store.state.sectionForm),t=await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow);i&&t?(await this.$store.dispatch("organization/createOrganization",this.$store.state.organization.organization),this.$store.state.organization.organization=this.$store.state.organization.defaultOrganization,this.snackbarSucess=!0):this.snackbarErro=!0},async edit(){await this.$store.dispatch("organization/updateOrganization",this.$store.state),this.snackbarEdit=!0,console.log("Fuck Org")},goOrg(){this.$router.push("/"),this.snackbarEdit=!1},sucessAdding(){this.$router.push("/organizations"),this.snackbarSucess=!1},async checkValidate(){this.nextStep==1?await this.$store.dispatch("checkValidation",this.$store.state.sectionForm)&&(this.nextStep=2):this.nextStep==2&&await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow)&&(this.nextStep=3)},async chickFinal(){this.nextStep==2&&await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow)&&(this.nextStep=19)}}};var E=function(){var t=this,e=t._self._c;return e("AppLayout",[e("v-container",{staticClass:"ml-10",staticStyle:{height:"100%"}},[e("v-row",{staticClass:"mb-5",attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"rounded-tr-xl rounded-tl-xl",attrs:{dir:"rtl",width:"900px"}},[e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mt-3",attrs:{cols:"6",sm:"4",md:"4",lg:"2"}},[e("v-img",{attrs:{src:"/Yemen.png","max-height":"150","max-width":"150"}})],1),e("v-col",{staticClass:"mt-5",attrs:{cols:"6",sm:"6",md:"6",lg:"4"}},[e("h3",[t._v("\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0626\u0648\u0646 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648 \u0627\u0644\u0639\u0645\u0644")]),e("h5",[t._v("\u0646\u0638\u0627\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0646\u0638\u0645\u0627\u062A \u0648 \u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u062E\u0635")])])],1)],1)],1)])],1),e("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[e("v-card",{staticClass:"mt-20 mx-5 shadow-lg",staticStyle:{"z-index":"1"},attrs:{rounded:"lg",width:"900px",dir:"rtl",transition:"scroll-x-transition"}},[e("v-card-title",{staticClass:"grey lighten-3"},[e("div",[t._v("\u0625\u0633\u062A\u0645\u0627\u0631\u0629 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0644\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0626\u0648\u0646 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644")]),e("v-spacer"),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:n}){return[e("v-btn",t._g(t._b({staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.goOrg}},"v-btn",n,!1),r),[t._v("\u0631\u062C\u0648\u0639")])]}}])},[e("span",[t._v("\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")])])],1),e("v-card-text",{staticClass:"mt-2"},[e("v-stepper",{attrs:{vertical:"",dir:"rtl"},model:{value:t.nextStep,callback:function(r){t.nextStep=r},expression:"nextStep"}},[e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>1,color:t.nextStep==1?"background":"green",step:"1",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0645\u0646\u0638\u0645\u0629 "),e("small",[t._v("\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u0636\u0641\u0627\u0641\u0629\u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0627\u0632\u0645\u0629")])])]),e("v-stepper-content",{attrs:{step:"1"}},[e("Section1"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>2,color:t.nextStep==2?"background":"green",step:"2",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0644\u0644\u0645\u0646\u0638\u0645\u0629 ")])]),e("v-stepper-content",{attrs:{step:"2"}},[e("Section2"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=1}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"green"},on:{click:t.edit}},[t._v(" \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>3,color:t.nextStep==3?"background":"green",step:"3",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0641\u0631\u0648\u0639 \u0648 \u0627\u0644\u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"3"}},[e("Section3"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=4}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=2}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>4,color:t.nextStep==4?"background":"green",step:"4",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"4"}},[e("Section4"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=5}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=3}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>5,color:t.nextStep==5?"background":"green",step:"5",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0646 ")])]),e("v-stepper-content",{attrs:{step:"5"}},[e("Section5"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=6}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=4}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>6,color:t.nextStep==6?"background":"green",step:"6",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062C\u0644\u0633 \u0627\u0644\u0623\u0645\u0646\u0627\u0621 ")])]),e("v-stepper-content",{attrs:{step:"6"}},[e("Section6"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=7}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=5}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>7,color:t.nextStep==7?"background":"green",step:"7",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u062C\u0646\u0629 \u0627\u0644\u0631\u0627\u0642\u0628\u0629 ")])]),e("v-stepper-content",{attrs:{step:"7"}},[e("Section7"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=8}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=6}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>8,color:t.nextStep==8?"background":"green",step:"8",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 ")])]),e("v-stepper-content",{attrs:{step:"8"}},[e("Section8"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=9}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=7}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>9,color:t.nextStep==9?"background":"green",step:"9",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0644\u062C\u0646\u0629 \u0627\u0644\u062F\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"9"}},[e("Section9"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=10}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=8}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>10,color:t.nextStep==10?"background":"green",step:"10",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0627\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0645\u0648\u0644\u0629 \u0630\u0627\u062A\u064A\u0627 \u0627\u0648 \u0645\u0646 \u0627\u0634\u062E\u0627\u0635 \u0627\u0648 \u062C\u0647\u0627\u062A \u0645\u062D\u0644\u064A\u0629 \u064A\u0645\u0646\u064A\u0629 ")])]),e("v-stepper-content",{attrs:{step:"10"}},[e("Section10"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=11}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=9}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>11,color:t.nextStep==11?"background":"green",step:"11",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0627\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0645\u0648\u0644\u0629 \u0645\u0646 \u0627\u0634\u062E\u0627\u0635 \u0627\u0648 \u062C\u0647\u0627\u062A \u0639\u0631\u0628\u064A\u0629/\u0627\u062C\u0646\u0628\u064A\u0629 ")])]),e("v-stepper-content",{attrs:{step:"11"}},[e("Section11"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=12}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=10}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>12,color:t.nextStep==12?"background":"green",step:"12",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"12"}},[e("Section12"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=13}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=11}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>13,color:t.nextStep==13?"background":"green",step:"13",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0628\u0646\u0643\u064A\u0629 ")])]),e("v-stepper-content",{attrs:{step:"13"}},[e("Section13"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=14}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=12}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>14,color:t.nextStep==14?"background":"green",step:"14",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629 ")])]),e("v-stepper-content",{attrs:{step:"14"}},[e("Section14"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=15}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=13}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>15,color:t.nextStep==15?"background":"green",step:"15",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0627\u0634\u062E\u0627\u0635 \u0648\u0627\u0644\u062C\u0647\u0627\u062A \u0627\u0644\u062F\u0627\u0639\u0645\u0629 \u0648\u0627\u0644\u0645\u0627\u0646\u062D\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"15"}},[e("Section16"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=15}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=14}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>16,color:t.nextStep==16?"background":"green",step:"16",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0647\u062F\u0627\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"16"}},[e("Section17"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=17}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=16}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>17,color:t.nextStep==17?"background":"green",step:"17",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")])]),e("v-stepper-content",{attrs:{step:"17"}},[e("Section18"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:function(r){t.nextStep=18}}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(r){t.nextStep=16}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>18,color:t.nextStep==18?"background":"green",step:"18",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0645\u062E\u0627\u0637\u0631 \u0648 \u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A ")])]),e("v-stepper-content",{attrs:{step:"18"}},[e("Section19")],1)],1)],1),e("v-card-actions",{staticClass:"text-center mb-2"},[e("div",{staticStyle:{width:"100%"}},[t.section==20&&t.$store.state.organization.organization._id?e("v-btn",{attrs:{color:"green mr-2"},on:{click:t.edit}},[t._v("\u062A\u0639\u062F\u064A\u0644")]):t._e(),t.section==20&&t.$store.state.organization.organization._id==""?e("v-btn",{attrs:{color:"green mr-2"},on:{click:t.add}},[t._v("\u0625\u0636\u0627\u0641\u0629 ")]):t._e(),e("v-snackbar",{attrs:{shaped:"",top:"",color:"red"},scopedSlots:t._u([{key:"action",fn:function({attrs:r}){return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(n){t.snackbarErro=!1}}},"v-btn",r,!1),[t._v(" \u0625\u063A\u0644\u0627\u0642 ")])]}}]),model:{value:t.snackbarErro,callback:function(r){t.snackbarErro=r},expression:"snackbarErro"}},[e("v-icon",[t._v("mdi-bomb")]),t._v(" \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 ")],1),e("v-snackbar",{attrs:{shaped:"",top:"",color:"green"},scopedSlots:t._u([{key:"action",fn:function({attrs:r}){return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:t.sucessAdding}},"v-btn",r,!1),[t._v(" \u0645\u0648\u0627\u0641\u0642 ")])]}}]),model:{value:t.snackbarSucess,callback:function(r){t.snackbarSucess=r},expression:"snackbarSucess"}},[e("v-icon",[t._v("mdi-party-popper")]),t._v(" \u062A\u0645\u062A \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D ")],1),e("v-snackbar",{attrs:{shaped:"",top:"",color:"green"},scopedSlots:t._u([{key:"action",fn:function({attrs:r}){return[e("v-btn",t._b({attrs:{color:"white",text:""},on:{click:t.goOrg}},"v-btn",r,!1),[t._v(" \u0645\u0648\u0627\u0641\u0642 ")])]}}]),model:{value:t.snackbarEdit,callback:function(r){t.snackbarEdit=r},expression:"snackbarEdit"}},[e("v-icon",[t._v("mdi-feather")]),t._v(" \u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0628\u0646\u062C\u0627\u062D ")],1)],1)])],1)],1)],1),e("v-row",{attrs:{justify:"center"}})],1)},O=[],F=s(z,E,O,!1,null,null,null,null);const R=F.exports;export{R as default};