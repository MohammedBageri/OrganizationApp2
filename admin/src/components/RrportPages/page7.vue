<template>
  <div dir="rtl">
    <v-row>
      <v-col cols="12" class="text-right">
        خامسا اهداف وهيكل ولوائحالمؤسسة الأساسية التي تستند عليها في ممارسة
        عملها ونشاطها</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right"> 1- اهداف المؤسسة </v-col>
    </v-row>

    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">الأهداف</th>
        <th style="width: 20%">معاينة</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.organizationGoal"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.goal }}</td>
        <td>
          <span @click="organizationGoalFile(item)"
            ><a :href="organizationGoalChart" target="_blank">معاينة</a></span
          >
        </td>
      </tr>
    </table>
    <br />
    <v-row>
      <v-col cols="12" class="text-right"> 2- لوائح المؤسسة </v-col>
    </v-row>

    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">الوائح</th>
        <th style="width: 10%">متوفرة</th>
        <th style="width: 10%">عدد الأبواب</th>
        <th style="width: 10%">عدد الفصول</th>
        <th style="width: 10%">عدد المواد</th>
        <th style="width: 10%">ملاحظات</th>
        <th style="width: 10%">المرفقات</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization
          .organizationRegulation"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.regulation }}</td>
        <td style="width: 20%">{{ item.isAvailable }}</td>
        <td>{{ item.numberDoors }}</td>
        <td>{{ item.numberLuck }}</td>
        <td>{{ item.numberMaterials }}</td>
        <td>{{ item.note }}</td>
        <td>
          <span @click="organizationRegulationFile(item)"
            ><a :href="organizationGoalChart" target="_blank">معاينة</a></span
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    organizationGoalChart: "",
    organizationRegulationChart: "",
  }),
  methods: {
    organizationGoalFile(item) {
      this.organizationGoalChart =
        import.meta.env.VITE_API +
        "/" +
        item.organizationGoalUpload.substring(7);
    },
    organizationRegulationFile(item) {
      this.organizationRegulationChart =
        import.meta.env.VITE_API +
        "/" +
        item.organizationRegulationUpload.substring(7);
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  text-align: center;
  font-size: 14px;
}
</style>
