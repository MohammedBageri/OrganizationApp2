<template>
  <div>
    <v-navigation-drawer
      right
      fixed
      app
      :class="navCss"
      v-model="$store.state.drawer"
      style="z-index: 2; height: 100vh"
    >
      <div class="text-center mt-5 mb-2">
        <v-avatar class="my-5" size="60">
          <svg
            id="user-svgrepo-com"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g id="Group_1" data-name="Group 1">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M20,0A20,20,0,1,0,40,20,19.993,19.993,0,0,0,20,0ZM30.292,31.78a15.641,15.641,0,0,1-20.582,0,1.427,1.427,0,0,1-.457-1.359c.985-4.81,4.049-8.6,7.948-9.852a7.536,7.536,0,0,1-3.432-6.54c0-4.043,2.79-7.32,6.231-7.32s6.231,3.277,6.231,7.32A7.536,7.536,0,0,1,22.8,20.569c3.9,1.248,6.964,5.041,7.949,9.851A1.428,1.428,0,0,1,30.292,31.78Z"
                fill="#303f9f"
              />
            </g>
          </svg>
        </v-avatar>
        <h3 class="">مشرف</h3>
        <h5>admin@admin.com</h5>
        <!-- <v-btn rounded color="#2EBFAF" outlined>Book Appointment</v-btn> -->
      </div>

      <v-divider></v-divider>

      <v-list dense nav class="px-0" dir="rtl">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          exact-active-class=" "
          class=""
        >
          <v-list-item-icon dir="rtl" class="mx-0 pl-2">
            <v-icon color="indigo darken-2">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content color="#14425a" dir="rtl">
            <v-list-item-title color="red darken-2">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="red darken-4 white--text" @click="logout">
            تسجيل الخروج
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- <Important :dialog.sync="dialog" /> -->
  </div>
</template>
  
  <script>
//   import Important from '../components/Important.vue'
export default {
  data: () => ({
    navCss: "",
    dialog: false,
    items: [
      // { title: "لوحة التحكم", icon: "mdi-monitor-dashboard", link: "/home" },
      {
        title: "مراحل تقدم الطلب",
        icon: "mdi-clipboard-clock-outline",
        link: "/requist-timeline",
      },
      {
        title: "معلومات المنظمة",
        icon: "mdi-file-eye-outline",
        link: "/organization-info",
      },

      // {
      //   title: "إضافة نشاط جديد",
      //   icon: "mdi-archive-plus-outline",
      //   link: "/new-activity-requist",
      // },
      { title: 'تجديد الترخيص', icon: 'mdi-autorenew', link: "/renew-activition" ,},
      // { title: 'المنظمات غير مسجلة', icon: 'mdi-account-group-outline', link: "" },
      // {
      //   title: "طلب تجديد مزاولة النشاط",
      //   icon: "mdi-refresh-auto",
      //   link: "/renewal-activity",
      // },
      // {
      //   title: "طلبات قيد المراجعة",
      //   icon: "mdi-bell-alert-outline",
      //   link: "/requests-org",
      // },
      // {
      //   title: "الموقع",
      //   icon: "mdi-office-building-marker-outline",
      //   link: "/locations",
      // },
      // {
      //   title: "المستخدمين",
      //   icon: "mdi-account-group",
      //   link: "/users" },
    ],
  }),
  components: {
    //   Important
  },
  watch: {
    "$store.state.drawer": function (newval, oldval) {
      if (!newval)
        this.navCss = ".v-navigation-drawer {display: none !important}";
      else this.navCss = "";
    },
  },
  mounted() {
    //check if mobile close drawer
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout", this.$store.state.user.user);
      this.$store.commit(
        "organization/set_organization",
        this.$store.state.organization.defaultOrganization
      );
      this.$store.commit("order/set_order", {
        _id: "",
        organization: "",
        status: "",
      });
      this.$router.push("/");
    },
  },
  openDialog() {
    this.dialog = true;
  },
};
</script>
  
  <style scoped>
.border {
  background-color: #14425a;
}
imageSize {
  height: 40px;
  width: 40px;
}
</style>