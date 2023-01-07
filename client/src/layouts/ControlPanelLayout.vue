<template>
    <v-app class="grey lighten-4">
      <!-- navigation -->
      <ControlPanal class=""></ControlPanal>
      <div class="grey lighten-4" style="height: 100%">
        <div class="background topHeader hidden-print-only">
          <v-toolbar flat class="background topToolbar" dir="rtl">
            <v-app-bar-nav-icon
              @click="$store.state.drawer = true"
              class="mr-2 hidden-md-and-up"
            ></v-app-bar-nav-icon>
            <v-toolbar-title class="mr-16 px-16 white--text">
              {{ $router.history.current.meta.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
  
            <v-menu bottom right offset-x>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn
                      dark
                      icon
                      v-bind="attrs"
                      v-on="{ ...tooltip, ...menu }"
                      class="ml-10"
                    >
                      <v-icon>mdi-bell</v-icon>
                    </v-btn>
                  </template>
                  <span>إشعارات الطلبات الجديدة</span>
                </v-tooltip>
              </template>
  
              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
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
  import ControlPanal from "../components/ControlPanel/ControlPanalNav.vue";
  export default {
    components: {
    ControlPanal
},
    data: () => ({
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" },
      ],
    }),
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
  @media screen and (max-width: 1264px) {
    .topToolbar {
      width: 100%;
    }
    /* .content{
    width: 100%;
  } */
  }
  </style>