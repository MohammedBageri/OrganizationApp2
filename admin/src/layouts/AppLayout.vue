<template>
  <v-app class="grey lighten-4">
    <!-- navigation -->
    <Navigation class="hidden-print-only" ></Navigation>
    <div class="grey lighten-4 " style="height: 100%;">
      <div class="background topHeader hidden-print-only">
        <v-toolbar flat class="background topToolbar" dir="rtl">
          <v-app-bar-nav-icon @click="$store.state.drawer = true" class="mr-2 hidden-md-and-up"></v-app-bar-nav-icon>
          <v-toolbar-title class="mr-16 px-16 white--text">
            {{$router.history.current.meta.title}}
          </v-toolbar-title>
        </v-toolbar>
      </div>
      <!-- main content -->
      <div class="backgroundBody mt-16 content">
        <slot />
      </div>
    </div>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>


<style>
.topHeader {
  position: absolute;
  height: 200px;
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
.backgroundBody{
  background-color: #178287;
}
</style>