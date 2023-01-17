import{n as i}from"./index.7c76922b.js";import{d as r}from"./dayjs.min.c89254f3.js";const l={methods:{print(){window.print()},backTo(){this.$router.push("/organizations")}}};var _=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("div",[t._v("\u0627\u0644\u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0627\u0644\u064A\u0645\u0646\u064A\u0629")]),a("div",[t._v("\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0634\u0624\u0648\u0646 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0644")]),a("div",[t._v("\u0642\u0637\u0627\u0639 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629")]),a("div",[t._v("\u0627\u0644\u0627\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062C\u0645\u0639\u064A\u0627\u062A \u0648\u0627\u0644\u0627\u062A\u062D\u0627\u062F\u0627\u062A")])]),a("v-col",{staticClass:"mr-16",attrs:{cols:"4"}},[a("v-img",{attrs:{src:"/Yemen.png","max-height":"100","max-width":"100"}})],1),a("v-col",{attrs:{cols:"2"}},[t._v("\u0627\u0644\u062A\u0627\u0631\u064A\u062E...............")])],1),a("v-divider"),a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" \u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A ")])],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[t._v(" \u0627\u0648\u0644\u0627 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629 ")]),a("v-spacer"),a("v-col",{staticClass:"text-right mr-16",attrs:{cols:"2"}},[a("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text hidden-print-only",attrs:{color:"#14425a"},on:{click:t.print}},[t._v(" \u0637\u0628\u0627\u0639\u0629 "),a("v-icon",{staticClass:"mr-2"},[t._v("mdi-printer")])],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{staticClass:"rounded-br-xl rounded-tl-xl white--text hidden-print-only",attrs:{color:"#14425a"},on:{click:t.backTo}},[t._v(" \u0627\u0644\u0639\u0648\u062F\u0629 "),a("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-left-bold-circle")])],1)],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1 - \u0627\u0644\u0628\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A\u0629")])],1)],1)],1)},c=[],d=i(l,_,c,!1,null,null,null,null);const n=d.exports;const v={data(){return{showLogo:"",showOrganizationalChart:"",table:[{title:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0633\u0633\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A",data:this.$store.state.organization.organization.nameAr},{title:"\u0625\u0633\u0645 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A",data:this.$store.state.organization.organization.nameEn},{title:"\u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",data:this.$store.state.organization.organization.type},{title:"\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0623\u0633\u064A\u0633",data:r(this.$store.state.organization.organization.lastRenewalDate).format("YYYY-MM-DD")},{title:"\u0631\u0642\u0645 \u062A\u0635\u0631\u064A\u062D \u0645\u0632\u0627\u0648\u0644\u0629 \u0627\u0644\u0646\u0634\u0627\u0637",data:this.$store.state.organization.organization.permitNumber},{title:"\u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631\u0629",data:r(this.$store.state.organization.organization.permitDate).format("YYYY-MM-DD")},{title:"\u0645\u062C\u0627\u0644\u0627\u062A \u0639\u0645\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",data:this.$store.state.organization.organization.fieldWork},{title:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",data:this.$store.state.organization.organization.email},{title:"\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",data:this.$store.state.organization.organization.website},{title:"\u0645\u0646\u0638\u0645\u0629 \u0645\u062D\u0644\u064A\u0629/\u062F\u0648\u0644\u064A\u0629",data:this.$store.state.organization.organization.localOrInternational},{title:"\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629",data:this.$store.state.organization.organization.phone},{title:"\u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0624\u0633\u0633\u0629"}]}},components:{ReportHeader:n},async created(){this.showLogo=await"https://organization2-api.novelsoft.com.co"+"/"+this.$store.state.organization.organization.logo.substring(7),this.showOrganizationalChart=await"https://organization2-api.novelsoft.com.co"+"/"+this.$store.state.organization.organization.OrganizationalChart.substring(7)},computed:{mapArea(){return this.$store.state.organization.organization.mapArea}},async mounted(){console.log(await this.$store.state.organization.organization,"asaaa")},methods:{lastRenew(e){return r(this.$store.state.organization.organization.lastRenewalDate).format("YYYY-MM-DD")},permit(e){return r(this.$store.state.organization.organization.permitDate).format("YYYY-MM-DD")}}};var h=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("ReportHeader"),a("table",{staticClass:"tableReport"},[a("tbody",[a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0633\u0633\u0629 \u0628\u0627\u0644\u0639\u0631\u0628\u064A ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.nameAr)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0633\u0633\u0629 \u0628\u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.nameEn)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0646\u0648\u0639 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.type)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0623\u0633\u064A\u0633 ")]),a("td",{staticStyle:{width:"50%"},domProps:{textContent:t._s(t.lastRenew())}})]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0631\u0642\u0645 \u062A\u0635\u0631\u064A\u062D \u0645\u0632\u0627\u0648\u0644\u0629 \u0627\u0644\u0646\u0634\u0627\u0637 ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.permitNumber)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u062A\u0627\u0631\u064A\u062E \u0625\u0635\u062F\u0627\u0631\u0629 ")]),a("td",{staticStyle:{width:"50%"},domProps:{textContent:t._s(t.permit())}})]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0645\u062C\u0627\u0644 \u0639\u0645\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.fieldWork)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.email)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.website)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0645\u0646\u0638\u0645\u0629 \u0645\u062D\u0644\u064A\u0629/\u062F\u0648\u0644\u064A\u0629 ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.localOrInternational)+" ")])]),a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(t.mapArea.name)+" ")]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")]),a("td",{staticStyle:{width:"50%"}},[t._v(" "+t._s(this.$store.state.organization.organization.phone)+" ")])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0634\u0639\u0627\u0631 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")]),a("td",{staticStyle:{width:"50%"}},[a("span",[a("a",{attrs:{href:t.showLogo,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629\u0627\u0644\u0635\u0648\u0631\u0629")])])])]),a("tr",[a("th",{staticClass:"tableRow",staticStyle:{width:"50%","background-color":"cornflowerblue"}},[t._v(" \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A ")]),a("td",{staticStyle:{width:"50%"}},[a("span",[a("a",{attrs:{href:t.showOrganizationalChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0631\u0641\u0642")])])])])])]),a("br")],1)},u=[],g=i(v,h,u,!1,null,"0ab369ae",null,null);const f=g.exports;const w={data(){return{}}};var y=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 3- \u0627\u0644\u0641\u0631\u0648\u0639 \u0648\u0627\u0644\u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.branche,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.dateCreated))]),a("td",[t._v(t._s(o.permitNumber))]),a("td",[t._v(t._s(o.street))]),a("td",[t._v(t._s(o.ownOrRent))]),a("td",[t._v(t._s(o.state.name))]),a("td",[t._v(t._s(o.city.name))])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 4- \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.facilitiesAndCenter,function(o){return a("tr",{key:o._id},[a("td",[t._v(t._s(o.name))]),a("td",[t._v(t._s(o.activityType))]),a("td",[t._v(t._s(o.state.name))]),a("td",[t._v(t._s(o.dateCreated))]),a("td",[t._v(t._s(o.phone))])])})],2)],1)},p=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0633\u0645 \u0627\u0644\u0641\u0631\u0639")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621")]),t("th",[e._v("\u0631\u0642\u0645 \u0627\u0644\u062A\u0635\u0631\u064A\u062D")]),t("th",[e._v("\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629")]),t("th",[e._v("\u0627\u0644\u0645\u062F\u064A\u0631\u064A\u0629")]),t("th",[e._v("\u0627\u0644\u0634\u0627\u0631\u0639")]),t("th",[e._v("\u0645\u0644\u0643/\u0625\u062C\u0627\u0631")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",[e._v(" \u0625\u0633\u0645 \u0627\u0644\u0645\u0631\u0641\u0642")]),t("th",[e._v(" \u0646\u0648\u0639 \u0627\u0644\u0646\u0634\u0627\u0637")]),t("th",[e._v("\u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629")]),t("th",[e._v("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621")]),t("th",[e._v("\u0627\u0644\u0647\u0627\u062A\u0641")])])}],b=i(w,y,p,!1,null,"22e066af",null,null);const S=b.exports;const m={data:()=>({founderChart:"",boardOfTrusteChart:""}),methods:{founderFile(e){this.founderChart="https://organization2-api.novelsoft.com.co/"+e.founderUpload.substring(7)},boardOfTrusteFile(e){this.boardOfTrusteChart="https://organization2-api.novelsoft.com.co/"+e.BoardOfTrusteUpload.substring(7)}}};var z=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" \u062B\u0627\u0646\u064A\u0627\u064B\u0627\u0644\u0641\u0631\u0648\u0639 \u0648\u0627\u0644\u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629")])],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u064A\u0646")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.founder,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.dateOfBirth))]),a("td",[t._v(t._s(o.placeOfBirth))]),a("td",[t._v(t._s(o.currentPlace))]),a("td",[t._v(t._s(o.job))]),a("td",[t._v(t._s(o.gualification))]),a("td",[t._v(t._s(o.phone))]),a("td",[a("span",{on:{click:function(s){return t.founderFile(o)}}},[a("a",{attrs:{href:t.founderChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062C\u0644\u0633 \u0627\u0644\u0623\u0645\u0646\u0627\u0621")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.boardOfTruste,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.dateOfBirth))]),a("td",[t._v(t._s(o.placeOfBirth))]),a("td",[t._v(t._s(o.currentPlace))]),a("td",[t._v(t._s(o.job))]),a("td",[t._v(t._s(o.adjective))]),a("td",[t._v(t._s(o.phone))]),a("td",[a("span",{on:{click:function(s){return t.boardOfTrusteFile(o)}}},[a("a",{attrs:{href:t.boardOfTrusteChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2)],1)},$=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0627\u0633\u0645 \u0631\u0628\u0627\u0639\u064A\u0627\u064B")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0648\u0638\u064A\u0641\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0624\u0647\u0644")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0627\u0633\u0645 \u0631\u0628\u0627\u0639\u064A\u0627\u064B")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0648\u0638\u064A\u0641\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0635\u0641\u0629 \u0641\u064A \u0627\u0644\u0645\u0624\u0633\u0633\u0629")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])}],C=i(m,z,$,!1,null,"e0d53ff7",null,null);const k=C.exports;const x={data:()=>({oversightCommitteChart:""}),methods:{oversightCommitteFile(e){this.oversightCommitteChart="https://organization2-api.novelsoft.com.co/"+e.oversightCommitteUpload.substring(7)}}};var R=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 3- \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u062C\u0646\u0629 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.oversightCommitte,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.dateOfBirth))]),a("td",[t._v(t._s(o.placeOfBirth))]),a("td",[t._v(t._s(o.currentPlace))]),a("td",[t._v(t._s(o.qualification))]),a("td",[t._v(t._s(o.phone))]),a("td",[a("span",{on:{click:function(s){return t.oversightCommitteFile(o)}}},[a("a",{attrs:{href:t.oversightCommitteChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 4- \u0625\u062D\u0635\u0627\u0626\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0644\u064A\u0646 \u0628\u0627\u0644\u0645\u0624\u0633\u0633\u0629 (\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646/\u0627\u0644\u0645\u062A\u0639\u0627\u0642\u062F\u064A\u0646/\u0627\u0644\u0645\u062A\u0637\u0648\u0639\u064A\u0646)")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),a("tr",[a("td",{staticStyle:{width:"20%"}},[t._v("\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646")]),a("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberStaff)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleStaff)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleStaff)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteStaff)+" ")])]),a("tr",[a("td",{staticStyle:{width:"20%"}},[t._v("\u0627\u0644\u0645\u062A\u0639\u0627\u0642\u062F\u064A\u0646")]),a("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberContractors)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleContractors)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleContractors)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteContractors)+" ")])]),a("tr",[a("td",{staticStyle:{width:"20%"}},[t._v("\u0627\u0644\u0645\u062A\u0637\u0648\u0639\u064A\u0646")]),a("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberVolunteers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleVolunteers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleVolunteers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteVolunteers)+" ")])]),a("tr",[a("td",{staticStyle:{width:"20%"}},[t._v("\u0627\u062E\u0631\u0649")]),a("td",{staticStyle:{width:"20%"}},[t._v(" "+t._s(this.$store.state.organization.organization.employeeStats.numberOthers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.maleOthers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.femaleOthers)+" ")]),a("td",[t._v(" "+t._s(t.$store.state.organization.organization.employeeStats.noteOthers)+" ")])])])],1)},P=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0627\u0633\u0645 \u0631\u0628\u0627\u0639\u064A\u0627\u064B")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064A\u0644\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u062D\u0627\u0644\u064A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0635\u0641\u0629 \u0641\u064A \u0627\u0644\u0645\u0624\u0633\u0633\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0625\u0633\u0645")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0639\u062F\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0630\u0643\u0648\u0631")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0625\u0646\u0627\u062B")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0644\u0627\u062D\u0638\u0627\u062A")])])}],F=i(x,R,P,!1,null,"0462582b",null,null);const O=F.exports;const Y={data:()=>({standingCommitteChart:"",projectsByPeopleChart:""}),methods:{standingCommitteFile(e){console.log(e,"sss"),this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+e.standingCommitteUpload.substring(7)},projectsByPeopleFile(e){this.projectsByPeopleChart="https://organization2-api.novelsoft.com.co/"+e.projectsByPeopleUpload.substring(7)}}};var B=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 5- \u0627\u0644\u0644\u062C\u0646\u0629 \u0627\u0644\u062F\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0627\u0628\u0639\u0629 \u0644\u0644\u0645\u0624\u0633\u0633\u0629")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.standingCommitte,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",[t._v(t._s(o.countMale))]),a("td",[t._v(t._s(o.countFemale))]),a("td",[t._v(t._s(o.note))]),a("td",[a("span",{on:{click:function(s){return t.standingCommitteFile(o)}}},[a("a",{attrs:{href:t.standingCommitteChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" \u062B\u0627\u0644\u062B\u0627\u064B \u0645\u0634\u0627\u0631\u064A\u0639 \u0648\u0627\u0646\u0634\u0637\u0629 \u0648\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u0645\u0624\u0633\u0633\u0629")])],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- \u0627\u0644\u0627\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0645\u0648\u0644\u0629 \u0630\u0627\u062A\u064A\u0627\u064B \u0627\u0648 \u0645\u0646 \u0623\u0634\u062E\u0627\u0635 \u0627\u0648 \u062C\u0647\u0627\u062A \u0645\u062D\u0644\u064A\u0629 \u064A\u0645\u0646\u064A\u0629 ")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.projectsByPeople,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.fundingSource))]),a("td",[t._v(t._s(o.beneficiaries))]),a("td",[t._v(t._s(o.executionPlace))]),a("td",[t._v(t._s(o.executionTime))]),a("td",[t._v(t._s(o.costProject))]),a("td",[a("span",{on:{click:function(s){return t.projectsByPeopleFile(o)}}},[a("a",{attrs:{href:t.projectsByPeopleChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2)],1)},A=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0633\u0645 \u0627\u0644\u0644\u062C\u0646\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0630\u0643\u0648\u0631")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0625\u0646\u0627\u062B")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0645\u0644\u0627\u062D\u0638\u0629")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062C\u0647\u0629 \u0627\u0644\u062A\u0645\u0648\u064A\u0644")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0648\u0646")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u062A\u0646\u0641\u064A\u0630")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])}],j=i(Y,B,A,!1,null,"10e37ec6",null,null);const D=j.exports;const T={data:()=>({activitiesChart:"",bankAccountChart:""}),methods:{activitiesFile(e){this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+e.activityUpload.substring(7)},bankAccountFile(e){this.standingCommitteChart="https://organization2-api.novelsoft.com.co/"+e.bankUpload.substring(7)}}};var M=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- \u0627\u0644\u0627\u0646\u0634\u0637\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639 \u0627\u0644\u0645\u0645\u0648\u0644\u0629 \u0645\u0646 \u0623\u0634\u062E\u0627\u0635 \u0627\u0648 \u062C\u0647\u0627\u062A \u0627\u0648 \u0645\u0646\u0638\u0645\u0627\u062A \u0639\u0631\u0628\u064A\u0629/\u0627\u062C\u0646\u0628\u064A\u0647 ")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.activitiesAndProjectsByOthersOrganization,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.name))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.fundingSourceAndNationality))]),a("td",[t._v(t._s(o.numberBeneficiaries))]),a("td",[t._v(t._s(o.executionPlace))]),a("td",[t._v(t._s(o.executionTime))]),a("td",[t._v(t._s(o.costProject))]),a("td",[a("span",{on:{click:function(s){return t.activitiesFile(o)}}},[a("a",{attrs:{href:t.activitiesChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" \u0631\u0627\u0628\u0639\u0627\u064B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629")])],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0628\u0646\u0643\u064A\u0629 ")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.bankAccount,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.bankName))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.address))]),a("td",[t._v(t._s(o.numberAccount))]),a("td",[t._v(t._s(o.currency))]),a("td",[t._v(t._s(o.balance))]),a("td",[a("span",{on:{click:function(s){return t.bankAccountFile(o)}}},[a("a",{attrs:{href:t.bankAccountChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2)],1)},U=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062C\u0647\u0629 \u0627\u0644\u062A\u0645\u0648\u064A\u0644")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F\u0648\u0646")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0643\u0627\u0646 \u0627\u0644\u062A\u0646\u0641\u064A\u0630")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0641\u062A\u0631\u0629 \u0627\u0644\u062A\u0646\u0641\u064A\u0630")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0633\u0645 \u0627\u0644\u0628\u0646\u0643")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u0626\u064A\u0633\u064A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0631\u0642\u0645 \u0627\u0644\u062D\u0633\u0627\u0628")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0639\u0645\u0644\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0628\u0646\u0643\u064A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])}],G=i(T,M,U,!1,null,"e9629cb2",null,null);const V=G.exports;const N={data:()=>({organizationGoalChart:"",organizationRegulationChart:""}),methods:{organizationGoalFile(e){this.organizationGoalChart="https://organization2-api.novelsoft.com.co/"+e.organizationGoalUpload.substring(7)},organizationRegulationFile(e){this.organizationRegulationChart="https://organization2-api.novelsoft.com.co/"+e.organizationRegulationUpload.substring(7)}}};var I=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}},[a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" \u062E\u0627\u0645\u0633\u0627 \u0627\u0647\u062F\u0627\u0641 \u0648\u0647\u064A\u0643\u0644 \u0648\u0644\u0648\u0627\u0626\u062D\u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0633\u062A\u0646\u062F \u0639\u0644\u064A\u0647\u0627 \u0641\u064A \u0645\u0645\u0627\u0631\u0633\u0629 \u0639\u0645\u0644\u0647\u0627 \u0648\u0646\u0634\u0627\u0637\u0647\u0627")])],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 1- \u0627\u0647\u062F\u0627\u0641 \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.organization.organization.organizationGoal,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.goal))]),a("td",[a("span",{on:{click:function(s){return t.organizationGoalFile(o)}}},[a("a",{attrs:{href:t.organizationGoalChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2),a("br"),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t._v(" 2- \u0644\u0648\u0627\u0626\u062D \u0627\u0644\u0645\u0624\u0633\u0633\u0629 ")])],1),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._l(t.$store.state.organization.organization.organizationRegulation,function(o){return a("tr",{key:o._id},[a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.regulation))]),a("td",{staticStyle:{width:"20%"}},[t._v(t._s(o.isAvailable))]),a("td",[t._v(t._s(o.numberDoors))]),a("td",[t._v(t._s(o.numberLuck))]),a("td",[t._v(t._s(o.numberMaterials))]),a("td",[t._v(t._s(o.note))]),a("td",[a("span",{on:{click:function(s){return t.organizationRegulationFile(o)}}},[a("a",{attrs:{href:t.organizationGoalChart,target:"_blank"}},[t._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])])])})],2)],1)},L=[function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0623\u0647\u062F\u0627\u0641")]),t("th",{staticStyle:{width:"20%"}},[e._v("\u0645\u0639\u0627\u064A\u0646\u0629")])])},function(){var e=this,t=e._self._c;return t("tr",{staticStyle:{"background-color":"cornflowerblue"}},[t("th",{staticStyle:{width:"20%"}},[e._v("\u0627\u0644\u0648\u0627\u0626\u062D")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u062A\u0648\u0641\u0631\u0629")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0639\u062F\u062F \u0627\u0644\u0623\u0628\u0648\u0627\u0628")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0639\u062F\u062F \u0627\u0644\u0641\u0635\u0648\u0644")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0627\u062F")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0645\u0644\u0627\u062D\u0638\u0627\u062A")]),t("th",{staticStyle:{width:"10%"}},[e._v("\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A")])])}],q=i(N,I,L,!1,null,"9555fb2a",null,null);const E=q.exports;const H={};var W=function(){var t=this,a=t._self._c;return a("div",{attrs:{dir:"rtl"}})},J=[],K=i(H,W,J,!1,null,"882be32f",null,null);const Q=K.exports,X={};var Z=function(){var t=this,a=t._self._c;return a("div",[t._v("page")])},tt=[],at=i(X,Z,tt,!1,null,null,null,null);const et=at.exports,ot={};var st=function(){var t=this,a=t._self._c;return a("div",[t._v("page")])},it=[],rt=i(ot,st,it,!1,null,null,null,null);const nt=rt.exports,lt={};var _t=function(){var t=this,a=t._self._c;return a("div",[t._v("page")])},ct=[],dt=i(lt,_t,ct,!1,null,null,null,null);const vt=dt.exports;const ht={data:()=>({valid:!1,pages:11}),components:{ReportHeader:n,Page1:f,Page2:S,Page3:k,Page4:O,Page5:D,Page6:V,Page7:E,Page8:Q,Page9:et,Page10:nt,Page11:vt},async mounted(){let e=this.$route.query.id;console.log(e,"ss"),await this.$store.dispatch("organization/getOrganization",e),this.valid=!0}};var ut=function(){var t=this,a=t._self._c;return a("v-app",[a("v-main",[a("v-container",[t.valid?a("v-row",t._l(t.pages,function(o,s){return a("div",{key:s,staticClass:"page"},[s==0?a("Page1"):t._e(),s==1?a("Page2"):t._e(),s==2?a("Page3"):t._e(),s==3?a("Page4"):t._e(),s==4?a("Page5"):t._e(),s==5?a("Page6"):t._e(),s==6?a("Page7"):t._e(),s==7?a("Page8"):t._e(),s==8?a("Page9"):t._e(),s==9?a("Page10"):t._e(),s==10?a("Page11"):t._e()],1)}),0):t._e()],1)],1)],1)},gt=[],ft=i(ht,ut,gt,!1,null,"26c0afaf",null,null);const pt=ft.exports;export{pt as default};
