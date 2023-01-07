<template>
    <div dir="rtl">
        <v-row>
      <v-col cols="12" class="text-right">
        2- الانشطة والمشاريع الممولة من أشخاص او جهات او منظمات عربية/اجنبيه
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
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.activitiesAndProjectsByOthersOrganization"
        :key="item._id" >
        <td style="width: 20%">{{ item.name }}</td>
        <td style="width: 20%">{{ item.fundingSourceAndNationality }}</td>
        <td>{{ item.numberBeneficiaries }}</td>
        <td>{{ item.executionPlace }}</td>
        <td>{{ item.executionTime }}</td>
        <td>{{ item.costProject }}</td>
      </tr>
    </table>
    <br>

    <v-row>
      <v-col cols="12" class="text-right">
        رابعاً البيانات المالية</v-col
      >
    </v-row>
    <v-row>
      <v-col cols="12" class="text-right">
        1- الحسابات البنكية
      </v-col>
    </v-row>

    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">اسم البنك</th>
        <th style="width: 10%">المركز الرئيسي</th>
        <th style="width: 10%">رقم الحساب</th>
        <th style="width: 10%">العملة</th>
        <th style="width: 10%">الرصيد البنكي</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.bankAccount"
        :key="item._id" >
        <td style="width: 20%">{{ item.bankName }}</td>
        <td style="width: 20%">{{ item.address }}</td>
        <td>{{ item.numberAccount }}</td>
        <td>{{ item.currency }}</td>
        <td>{{ item.balance }}</td>
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