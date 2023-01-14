<template>
  <div dir="rtl">
    <br />
    <v-row>
      <v-col cols="12" class="text-right">
        5- اللجنة الدائمة التابعة للمؤسسة</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">اسم اللجنة</th>
        <!-- <th style="width: 10%">عدد الأعضاء</th> -->
        <th style="width: 10%">الذكور</th>
        <th style="width: 10%">الإناث</th>
        <th style="width: 20%">ملاحظة</th>
        <th style="width: 20%">المرفقات</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.standingCommitte"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.name }}</td>
        <td>{{ item.countMale }}</td>
        <td>{{ item.countFemale }}</td>
        <td>{{ item.note }}</td>
        <td>
          <span @click="standingCommitteFile(item)"
            ><a :href="standingCommitteChart" target="_blank">معاينة</a></span
          >
        </td>
      </tr>
    </table>

    <br />
    <v-row>
      <v-col cols="12" class="text-right">
        ثالثاً مشاريع وانشطة وبرامج المؤسسة</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        1- الانشطة والمشاريع الممولة ذاتياً او من أشخاص او جهات محلية يمنية
      </v-col>
    </v-row>

    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">اسم المشروع</th>
        <th style="width: 10%">جهة التمويل</th>
        <th style="width: 10%">المستفيدون</th>
        <th style="width: 10%">مكان التنفيذ</th>
        <th style="width: 10%">فترة التنفيذ</th>
        <th style="width: 10%">تكلفة المشروع</th>
        <th style="width: 10%">المرفقات</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.projectsByPeople"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.fundingSource }}</td>
        <td>{{ item.beneficiaries }}</td>
        <td>{{ item.executionPlace }}</td>
        <td>{{ item.executionTime }}</td>
        <td>{{ item.costProject }}</td>
        <td>
          <span @click="projectsByPeopleFile(item)"
            ><a :href="projectsByPeopleChart" target="_blank">معاينة</a></span
          >
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    standingCommitteChart: "",
    projectsByPeopleChart: "",
  }),
  methods: {
    standingCommitteFile(item) {
      console.log(item, "sss");
      this.standingCommitteChart =
        import.meta.env.VITE_API_URL +
        "/" +
        item.standingCommitteUpload.substring(7);
    },
    projectsByPeopleFile(item) {
      this.projectsByPeopleChart =
        import.meta.env.VITE_API_URL +
        "/" +
        item.projectsByPeopleUpload.substring(7);
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
