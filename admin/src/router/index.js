import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {
      title: "تسجيل الدخول"
    },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: "الرئيسية"
    }
  },

  {
    name: 'OrganizationCreate',
    path: '/organization/create',
    meta: {
      title: "إضافة منظمة"
    },
    component: () => import('../views/OrganizationCreate.vue')
  },
  {
    name: 'AddOrganizationFiles',
    path: '/organization/create/:id',
    meta: {
      title: "إضافة منظمة"
    },
    component: () => import('../views/AddOrganizationFiles.vue')
  },
  {
    name: 'EditOrganization',
    path: '/organization/edit/:id',
    meta: {
      title: 'تعديل المنظمة'
    },
    component: () => import ('../views/EditOrganization.vue')
  },

  {
    path: '/organizations',
    name: 'Organizations',
    meta: {
      title: "المنظمات"
    },
    component: () => import('../views/OrganizationsView.vue')
  },
  {
    path: '/printorganization',
    name: 'PrintOrganization',
    meta: {
      title: 'طباعة المنظمات'
    },

    component: () => import('../views/PrintOrganization.vue')
  },
  {
    path: '/registered-org',
    name: 'RegisteredOrganization',
    meta: {
      title: "الرئيسية"
    },
    component: () => import('../views/RegisteredOrganizationView.vue')
  },
  {
    path: '/requests-org',
    name: 'RequestOganization',
    meta: {
      title: 'طلبات قيد المراجعة'
    },

    component: () => import('../views/RequestTimeLine/FirstStepView.vue')
  },
  {
    path: '/check-request',
    name: 'CheckRequest',
    meta: {
      title: "مراجعة الطلبات بعد المختص"
    },
    component: () => import('../views/CheckRequest2.vue')
  },
  {
    path: '/payment-oragnization',
    name: 'Payment',
    meta: {
      title: "تاكيد الدفع ورفع السند"
    },
    component: () => import('../views/RequestTimeLine/Payment.vue')
  },
  // {
  //   path: '/renewal-activity',
  //   name: 'RenealActivity',
  //   meta: {
  //     title: "تجديد مزاولة النشاط"
  //   },
  //   component: () => import('../views/RenewalActivityView.vue')
  // },

  {
    path: "/upload-file-verify",
    name: 'UploadVerifyFiles',
    meta: {
      title: "رفع التصاريح المصرحة"
    },
    component: () => import('../views/UploadVerifyFiles.vue')
  },

  {
    path: '/locations',
    name: 'Locations',
    meta: {
      title: "الموقع"
    },
    component: () => import('../views/LocationView.vue')
  },

  {
    path: '/users',
    name: 'Users',
    meta: {
      title: "المستخدمون"
    },
    component: () => import('../views/UsersView.vue')
  },

  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/ReportVIew.vue')
  }

]
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
