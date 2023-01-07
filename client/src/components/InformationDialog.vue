<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
      >
        <v-card>
          <v-card-title class="text-h5">
            الحقول المهمة التي يجب ادخالها
          </v-card-title>
          <v-img src="../../public/imp1.png"></v-img>
          <v-card-text>لابد من تعبئة الحقل الاول كاملاً</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              غير موافق
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              موافق
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
  export default {
    data: () => {
        dialog: true
    }
  }
  </script>