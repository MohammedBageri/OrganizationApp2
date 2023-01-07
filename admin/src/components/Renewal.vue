<template>
    <v-container>
      <v-row>
        <v-col cols="4"> 
        </v-col>
        <v-col cols="4">
          <v-select class="text-right" outlined dense :items="items1" label="أختر المنظمة" reverse ></v-select>
        </v-col>
      </v-row>

      <v-divider />
     
    </v-container>
  </template>
  
  <script>
  export default {
    data: ()=> ({
      items1:['حضرموت','عدن','صنعاء'],
      items2:['المكلا','عدن']
    })
  }
  </script>