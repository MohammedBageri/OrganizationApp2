<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12" lg="6" md="6" sm="12">
        <h2>اهلاً وسهلاً بك</h2>
        <h3 class="mt-2">في وزارة الشئون الإجتماعية والعمل</h3>
        <p class="mt-1">
           يمكنك الأن إضافة منظمتك في نظام
          تسجيل <br /> المنظمات بكل سهولة ويسر
        </p>
        <v-btn class=" mb-3 white--text" color="#14425a" style="width: 70%">
          <v-icon>mdi-office-building-plus</v-icon>
           <h4 class="ml-6" @click="addOrg">أضف منظمتك</h4>
          </v-btn>
          <v-btn class="mb-16 white--text" color="#14425a" style="width: 70%">
          <v-icon class="mr-2">mdi-login</v-icon>
           <h4 class="ml-5" @click="goLogin">تسجيل الدخول</h4>
          </v-btn>
      </v-col>

      <v-col cols="12" lg="5" md="6" sm="12">
        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_xnjvarpw.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    addOrg () {
      this.$router.push('/addOrganization')
    },
    goLogin () {
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
</style>