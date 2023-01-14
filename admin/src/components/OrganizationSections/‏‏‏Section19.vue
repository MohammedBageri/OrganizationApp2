<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3 text-sm">المخاطر و التحديات</div>
        <v-divider />
      </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="Risk"
          outlined
          dense
          hide-details
          label="المخاطر"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-file-input
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          show-size
          label="المرفقات"
          reverse
          outlined
          dense
        ></v-file-input>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add">
      إضافة
    </v-btn>

    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
        <v-data-table
          :items="$store.state.organization.organization.risks"
          :headers="headers"
          :hide-default-footer="true"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  
  <script>
export default {
  data: () => ({
    risks: [],
    headers: [
      { text: "الخاطر و التحديات", value: "Risk" },
      { text: "تعديل", value: "actions", sortable: false },
    ],

    Risk: "",
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.risks.indexOf(item);

        this._id= `${this.editedIndex}`,
       (this.Risk = item.Risk);
    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.$store.state.organization.organization.risks.push({
          Risk: this.Risk,
        });
      } else {
        Object.assign(
          this.$store.state.organization.organization.risks[this.editedIndex],
          {
            Risk: this.Risk,
          }
        );
      }

      this.Risk = "";
    },
  },
};
</script>
  
  <style scoped>
</style>