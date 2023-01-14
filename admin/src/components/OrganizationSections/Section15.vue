<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
          <div class="mb-3 text-sm">المصروفات</div>
          <v-divider />
        </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="nameExpenditure"
          outlined
          dense
          hide-details
          label="المصروفات"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          outlined
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          dense
          hide-details
          label="مدين"
          reverse
          disabled
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="credit"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="دائن"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <!-- <div>title</div> -->
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="note"
          outlined
          dense
          label="ملاحظات"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add">
      إضافة
    </v-btn>

    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" mobile-breakpoint="0">
        <v-data-table
          :items="$store.state.organization.organization.expenditure"
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
    expenses: [],
    headers: [
      { text: "المصروفات", value: "nameExpenditure" },
      { text: "دائن", value: "credit" },
      { text: "ملاحظة", value: "note" },

      { text: "تعديل", value: "actions", sortable: false },
    ],

    _id: "",
    nameExpenditure: "",
    credit: "",
    note: "",
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.expenditure.indexOf(item);

      // (this._id = item._id),
      this._id= `${this.editedIndex}`,
        (this.nameExpenditure = item.nameExpenditure),
        (this.credit = item.credit),
        (this.note = item.note);
    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.$store.state.organization.organization.expenditure.push({
          nameExpenditure: this.nameExpenditure,
          credit: this.credit,
          note: this.note,
        });
      } else {
        Object.assign(
          this.$store.state.organization.organization.expenditure[
            this.editedIndex
          ],
          {
            nameExpenditure: this.nameExpenditure,
            credit: this.credit,
            note: this.note,
          }
        );
      }

      this._id = "";
      (this.nameExpenditure = ""), (this.credit = ""), (this.note = "");
    },
  },
};
</script>
  
  <style scoped>
</style>