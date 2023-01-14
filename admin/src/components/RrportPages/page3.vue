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
        <th style="width: 10%">رقم الجوال</th>
        <th style="width: 20%">معاينة</th>
      </tr>
      <tr v-for="item in $store.state.organization.organization.founder" :key="item._id">
        <td  style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateOfBirth }}</td>
        <td>{{ item.placeOfBirth }}</td>
        <td>{{ item.currentPlace }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.gualification }}</td>
        <td>{{ item.phone }}</td>
        <td><span @click="founderFile(item)"><a :href="founderChart" target="_blank">معاينة</a></span></td>
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
        <th style="width: 20%">المرفقات</th>

      </tr>
      <tr v-for="item in $store.state.organization.organization.boardOfTruste" :key="item._id">
        <td  style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateOfBirth }}</td>
        <td>{{ item.placeOfBirth }}</td>
        <td>{{ item.currentPlace }}</td>
        <td>{{ item.job }}</td>
        <td>{{ item.adjective }}</td>
        <td>{{ item.phone }}</td>
        <td><span @click="boardOfTrusteFile(item)"><a :href="boardOfTrusteChart" target="_blank">معاينة</a></span></td>
      </tr>
    </table>
    </div>
</template>

<script>
export default {
 data:() =>({
  founderChart: "",
  boardOfTrusteChart: ""

 }), 

//  async created (item){
//   this.founderChart =  await import.meta.env.VITE_API + "/" + item.substring(7)
//   console.log(this.founderChart);

//  }
methods:{
  founderFile(item){

    this.founderChart = import.meta.env.VITE_API + "/" + item.founderUpload.substring(7)
  },
  boardOfTrusteFile(item){
    this.boardOfTrusteChart = import.meta.env.VITE_API + "/" + item.BoardOfTrusteUpload.substring(7)
  }
}
}
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