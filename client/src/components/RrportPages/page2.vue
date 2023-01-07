<template>
  <div dir="rtl">
    <v-row>
      <v-col cols="12" class="text-right">
        3- الفروع والمكاتب التابعة للمؤسسة</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue;">
        <th style="width: 20%">اسم الفرع</th>
        <th style="width: 20%">تاريخ الإنشاء</th>
        <th>رقم التصريح</th>
        <th>المحافظة</th>
        <th>المديرية</th>
        <th>الشارع</th>
        <th>ملك/إجار</th>
      </tr>
      <tr v-for="item in $store.state.organization.organization.branche" :key="item._id">
        <td  style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateCreated }}</td>
        <td>{{ item.permitNumber }}</td>
        <td>{{ item.street }}</td>
        <td>{{ item.ownOrRent }}</td>
        <td>{{ item.state.name }}</td>
        <td>{{ item.city.name }}</td>
      </tr>
    </table>
    <br>
    <v-row>
      <v-col cols="12" class="text-right">
        4- المرافق الراكز التابعة للمؤسسة</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue;">
        <th> إسم المرفق</th>
        <th> نوع النشاط</th>
        <th>المحافظة</th>
        <th>تاريخ الإنشاء</th>
        <th>الهاتف</th>
      </tr>
      <tr v-for="item in $store.state.organization.organization.facilitiesAndCenter" :key="item._id">
        <td>{{item.name}}</td>
        <td>{{item.activityType}}</td>
        <td>{{item.state.name}}</td>
        <td>{{item.dateCreated}}</td>
        <td>{{item.phone}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

  data() {
    return {
    
    };
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