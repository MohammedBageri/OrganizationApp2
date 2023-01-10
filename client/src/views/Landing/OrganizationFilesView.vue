<template>
  <AppLayout>
    <v-container class="mt-16" style="height: 100%">
      <v-row justify="center" align="center" class="mb-5">
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

      <v-row justify="center" align="center" style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-20 mx-5 shadow-lg"
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

              <!-- Section 3 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 3"
                :color="nextStep == 3 ? 'background' : 'green'"
                step="3"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الفروع و المكاتب التابعة للمؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="3">
                <Section3></Section3>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 4"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 4 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 4"
                :color="nextStep == 4 ? 'background' : 'green'"
                step="4"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  المرافق والمراكز التابعة للمؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="4">
                <Section4></Section4>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 5"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 3"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 5 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 5"
                :color="nextStep == 5 ? 'background' : 'green'"
                step="5"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  بيانات المؤسسين
                </div>
              </v-stepper-step>

              <v-stepper-content step="5">
                <Section5></Section5>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 6"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 4"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 6 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 6"
                :color="nextStep == 6 ? 'background' : 'green'"
                step="6"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  بيانات مجلس الأمناء
                </div>
              </v-stepper-step>

              <v-stepper-content step="6">
                <Section6></Section6>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 7"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 5"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 7 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 7"
                :color="nextStep == 7 ? 'background' : 'green'"
                step="7"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  بيانات لجنة الراقبة
                </div>
              </v-stepper-step>

              <v-stepper-content step="7">
                <Section7></Section7>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 8"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 6"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section8 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 8"
                :color="nextStep == 8 ? 'background' : 'green'"
                step="8"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الموظفين
                </div>
              </v-stepper-step>

              <v-stepper-content step="8">
                <Section8></Section8>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 9"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 7"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 9 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 9"
                :color="nextStep == 9 ? 'background' : 'green'"
                step="9"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  اللجنة الدائمة التابعة للمؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="9">
                <Section9></Section9>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 10"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 8"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 10 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 10"
                :color="nextStep == 10 ? 'background' : 'green'"
                step="10"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الانشطة والمشاريع الممولة ذاتيا او من اشخاص او جهات محلية
                  يمنية
                </div>
              </v-stepper-step>

              <v-stepper-content step="10">
                <Section10></Section10>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 11"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 9"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 11 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 11"
                :color="nextStep == 11 ? 'background' : 'green'"
                step="11"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الانشطة والمشاريع الممولة من اشخاص او جهات عربية/اجنبية
                </div>
              </v-stepper-step>

              <v-stepper-content step="11">
                <Section11></Section11>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 12"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 10"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 12 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 12"
                :color="nextStep == 12 ? 'background' : 'green'"
                step="12"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  مشاريع المؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="12">
                <Section12></Section12>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 13"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 11"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 13 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 13"
                :color="nextStep == 13 ? 'background' : 'green'"
                step="13"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الحسابات البنكية
                </div>
              </v-stepper-step>

              <v-stepper-content step="13">
                <Section13></Section13>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 14"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 12"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 14 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 14"
                :color="nextStep == 14 ? 'background' : 'green'"
                step="14"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الميزانية
                </div>
              </v-stepper-step>

              <v-stepper-content step="14">
                <Section14></Section14>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 15"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 13"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 15 -->
              <!-- <v-stepper-step
                  editable
                  edit-icon="mdi-check"
                  :complete="nextStep > 15"
                  :color="nextStep == 15 ? 'background' : 'green'"
                  step="15"
                  dir="rtl"
                >
                  <div style="text-align: initial" class="mr-2" dir="rtl">
                    المصروفات
                  </div>
                </v-stepper-step>
  
                <v-stepper-content step="15">
                  <Section15></Section15>
                  <v-btn
                    color="background"
                    class="rounded-br-xl rounded-tl-xl white--text"
                    @click="nextStep = 16"
                  >
                    التالي
                    <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                  </v-btn>
                  <v-btn
                    color="background"
                    class="rounded-br-xl rounded-tl-xl white--text mr-2"
                    @click="nextStep = 14"
                  >
                    السابق
                    <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                  </v-btn>
                </v-stepper-content> -->

              <!-- Section 15 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 15"
                :color="nextStep == 15 ? 'background' : 'green'"
                step="15"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  الاشخاص والجهات الداعمة والمانحة للمؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="15">
                <Section16></Section16>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 15"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 14"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 16 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 16"
                :color="nextStep == 16 ? 'background' : 'green'"
                step="16"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  اهداف المؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="16">
                <Section17></Section17>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 17"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 16"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 17 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 17"
                :color="nextStep == 17 ? 'background' : 'green'"
                step="17"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  لوائح المؤسسة
                </div>
              </v-stepper-step>

              <v-stepper-content step="17">
                <Section18></Section18>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text"
                  @click="nextStep = 18"
                >
                  التالي
                  <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
                <v-btn
                  color="background"
                  class="rounded-br-xl rounded-tl-xl white--text mr-2"
                  @click="nextStep = 16"
                >
                  السابق
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
              </v-stepper-content>

              <!-- Section 18 -->
              <v-stepper-step
                editable
                edit-icon="mdi-check"
                :complete="nextStep > 18"
                :color="nextStep == 18 ? 'background' : 'green'"
                step="18"
                dir="rtl"
              >
                <div style="text-align: initial" class="mr-2" dir="rtl">
                  المخاطر و التحديات
                </div>
              </v-stepper-step>

              <v-stepper-content step="18">
                <Section19></Section19>
                <!-- <v-btn
                    color="background"
                    class="rounded-br-xl rounded-tl-xl white--text"
                    @click="nextStep = 19"
                  >
                    التالي
                    <v-icon class="mr-2">mdi-arrow-down-bold-circle</v-icon>
                  </v-btn>
                  <v-btn
                    color="background"
                    class="rounded-br-xl rounded-tl-xl white--text mr-2"
                    @click="nextStep = 18"
                  >
                    السابق
                    <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                  </v-btn> -->
              </v-stepper-content>

              <!-- Section 19 -->
              <!-- <v-stepper-step
                  editable
                  edit-icon="mdi-check"
                  :complete="(nextStep > 19)"
                  :color="nextStep == 19 ? 'background' : 'green'"
                  step="19"
                  dir="rtl"
                >
                  <div style="text-align: initial" class="mr-2" dir="rtl">
                    الهيكل التنظيمي للمؤسسة
                  </div>
                </v-stepper-step>
  
                <v-stepper-content step="19">
                  <Section20></Section20>
                  <v-btn
                    v-if="
                      nextStep == 19 && $store.state.organization.organization._id
                    "
                    color="green mr-2 rounded-br-xl rounded-tl-xl white--text"
                    @click="edit"
                  >
                    تعديل
                    <v-icon class="mr-2">mdi-content-save-edit</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="
                      nextStep == 19 "
                    color="green mr-2 white--text rounded-br-xl rounded-tl-xl"
                    @click="add"
                  > 
                  <v-icon class="mr-2">mdi-cloud-upload</v-icon>
                    ارسال الطلب
                   
                  </v-btn>
                  <v-btn
                    color="background"
                    class="rounded-br-xl rounded-tl-xl white--text mr-2"
                    @click="(nextStep = 18)"
                  > 
                  <v-icon class="mr-2">mdi-arrow-up-bold-circle</v-icon>
                    السابق
                   
                  </v-btn> -->
              <!-- <v-btn
                    color="background"
                    class="white--text mr-2 rounded-br-xl rounded-tl-xl"
                    @click="nextStep = 1"
                  >
                   <v-icon class="mr-2">mdi-home-circle</v-icon>
                    العودة الى الصفحة الاولى
                   
                  </v-btn> -->

              <!--             
                  <v-btn color="primary" @click="nextStep = 15"> التالي </v-btn>
                  <v-btn color="primary" class="mr-2" @click="nextStep = 13">
                    السابق
                  </v-btn> -->
              <!-- </v-stepper-content> -->
            </v-stepper>
          </v-card-text>
          <v-card-actions class="text-center mb-2">
            <div style="width: 100%">
              <!-- <v-btn color="primary" :disabled="section == 1" @click="previous"
                  >السابق</v-btn
                >
                <v-btn v-if="section != 20" color="primary mr-2" @click="next"
                  >التالي</v-btn
                > -->
              <v-btn
                v-if="
                  section == 20 && $store.state.organization.organization._id
                "
                color="green mr-2"
                @click="edit"
                >تعديل</v-btn
              >
              <v-btn
                v-if="
                  section == 20 &&
                  $store.state.organization.organization._id == ''
                "
                color="green mr-2"
                @click="add"
                >إضافة
              </v-btn>
              <v-snackbar v-model="snackbarErro" shaped top color="red">
                <v-icon>mdi-bomb</v-icon>
                يرجى التحقق من الحقول اللازمة

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
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

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="sucessAdding"
                  >
                    موافق
                  </v-btn>
                </template>
              </v-snackbar>

              <v-snackbar v-model="snackbarEdit" shaped top color="green">
                <v-icon>mdi-feather</v-icon>
                تم تعديل معلومات المنظمة بنجاح

                <template v-slot:action="{ attrs }">
                  <v-btn color="white" text v-bind="attrs" @click="goOrg">
                    موافق
                  </v-btn>
                </template>
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

    <v-row justify="center"> </v-row>
  </AppLayout>
