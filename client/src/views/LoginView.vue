<template>
  <LoginLayout>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="12" sm="10" lg="10">
          <v-card class="elevation-10 mt-15" rounded="xl">
            <v-window>
              <v-window-item :value="1">
                <v-row class="flex-row-reverse">
                  <v-col cols="12" md="6" class="bg darken-2 rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <div class="d-flex justify-center shadow-lg">
                        <v-img
                          src="../../src/assets/Yemen.png "
                          max-height="200"
                          max-width="200"
                        />
                      </div>
                      <v-card-text class="white--text">
                        <h3 class="text-center">
                          وزارة الشئون الأجتماعية و العمل
                        </h3>
                        <h5 class="text-center">
                          نظام تسجيل المؤسسات و تجديد الرخص
                        </h5>
                      </v-card-text>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" class="mt-16">
                    <v-card-text >
                      <h4 class="text-center">تسجيل الدخول لحسابك</h4>
                      <h6 class="text-center grey--text">
                        تسجيل الدخول لحسابك لأضافة و تعديل المنظمات
                      </h6>
                      <v-row align="center" justify="center" dir="rtl">
                        <v-col cols="8" v-if="error" class="mt-16">
                          <v-alert dense outlined type="error">
                            اسم المستخدم او كلمة المرور خطاء
                          </v-alert>
                        </v-col>
                        <v-col cols="12" sm="8">
                          <v-text-field
                            v-model="email"
                            label="اسم المستخدم"
                            outlined
                            dense
                            color="indigo darken-1"
                            autocomplete="false"
                            :class="!error ? 'mt-16': ''"
                            reverse
                          />
                          <v-text-field
                            v-model="passowrd"
                            label="كلمة المرور"
                            outlined
                            dense
                            color="indigo darken-1"
                            autocomplete="false"
                            type="password"
                            @keyup.enter="login"
                            reverse
                          />
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                label="تذكر"
                                class="mt-n1"
                                color="indigo darken-1"
                              >
                              </v-checkbox>
                            </v-col>
                          </v-row>
                          <v-btn
                            color="#14425a"
                            dark
                            block
                            tile
                            :loading="isLoading"
                            @click="login"
                            >تسجيل الدخول</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="msg">
      اسم المستخدم او كلمة المرور خطاء
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="msg = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </LoginLayout>
</template>

<script>
import LoginLayout from "../layouts/LoginLayout.vue";

export default {
  comments: {
    LoginLayout,
  },
  data: () => ({
    email: "",
    passowrd: "",
    msg: "",
    error: false,
    isLoading: false
  }),
  props: {
    source: String,
  },
  components: {
    LoginLayout,
  },
  methods: {
    async login() {
      this.isLoading = true
      try {
        let result = await this.$store.dispatch("user/login", {
        email: this.email,
        password: this.passowrd,
      });
      this.isLoading = false;
      if (result) {
        this.$router.push("/requist-timeline");
      }
      } catch (error) {
        this.isLoading = false;
        this.error = true;
      }
    },
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
