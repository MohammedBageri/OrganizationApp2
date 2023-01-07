<template>
  <div>
    <v-stepper v-model="nextStetus" elevation="4" max-height="1000px" alt-labels>
      <v-stepper-header>
        <v-stepper-step color="#14425a" step="2"> قيد المعالجة </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#14425a" step="3">
          المعاملات المالية
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step color="#14425a" step="4"> مكتمل </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <v-icon class="mt-8 mr-5" large color="green" style="position: absolute"
      >mdi-book-information-variant</v-icon
    >
    <h3 class="mb-5 mt-9 mr-14">معلومات مراحل تقديم الطلب</h3>
    <v-divider></v-divider>

    <!-- <v-icon class=" mt-7 mr-5" color="#14425a" style="position: absolute;">mdi-numeric-1-circle</v-icon>
    <h5 class="mb-5 mt-8 mr-12">المرحلة الاولى سيتم التحقق من صحة معلومات المنظمة ...إن وجد اي نقص سيتم إشعارك عن طريق الايميل</h5> -->

    <!-- <v-icon class=" mt-2 mr-5" color="#14425a" style="position: absolute;">mdi-numeric-2-circle</v-icon> -->
    <v-icon class="mt-7 mr-5" color="#14425a" style="position: absolute"
      >mdi-numeric-2-circle</v-icon
    >
    <h5 class="mb-5 mt-8 mr-12">
      المرحلة الثانية إنتظار موافقة المدير لإعتماد الطلب وإدراج المنظمة في وزارة
      شئون العمل
    </h5>

    <v-icon class="mt-2 mr-5" color="#14425a" style="position: absolute"
      >mdi-numeric-3-circle</v-icon
    >
    <h5 class="mb-5 mt-8 mr-12">
      المرحلة الثالثة الذهاب لوزارة شئون العمل ودفع المبلغ الازم لإكمال المعاملة
    </h5>

    <v-icon class="mt-2 mr-5" color="#14425a" style="position: absolute"
      >mdi-numeric-4-circle</v-icon
    >
    <h5 class="mb-5 mt-8 mr-12">
      المرحلة الرابعة والموافقة و إصدار التصريح اللازم
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      defualt: null
    },
  },
  watch: {
    order (val, old) {
      console.log(val)
      this.status = val.status
    }
  },
  data () {
    return {
      status: 'قيد التنفيذ'
    }
  },
  computed: {
    nextStetus () {
      if (this.status == "قيد التنفيذ") {
        return 2
      } else if (this.status == "مرحلة الدفع"){
        return 3
      } else if (this.status == "مكتمل") {
        return 4
      } else {
        this.$router.push('/login')
      }
    },
  }
};
</script>

<style scoped>
</style>