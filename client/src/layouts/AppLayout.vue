<template>
  <v-app class="grey lighten-4">
    <!-- navigation -->
    <!-- <Navigation class="hidden-print-only" ></Navigation> -->
    <div class="grey lighten-4 " style="height: 100%;">
      <div class="background topHeader hidden-print-only">
        <v-toolbar flat class="background topToolbar" dir="rtl">
          <!-- <v-toolbar-title class="mr-16 px-16 white--text">
            {{$router.history.current.meta.title}}
          </v-toolbar-title> -->
        </v-toolbar>
      </div>
      <!-- main content -->
      <div class="grey lighten-4 mt-16 content">
        <slot />
      </div>
    </div>
  </v-app>
</template>

<script>

export default {
  components: {

    // Navigation,

  },
  methods: {
    goLogin(){
      this.$router.push('/login')
    }
  }
};
</script>


<style>
.topHeader {
  position: absolute;
  height: 400px;
  width: 100%;
}
.topToolbar {
  width: 81%;
}
/* .content{
  width: 85%;
} */
@media screen and (max-width: 1264px)  {
  .topToolbar {
    width: 100%;
  }
  /* .content{
  width: 100%;
} */
}
</style>