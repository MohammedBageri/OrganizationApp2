<template>
    <div dir="rtl">
        <br>
        <v-row>
      <v-col cols="12" class="text-right">
         ثانياًالفروع والمكاتب التابعة للمؤسسة</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
         1- بيانات المؤسسين</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue;">
        <th style="width: 20%">الاسم رباعياً</th>
        <th style="width: 10%">تاريخ الميلاد</th>
        <th style="width: 10%">مكان الميلاد</th>
        <th style="width: 10%">مكان الإقامة الحالي</th>
        <th style="width: 10%">الوظيفة</th>
        <th style="width: 10%">المؤهل</th>
        <th style="width: 20%">رقم الجوال</th>
      </tr>
      <tr v-for="item in $store.state.organization.organization.founder" :key="item._id">
        <td  style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateOfBirth }}</td>
        <td>{{ item.placeOfBirth }}</td>
        <td>{{ item.currentPlace }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.gualification }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </table>
    <br>
    <v-row>
      <v-col cols="12" class="text-right">
         2- بيانات مجلس الأمناء</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue;">
        <th style="width: 20%">الاسم رباعياً</th>
        <th style="width: 10%">تاريخ الميلاد</th>
        <th style="width: 10%">مكان الميلاد</th>
        <th style="width: 10%">مكان الإقامة الحالي</th>
        <th style="width: 10%">الوظيفة</th>
        <th style="width: 10%">الصفة في المؤسسة</th>
        <th style="width: 20%">رقم الجوال</th>
      </tr>
      <tr v-for="item in $store.state.organization.organization.boardOfTruste" :key="item._id">
        <td  style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateOfBirth }}</td>
        <td>{{ item.placeOfBirth }}</td>
        <td>{{ item.currentPlace }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.adjective }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </table>
    </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  text-align: center;
  font-size: 14px;
}
</style>