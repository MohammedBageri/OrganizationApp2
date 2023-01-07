<template>
    <v-layout row justify-center class="dialog">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card class="text-center">
          <v-card-title class="headline text-center">تنبية!!</v-card-title>
          <v-card-text>لابد من تعبئة البيانات الازمة في الصفحة الاولى و الثانية لإتمام عملية الإضافة</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="close">إغلاق</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </template>
  
  <script>
  
    export default {
      props: {
          dialog: {
          default: false
        }
      },
      methods: {
          close() {
          this.$emit('update:dialog', false)
        }
      }
    }
  
  </script>