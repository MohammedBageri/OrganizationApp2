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
      <v-list-item class="ml-16" dir="rtl">
        <v-list-item-avatar class="p-0">
          <!-- <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img> -->
          <!-- License: CC Attribution. Made by epicons: https://epicons.co/ -->
          <!-- License: CC Attribution. Made by epicons: https://epicons.co/ -->
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
        </v-list-item-avatar>

        <v-list-item-title class="mr-3">مشرف</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav class="px-0" dir="rtl">
        <!-- v-show="role(item.roles)" -->
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
    <Important :dialog.sync="dialog" />
  </div>
</template>

<script>
import Important from '../components/Important.vue'
export default {
  data: () => ({
    navCss: "",
    dialog: false,
    items: [
      // { title: "لوحة التحكم", icon: "mdi-monitor-dashboard", link: "/home" },
      {
        title: "المنظمات",
        icon: "mdi-office-building",
        link: "/organizations",
        // roles: ['superAdmin', 'manager', 'admin']
      },

      {
        title: "إضافة منظمة",
        icon: "mdi-bank-plus",
        link: '/organization/create',
        // roles: ['superAdmin', 'manager', 'admin']
      },
      // {
      //   title: 'تعديل المنطمة',
      //   icon: 'mdi-application-edit-outline',
      //   link: '/organization/edit',
      //   roles: ['superAdmin', 'manager', 'admin']
      // },
      {
        title: "طلبات قيد المراجعة",
        icon: "mdi-bell-alert-outline",
        link: "/requests-org",
        // roles: ['superAdmin', 'admin']
      },
      {
        title: "مراجعة الطلبات بعد  المختص",
        icon: "mdi-file-eye-outline",
        link: "/check-request",
        // roles: ['superAdmin', 'manager']
      },
      // { title: 'المنظمات مسجلة', icon: 'mdi-account-group-outline', link: "/registered-org" },
      // { title: 'المنظمات غير مسجلة', icon: 'mdi-account-group-outline', link: "" },
      {
        title: "تاكيد الدفع ورفع السند",
        icon: "mdi-refresh-auto",
        link: "/payment-oragnization",
        // roles: ['superAdmin', 'admin_2']
      },
      {
        title: "رفع التصاريح المعتمده",
        icon: "mdi-file-upload-outline",
        link: "/upload-file-verify",
        // roles: ['superAdmin', 'admin_3']
      },
      // {
      //   title: "طلبات انشطة جديدة قيد المراجعة",
      //   icon: "mdi-list-box-outline",
      //   // link: "/requests-org",
        
      // },
      {
        title: "الموقع",
        icon: "mdi-office-building-marker-outline",
        link: "/locations",
        // roles: ['superAdmin']
      },
      { 
        title: "المستخدمين",
        icon: "mdi-account-group",
        link: "/users" ,
        // roles: ['superAdmin']
      }
    ],
  }),
  components:{
    Important
  },
  watch: {
    "$store.state.drawer": function (newval, oldval) {
      if (!newval)
        this.navCss = ".v-navigation-drawer {display: none !important}";
      else this.navCss = "";
    },
  },
  // mounted() {
  //   //check if mobile close drawer
  // },
  methods: {
   async logout() {
    await this.$store.dispatch('user/logout', this.$store.state.user);
    this.$router.push('/')
    },
    role (roles) {
      return roles.includes(JSON.parse(localStorage.getItem('user')).role)
    }
  },
  openDialog(){
    this.dialog = true
  }
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