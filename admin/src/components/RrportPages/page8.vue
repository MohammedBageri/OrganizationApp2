<template>
  <div dir="rtl">
    <br />
    <v-row>
      <v-col cols="12" class="text-right">
        سادساً المخاطر والتحديات التي واجهتها المؤسسة</v-col
      >
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">المخاطر</th>
      </tr>
      <tr
        v-for="item in $store.state.organization.organization.risks"
        :key="item._id"
      >
        <td style="width: 20%">{{ item.Risk }}</td>
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