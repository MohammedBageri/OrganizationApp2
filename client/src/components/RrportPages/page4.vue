<template>
  <div dir="rtl">
    <br />
    <v-row>
      <v-col cols="12" class="text-right"> 3- بيانات لجنة المراقبة</v-col>
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">الاسم رباعياً</th>
        <th style="width: 10%">تاريخ الميلاد</th>
        <th style="width: 10%">مكان الميلاد</th>
        <th style="width: 10%">مكان الإقامة الحالي</th>
        <th style="width: 10%">الصفة في المؤسسة</th>
        <th style="width: 20%">رقم الجوال</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.oversightCommitte"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.dateOfBirth }}</td>
        <td>{{ item.placeOfBirth }}</td>
        <td>{{ item.currentPlace }}</td>
        <td>{{ item.qualification }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </table>
    <br />
    <v-row>
      <v-col cols="12" class="text-right"> 4-   إحصائية العاملين بالمؤسسة (الموظفين/المتعاقدين/المتطوعين)</v-col>
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 10%">الإسم</th>
        <th style="width: 20%">العدد</th>
        <th style="width: 10%">ذكور</th>
        <th style="width: 10%">إناث</th>
        <th style="width: 10%">ملاحظات</th>
      </tr>
      <tr >
        <td style="width: 20%">الموظفين</td>
        <td style="width: 20%">{{ this.$store.state.organization.organization.employeeStats.numberStaff }}</td>
        <td>{{$store.state.organization.organization.employeeStats.maleStaff}}</td>
        <td>{{$store.state.organization.organization.employeeStats.femaleStaff}}</td>
        <td>{{$store.state.organization.organization.employeeStats.noteStaff}}</td>
      </tr>
      <tr >
        <td style="width: 20%">المتعاقدين</td>
        <td style="width: 20%">{{ this.$store.state.organization.organization.employeeStats.numberContractors }}</td>
        <td>{{$store.state.organization.organization.employeeStats.maleContractors}}</td>
        <td>{{$store.state.organization.organization.employeeStats.femaleContractors}}</td>
        <td>{{$store.state.organization.organization.employeeStats.noteContractors}}</td>
      </tr>
      <tr >
        <td style="width: 20%">المتطوعين</td>
        <td style="width: 20%">{{ this.$store.state.organization.organization.employeeStats.numberVolunteers }}</td>
        <td>{{$store.state.organization.organization.employeeStats.maleVolunteers}}</td>
        <td>{{$store.state.organization.organization.employeeStats.femaleVolunteers}}</td>
        <td>{{$store.state.organization.organization.employeeStats.noteVolunteers}}</td>
      </tr>
      <tr >
        <td style="width: 20%">اخرى</td>
        <td style="width: 20%">{{ this.$store.state.organization.organization.employeeStats.numberOthers }}</td>
        <td>{{$store.state.organization.organization.employeeStats.maleOthers}}</td>
        <td>{{$store.state.organization.organization.employeeStats.femaleOthers}}</td>
        <td>{{$store.state.organization.organization.employeeStats.noteOthers}}</td>
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