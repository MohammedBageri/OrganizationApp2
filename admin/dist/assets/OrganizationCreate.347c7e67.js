import{n as o,A as n}from"./index.a59219c4.js";import{S as i}from"./\u200F\u200F\u200FSection20.2cfafbe1.js";const l={components:{Section20:i},data:()=>({textRules:[s=>!!s||"\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"],logo:[],imageRules:[s=>!s||s.size<1e5||"\u0627\u0644\u0634\u0639\u0627\u0631 \u0644\u0627\u0628\u062F \u0627\u0646 \u064A\u0643\u0648\u0646 \u0627\u0642\u0644 \u0645\u0646 1 \u0645\u064A\u062C\u0627"],items:["\u0645\u062D\u0644\u064A\u0629","\u062F\u0648\u0644\u064A\u0629"],typeItems:["\u0645\u0624\u0633\u0633\u0629","\u062C\u0645\u0639\u064A\u0629","\u0645\u0646\u0638\u0645\u0629"],image:null}),async created(){await this.$store.dispatch("getStates"),await this.$store.dispatch("getCities"),await this.$store.dispatch("getMapAreas")},mounted(){this.$store.state.sectionForm=this.$refs.section1},methods:{uploadImage(){this.logo.push(event.target.files[0]),console.log(event.target.files[0]),this.$store.state.organization.organization.logo=this.logo,console.log(this.logo)}}};var c=function(){var t=this,e=t._self._c;return e("v-container",[e("v-form",{ref:"section1",attrs:{"lazy-validation":""}},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[e("v-text-field",{staticClass:"text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",dense:"",label:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629",dir:"rtl",rules:t.textRules,reverse:"",required:""},model:{value:t.$store.state.organization.organization.nameAr,callback:function(a){t.$set(t.$store.state.organization.organization,"nameAr",a)},expression:"$store.state.organization.organization.nameAr"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,outlined:"",dense:"",label:"\u0625\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0627\u0646\u062C\u0644\u064A\u0632\u064A\u0629",reverse:""},model:{value:t.$store.state.organization.organization.nameEn,callback:function(a){t.$set(t.$store.state.organization.organization,"nameEn",a)},expression:"$store.state.organization.organization.nameEn"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,outlined:"",dense:"",items:t.typeItems,label:"\u0646\u0648\u0639\u0647\u0627",reverse:""},model:{value:t.$store.state.organization.organization.type,callback:function(a){t.$set(t.$store.state.organization.organization,"type",a)},expression:"$store.state.organization.organization.type"}})],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{type:"date",rules:t.textRules,outlined:"",dense:"",label:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0623\u0633\u064A\u0633",reverse:""},model:{value:t.$store.state.organization.organization.lastRenewalDate,callback:function(a){t.$set(t.$store.state.organization.organization,"lastRenewalDate",a)},expression:"$store.state.organization.organization.lastRenewalDate"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,outlined:"",dense:"",label:"\u0631\u0642\u0645 \u062A\u0635\u0631\u064A\u062D \u0645\u0632\u0627\u0648\u0644\u0629 \u0627\u0644\u0646\u0634\u0627\u0637",reverse:"",dir:"ltr"},model:{value:t.$store.state.organization.organization.permitNumber,callback:function(a){t.$set(t.$store.state.organization.organization,"permitNumber",a)},expression:"$store.state.organization.organization.permitNumber"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{type:"date",rules:t.textRules,outlined:"",dense:"",label:"\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631\u0629",reverse:""},model:{value:t.$store.state.organization.organization.permitDate,callback:function(a){t.$set(t.$store.state.organization.organization,"permitDate",a)},expression:"$store.state.organization.organization.permitDate"}})],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,outlined:"",dense:"",label:"\u0645\u062C\u0627\u0644 \u0639\u0645\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",reverse:""},model:{value:t.$store.state.organization.organization.fieldWork,callback:function(a){t.$set(t.$store.state.organization.organization,"fieldWork",a)},expression:"$store.state.organization.organization.fieldWork"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{type:"emil",outlined:"",dense:"",rules:t.textRules,label:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",reverse:""},model:{value:t.$store.state.organization.organization.email,callback:function(a){t.$set(t.$store.state.organization.organization,"email",a)},expression:"$store.state.organization.organization.email"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{type:"sit",outlined:"",dense:"",label:"\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0625\u0646 \u0648\u062C\u062F",reverse:""},model:{value:t.$store.state.organization.organization.website,callback:function(a){t.$set(t.$store.state.organization.organization,"website",a)},expression:"$store.state.organization.organization.website"}})],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",dense:"",items:t.items,rules:t.textRules,label:"\u0645\u062D\u0644\u064A\u0629/\u062F\u0648\u0644\u064A\u0629",reverse:""},model:{value:t.$store.state.organization.organization.localOrInternational,callback:function(a){t.$set(t.$store.state.organization.organization,"localOrInternational",a)},expression:`
            $store.state.organization.organization.localOrInternational
          `}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"text-right selection rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{"item-text":"name","item-value":"_id",outlined:"",rules:t.textRules,dense:"",items:t.$store.state.mapAreas,label:"\u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A",reverse:""},model:{value:t.$store.state.organization.organization.mapArea,callback:function(a){t.$set(t.$store.state.organization.organization,"mapArea",a)},expression:"$store.state.organization.organization.mapArea"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",dense:"",rules:t.textRules,label:"\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",reverse:""},model:{value:t.$store.state.organization.organization.phone,callback:function(a){t.$set(t.$store.state.organization.organization,"phone",a)},expression:"$store.state.organization.organization.phone"}})],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-file-input",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{type:"file",accept:"image/png, image/jpeg, image/bmp",placeholder:"\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0639\u0627\u0631","prepend-icon":"mdi-camera",label:"\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0646\u0638\u0645\u0629",outlined:"",rules:t.imageRules,dense:"",reverse:"",required:""},on:{change:t.uploadImage},model:{value:t.$store.state.organization.logo,callback:function(a){t.$set(t.$store.state.organization,"logo",a)},expression:"$store.state.organization.logo"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("Section20")],1)],1)],1)],1)},d=[],u=o(l,c,d,!1,null,null,null,null);const g=u.exports,m={data:()=>({ownOrRent:["\u0625\u064A\u062C\u0627\u0631","\u0645\u0644\u0643"],textRules:[s=>!!s||"\u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"]}),async created(){await this.$store.dispatch("getStates"),await this.$store.dispatch("getCities")},mounted(){this.$store.state.sectionFormTow=this.$refs.section2}};var v=function(){var t=this,e=t._self._c;return e("v-container",[e("v-form",{ref:"section2"},[e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"text-right selection rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,"item-text":"name","item-value":"_id",outlined:"",dense:"",items:t.$store.state.states,label:"\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629",reverse:""},model:{value:t.$store.state.organization.organization.mainCenter.state,callback:function(a){t.$set(t.$store.state.organization.organization.mainCenter,"state",a)},expression:"$store.state.organization.organization.mainCenter.state"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{rules:t.textRules,"item-text":"name","item-value":"_id",outlined:"",dense:"",items:t.$store.state.cities,label:"\u0627\u0644\u0645\u062F\u064A\u0631\u064A\u0629",reverse:""},model:{value:t.$store.state.organization.organization.mainCenter.city,callback:function(a){t.$set(t.$store.state.organization.organization.mainCenter,"city",a)},expression:"$store.state.organization.organization.mainCenter.city"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",rules:t.textRules,dense:"",label:"\u0627\u0644\u0634\u0627\u0631\u0639",reverse:""},model:{value:t.$store.state.organization.organization.mainCenter.street,callback:function(a){t.$set(t.$store.state.organization.organization.mainCenter,"street",a)},expression:"$store.state.organization.organization.mainCenter.street"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-text-field",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",rules:t.textRules,dense:"",label:"\u0646\u0648\u0639 \u0627\u0644\u0645\u0628\u0646\u0649",reverse:""},model:{value:t.$store.state.organization.organization.mainCenter.buildingType,callback:function(a){t.$set(t.$store.state.organization.organization.mainCenter,"buildingType",a)},expression:"$store.state.organization.organization.mainCenter.buildingType"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[e("v-combobox",{staticClass:"rounded-bl-xl rounded-tl-xl rounded-tr-xl",attrs:{outlined:"",dense:"",rules:t.textRules,items:t.ownOrRent,label:"\u0645\u0628\u0646\u0649 \u0627\u0644\u0645\u0642\u0631: \u0645\u0644\u0643/\u0625\u064A\u062C\u0627\u0631",reverse:""},model:{value:t.$store.state.organization.organization.mainCenter.ownOrRent,callback:function(a){t.$set(t.$store.state.organization.organization.mainCenter,"ownOrRent",a)},expression:"$store.state.organization.organization.mainCenter.ownOrRent"}})],1)],1)],1)],1)},x=[],p=o(m,v,x,!1,null,null,null,null);const b=p.exports,z={components:{AppLayout:n,Section1:g,Section2:b},data:()=>({snackbarErro:!1,snackbarSucess:!1,snackbarEdit:!1,msg:"",section:1,dialog:!1,nextStep:1}),watch:{orgId(s,t){console.log("val: ",s),console.log("old: ",t),this.orgId=s}},computed:{orgId(){return console.log(this.$store.state.organization.id),this.$store.state.organization.id}},methods:{next(){this.section=this.section+1},previous(){this.section=this.section-1},goOrg(){this.$router.push("/"),this.snackbarEdit=!1},sucessAdding(){this.$router.push("/organizations"),this.snackbarSucess=!1},async checkValidate(){this.nextStep==1&&await this.$store.dispatch("checkValidation",this.$store.state.sectionForm)&&(this.nextStep=2),this.nextStep==2&&await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow)&&(this.nextStep=3)},async chickFinal(){this.nextStep==2&&await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow)&&(this.nextStep=19)},async sendOrder(){let s=await this.$store.dispatch("checkValidation",this.$store.state.sectionForm),t=await this.$store.dispatch("checkValidation",this.$store.state.sectionFormTow);console.log("ssssss");let e;s&&t?(e=await this.$store.dispatch("organization/createOrganization",this.$store.state.organization.organization),this.snackbarSucess=!0):(this.snackbarErro=!0,this.dialog=!1),console.log(e),console.log("gggg",await this.$store.state.organization),await this.$router.push(`/organization/create/${e.data.result._id}`)}}};var $=function(){var t=this,e=t._self._c;return e("AppLayout",[e("v-container",{staticClass:"mt-16",staticStyle:{height:"100%"}},[e("v-row",{staticClass:"content-row mb-5"},[e("v-card",{staticClass:"rounded-tr-xl rounded-tl-xl",attrs:{dir:"rtl",width:"900px"}},[e("div",[e("v-container",[e("v-row",[e("v-col",{staticClass:"mt-3",attrs:{cols:"6",sm:"4",md:"4",lg:"2"}},[e("v-img",{attrs:{src:"../../public/Yemen.png","max-height":"150","max-width":"150"}})],1),e("v-col",{staticClass:"mt-5",attrs:{cols:"6",sm:"6",md:"6",lg:"4"}},[e("h3",[t._v("\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0626\u0648\u0646 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648 \u0627\u0644\u0639\u0645\u0644")]),e("h5",[t._v("\u0646\u0638\u0627\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0646\u0638\u0645\u0627\u062A \u0648 \u062A\u062C\u062F\u064A\u062F \u0627\u0644\u0631\u062E\u0635")])])],1)],1)],1)])],1),e("v-row",{staticClass:"content-row mb-5",staticStyle:{height:"100%"}},[e("v-card",{staticClass:"shadow-lg",staticStyle:{"z-index":"1"},attrs:{rounded:"lg",width:"900px",dir:"rtl",transition:"scroll-x-transition"}},[e("v-card-title",{staticClass:"grey lighten-3"},[e("div",[t._v(" \u0625\u0633\u062A\u0645\u0627\u0631\u0629 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u0644\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0626\u0648\u0646 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644 ")]),e("v-spacer"),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:r}){return[e("v-btn",t._g(t._b({staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.goOrg}},"v-btn",r,!1),a),[t._v("\u0631\u062C\u0648\u0639")])]}}])},[e("span",[t._v("\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")])])],1),e("v-card-text",{staticClass:"mt-2"},[e("v-stepper",{attrs:{vertical:"",dir:"rtl"},model:{value:t.nextStep,callback:function(a){t.nextStep=a},expression:"nextStep"}},[e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>1,color:t.nextStep==1?"background":"green",step:"1",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0645\u0646\u0638\u0645\u0629 "),e("small",[t._v("\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u0636\u0641\u0627\u0641\u0629\u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0627\u0632\u0645\u0629")])])]),e("v-stepper-content",{attrs:{step:"1"}},[e("Section1"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1)],1),e("v-stepper-step",{attrs:{editable:"","edit-icon":"mdi-check",complete:t.nextStep>2,color:t.nextStep==2?"background":"green",step:"2",dir:"rtl"}},[e("div",{staticClass:"mr-2",staticStyle:{"text-align":"initial"},attrs:{dir:"rtl"}},[t._v(" \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0644\u0644\u0645\u0646\u0638\u0645\u0629 ")])]),e("v-stepper-content",{attrs:{step:"2"}},[e("Section2"),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text",attrs:{color:"background"},on:{click:t.checkValidate}},[t._v(" \u0627\u0644\u062A\u0627\u0644\u064A "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-down-bold-circle")])],1),e("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text mr-2",attrs:{color:"background"},on:{click:function(a){t.nextStep=1}}},[t._v(" \u0627\u0644\u0633\u0627\u0628\u0642 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-up-bold-circle")])],1),e("v-btn",{staticClass:"mr-2 rounded-br-xl rounded-tl-xl white--text",attrs:{color:"green "},on:{click:function(a){t.dialog=!0}}},[t._v(" \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628 "),e("v-icon",{staticClass:"mr-2"},[t._v("mdi-content-save-edit")])],1)],1)],1)],1),e("v-card-actions",{staticClass:"text-center mb-2"},[e("div",{staticStyle:{width:"100%"}},[e("v-snackbar",{attrs:{shaped:"",top:"",color:"red"},scopedSlots:t._u([{key:"action",fn:function({attrs:a}){return[e("v-btn",t._b({staticClass:"rounded-tl-xl",attrs:{color:"white",text:""},on:{click:function(r){t.snackbarErro=!1}}},"v-btn",a,!1),[t._v(" \u0625\u063A\u0644\u0627\u0642 ")])]}}]),model:{value:t.snackbarErro,callback:function(a){t.snackbarErro=a},expression:"snackbarErro"}},[e("v-icon",[t._v("mdi-bomb")]),t._v(" \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0644\u0627\u0632\u0645\u0629 ")],1),e("v-snackbar",{attrs:{shaped:"",top:"",color:"green"},model:{value:t.snackbarSucess,callback:function(a){t.snackbarSucess=a},expression:"snackbarSucess"}},[e("v-icon",[t._v("mdi-party-popper")]),t._v(" \u062A\u0645\u062A \u0627\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D ")],1)],1)])],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"green lighten-3",attrs:{dir:"rtl"}},[e("v-icon",{staticClass:"ml-2"},[t._v("mdi-file-document-alert")]),t._v(" \u0645\u062A\u0627\u0628\u0639\u0629 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ")],1),e("v-card-text",{staticClass:"mt-5",attrs:{dir:"rtl"}},[e("h4",{staticStyle:{color:"black"}},[t._v("\u064A\u0631\u062C\u0649 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0625\u0636\u0627\u0641\u0629 \u0628\u0627\u0642\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A")])]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"#14425a",outlined:""},on:{click:t.sendOrder}},[t._v(" \u0645\u062A\u0627\u0628\u0639\u0629 ")])],1)],1)],1)],1)],1)},h=[],f=o(z,$,h,!1,null,null,null,null);const C=f.exports;export{C as default};