</template>

<script>
import AppLayout from "../../layouts/AppLayout.vue";
import Section3 from "../../components/OrganizationSections/‏‏Section3.vue";
import Section4 from "../../components/OrganizationSections/‏‏Section4.vue";
import Section5 from "../../components/OrganizationSections/‏‏Section5.vue";
import Section6 from "../../components/OrganizationSections/‏‏Section6.vue";
import Section7 from "../../components/OrganizationSections/‏‏Section7.vue";
import Section8 from "../../components/OrganizationSections/Section8.vue";
import Section9 from "../../components/OrganizationSections/‏‏Section9.vue";
import Section10 from "../../components/OrganizationSections/‏‏Section10.vue";
import Section11 from "../../components/OrganizationSections/‏‏‏‏Section11.vue";
import Section12 from "../../components/OrganizationSections/‏‏‏‏Section12.vue";
import Section13 from "../../components/OrganizationSections/‏‏‏‏Section13.vue";
import Section14 from "../../components/OrganizationSections/‏‏‏‏Section14.vue";
import Section15 from "../../components/OrganizationSections/Section15.vue";
import Section16 from "../../components/OrganizationSections/‏‏‏Section16.vue";
import Section17 from "../../components/OrganizationSections/‏‏‏‏‏‏Section17.vue";
import Section18 from "../../components/OrganizationSections/‏‏‏‏‏Section18.vue";
import Section19 from "../../components/OrganizationSections/‏‏‏Section19.vue";
import Section20 from "../../components/OrganizationSections/‏‏‏Section20.vue";

