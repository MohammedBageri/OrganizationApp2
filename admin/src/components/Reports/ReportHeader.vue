<template>
  <div dir="rtl">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div>الجمهورية اليمنية</div>
          <div>وزارة الشؤون الاجتماعية والعمل</div>
          <div>قطاع التنمية الاجتماعية</div>
          <div>الادارة العامة للجمعيات والاتحادات</div>
        </v-col>
        <v-col cols="4" class="mr-16">
          <v-img src="/Yemen.png" max-height="100" max-width="100"></v-img>
        </v-col>
        <v-col cols="2">التاريخ...............</v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" class="text-center"> استمارة تحديث بيانات </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6" class="text-right">
          اولا البيانات الاساسية للمؤسسة
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2" class="text-right mr-16">
          <v-btn
            class="rounded-br-xl rounded-tl-xl white--text hidden-print-only"
            color="#14425a"
            @click="print"
          >
            طباعة
            <v-icon class="mr-2">mdi-printer</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn
            class="rounded-br-xl rounded-tl-xl white--text hidden-print-only"
            color="#14425a"
            @click="backTo"
          >
            العودة
            <v-icon class="mr-2">mdi-arrow-left-bold-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" class="text-right"> 1 - البانات التعريفية</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    print() {
      window.print();
    },
    backTo() {
      this.$router.push("/organizations");
    },
  },
};
</script>
