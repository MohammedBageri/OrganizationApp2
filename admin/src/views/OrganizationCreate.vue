<template>
  <AppLayout>
    <v-container class="mt-16" style="height: 100%">
      <v-row class="content-row mb-5">
        <v-card dir="rtl" class="rounded-tr-xl rounded-tl-xl" width="900px">
          <div>
            <v-container>
              <v-row>
                <v-col cols="6" class="mt-3" sm="4" md="4" lg="2">
                  <v-img
                    src="/Yemen.png"
                    max-height="150"
                    max-width="150"
                  ></v-img>
                </v-col>
                <v-col cols="6" class="mt-5" sm="6" md="6" lg="4">
                  <h3>وزارة الشئون الإجتماعية و العمل</h3>
                  <h5>نظام تسجيل المنظمات و تجديد الرخص</h5>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card>
      </v-row>

      <v-row class="content-row mb-5" style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class=" shadow-lg"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <v-card-title class="grey lighten-3">
            <div>
              إستمارة تقديم طلب إضافة المنظمة لوزارة الشئون الإجتماعية والعمل
            </div>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  v-bind="attrs"
                  v-on="on"
                  @click="goOrg"
                  >رجوع</v-btn
                >
              </template>
              <span>الصفحة الرئيسية</span>
            </v-tooltip>
          </v-card-title>
          <v-card-text class="mt-2">
            <!-- sections -->

            <v-stepper v-model="nextStep" vertical dir="rtl">
              <!-- Section 1 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 1"
                :color="nextStep == 1 ? 'background' : 'green'"
                step="1"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  البيانات الأساسية للمنظمة
                  <small>الرجاء إضفافةالحقول الازمة</small>
                </div>
              </v-stepper-step>
              <v-stepper-content step="1">
                <Section1></Section1>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="checkValidate"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 2 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 2"
                :color="nextStep == 2 ? 'background' : 'green'"
                step="2"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  البيانات المركز الرئيسي للمنظمة
                </div>
              </v-stepper-step>

              <v-stepper-content step="2">
                <Section2></Section2>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="checkValidate"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 1"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="green "
                  class="mr-2 rounded-br-xl rounded-tl-xl white--text"
                  @click="(dialog=true)"
                >
                  إرسال الطلب
                  <v-icon class="mr-2">mdi-content-save-edit</v-icon>
                </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-card-text>
          <v-card-actions class="text-center mb-2">
            <div style="width: 100%">

              <v-snackbar v-model="snackbarErro" shaped top color="red">
                <v-icon>mdi-bomb</v-icon>
                يرجى التحقق من الحقول اللازمة

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    class="rounded-tl-xl"
                    v-bind="attrs"
                    @click="snackbarErro = false"
                  >
                    إغلاق
                  </v-btn>
                </template>
              </v-snackbar>

              <v-snackbar v-model="snackbarSucess" shaped top color="green">
                <v-icon>mdi-party-popper</v-icon>
                تمت ارسال طلبك بنجاح

                <!-- <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    class="rounded-tl-xl"
                    v-bind="attrs"
                    @click="sucessAdding"
                  >
                    موافق
                  </v-btn>
                </template> -->
              </v-snackbar>
            </div>
            <!-- && $store.state.organization.organization._id == undefined -->
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <!-- <InformationDialog /> -->
    <!-- <v-dialog>
      
      </v-dialog> -->

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="green lighten-3" dir="rtl">
            <v-icon class="ml-2">mdi-file-document-alert</v-icon>
            متابعة إضافة البيانات
          </v-card-title>
          <v-card-text class="mt-5" dir="rtl">
            <h4 style="color: black ;">يرجى الضغط على زر المتابعة لإكمال إضافة باقي البيانات</h4>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#14425a" outlined  @click="sendOrder"> متابعة </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </AppLayout>
</template>
  
<script>
import AppLayout from "../layouts/AppLayout.vue";
import Section1 from "../components/OrganizationSections/Section1.vue";
import Section2 from "../components/OrganizationSections/Section2.vue";


// import Section3 from "../components/OrganizationSections/section_3.vue";

export default {
  components: {
    AppLayout,
    Section1,
    Section2,
  },
  data: () => ({
    snackbarErro: false,
    snackbarSucess: false,
    snackbarEdit: false,
    msg: "",
    section: 1,
    dialog: false,
    nextStep: 1,
  }),
  watch: {
    orgId(val, old) {
      console.log("val: ", val);
      console.log("old: ", old);
      this.orgId = val;
    },
  },
  computed: {
    orgId() {
      console.log(this.$store.state.organization.id);
      return this.$store.state.organization.id;
    },
  },
  methods: {
    next() {
      this.section = this.section + 1;
    },
    previous() {
      this.section = this.section - 1;
    },

    goOrg() {
      this.$router.push("/");
      this.snackbarEdit = false;
    },
    sucessAdding() {
      this.$router.push("/organizations");
      this.snackbarSucess = false;
    },
    async checkValidate() {
      if (this.nextStep == 1) {
        let resulte = await this.$store.dispatch(
          "checkValidation",
          this.$store.state.sectionForm
        );
        if (resulte) this.nextStep = 2;
      }
      if (this.nextStep == 2) {
        let resulte = await this.$store.dispatch(
          "checkValidation",
          this.$store.state.sectionFormTow
        );
        if (resulte) this.nextStep = 3;
      }
    },
    async chickFinal() {
      if (this.nextStep == 2) {
        let resulte = await this.$store.dispatch(
          "checkValidation",
          this.$store.state.sectionFormTow
        );
        if (resulte) this.nextStep = 19;
      }
    },
    async sendOrder() {
      let resulte1 = await this.$store.dispatch(
        "checkValidation",
        this.$store.state.sectionForm
      );
      let resulte2 = await this.$store.dispatch(
        "checkValidation",
        this.$store.state.sectionFormTow
      );
      console.log("ssssss");
      let org;
      if (resulte1 && resulte2) {
        org = await this.$store.dispatch(
          "organization/createOrganization",
          this.$store.state.organization.organization
        );
        this.snackbarSucess = true;
      } else {
        // alert("تحقق من الحقول المطلوبة في الصفحة رقم 1 او 2");
        this.snackbarErro = true;
        this.dialog = false
      }
      console.log(org);
      console.log("gggg", await this.$store.state.organization);
      await this.$router.push(`/organization/create/${org.data.result._id}`);
    },
  },
};
</script>