import InformationDialog from "../../components/InformationDialog.vue";

// import Section3 from "../components/OrganizationSections/section_3.vue";

export default {
  components: {
    AppLayout,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
    Section12,
    Section13,
    Section14,
    Section15,
    Section16,
    Section17,
    Section18,
    Section19,
    Section20,

    InformationDialog,
  },
  data: () => ({
    snackbarErro: false,
    snackbarSucess: false,
    snackbarEdit: false,
    msg: "",
    section: 1,
    dialog: true,
    nextStep: 1,
  }),
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("organization/getOrganization", id);
  },
  // destroyed() {
  //   this.$store.state.organization.organization =
  //     this.$store.state.organization.defaultOrganization;
  // },
  methods: {
    next() {
      this.section = this.section + 1;
    },
    previous() {
      this.section = this.section - 1;
    },
    async add() {
      let resulte1 = await this.$store.dispatch(
        "checkValidation",
        this.$store.state.sectionForm
      );
      let resulte2 = await this.$store.dispatch(
        "checkValidation",
        this.$store.state.sectionFormTow
      );
      if (resulte1 && resulte2) {
        await this.$store.dispatch(
          "organization/createOrganization",
          this.$store.state.organization.organization
        );
        this.$store.state.organization.organization =
          this.$store.state.organization.defaultOrganization;
        this.snackbarSucess = true;
      } else {
        // alert("تحقق من الحقول المطلوبة في الصفحة رقم 1 او 2");
        this.snackbarErro = true;
      }
    },
    async edit() {
      await this.$store.dispatch(
        "organization/updateOrganization",
        this.$store.state.organization.organization
      );
      this.$store.state.organization.organization =
        this.$store.state.organization.defaultOrganization;
      this.snackbarEdit = true;
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
  },
};
</script>
