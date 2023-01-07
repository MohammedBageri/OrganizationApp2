import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: "تسجيل الدخول"
    },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'Landing',
    meta: {
      title: "الرئيسية"
    },
    component: () => import('../views/Landing/LandingPage.vue')
  },
  {
    path: '/addOrganization',
    name: 'AddOrganization',
    meta: {
      title: "إرسال طلب إضافة منظمة"
    },
    component: () => import('../views/Landing/AddOrganization.vue')
  },
  {
    path: '/addOrganization/:id',
    name: 'OrganizationInfoView',
    meta: {
      title: "إرسال طلب إضافة منظمة"
    },
    component: () => import('../views/Landing/OrganizationFilesView.vue')
  },
  {
    path: '/requist-timeline',
    name: 'RequistTimeLine',
    meta: {
      title: "مراحل تقدم طلب التقديم"
    },
    component: () => import('../views/ControlPanel/RequistTimeLine.vue')
  },
  {
    path:'/organization-info',
    name: 'OrganizationInfo',
    meta: {
      title: "معلومات المنظمة"
    },
    component: () => import('../views/ControlPanel/OrganizationInfo.vue')
  },
  {
    path: '/new-activity-requist',
    name: 'NewActivity',
    meta: {
      title: "إضافة نشاط جديد"
    },
    component: () => import('../views/ControlPanel/NewActivity.vue')
  }
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView,
  //   meta: {
  //     title: "الرئيسية"
  //   }
  // },

  

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
