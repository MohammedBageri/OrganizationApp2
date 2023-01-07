<template>
  <v-container class="rounded-lg">
    <v-row dense class="mb-5">
      <!-- <v-col cols="12">
        <div class="mb-3">المرافق والمراكز التابعة للمؤسسة</div>
        <v-divider />
      </v-col> -->
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="name"
          outlined
          dense
          hide-details
          label="اسم المرافق/المراكز"
          dir="rtl"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          v-model="activityType"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          hide-details
          label="نوع النشاط"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox
          v-model="state"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          :items="$store.state.states"
          item-value="_id"
          item-text="name"
          outlined
          dense
          hide-details
          label="المحافظة"
          reverse
        ></v-combobox>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <!-- <div>title</div> -->
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox
          v-model="city"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          :items="$store.state.cities"
          item-value="_id"
          item-text="name"
          outlined
          dense
          hide-details
          label="المديرية"
          reverse
        ></v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          type="date"
          v-model="dateCreated"
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          outlined
          dense
          label="تاريخ الإنشاء"
          reverse
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field
          class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          v-model="phone"
          outlined
          dense
          label="الهاتف"
          reverse
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn color="green darken-4" class="white--text" @click="add"> إضافة </v-btn>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :items="$store.state.organization.organization.facilitiesAndCenter"
          :headers="headers"
          :hide-default-footer="true"
        >
          <!-- <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template> -->
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import dayjs from 'dayjs'
export default {

  data: () => ({
    facilitiesAndCenter: [],
    headers: [
      { text: "الإسم", value: "name" },
      { text: "نوع النشاط", value: "activityType" },
      { text: "المحافظة", value: "state.name" },
      { text: "المديرية", value: "city.name" },
      { text: "تاريخ الإنشاء", value: "dateCreated" },
      { text: "الهاتف", value: "phone" },

      // { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    _id: "",
    name: "",
    activityType: "",
    state: "",
    city: "",
    dateCreated: "",
    phone: "",
  }),

  methods: {
    editItem(item) {
      this.editedIndex =
        this.$store.state.organization.organization.facilitiesAndCenter.indexOf(item);

      // (this._id = item._id),
      this._id= `${this.editedIndex}`,
      this.name = item.name;
      (this.activityType = item.activityType),
      (this.state = item.state),
      (this.city = item.city),
      (this.dateCreated = dayjs(item.dateCreated).format("YYYY-MM-DD")),
      (this.phone = item.phone);
    },
    add() {
      if (this._id == undefined || this._id == "") {
        this.$store.state.organization.organization.facilitiesAndCenter.push({
          name: this.name,
          activityType: this.activityType,
          state: this.state,
          city: this.city,
          dateCreated: this.dateCreated,
          phone: this.phone,
        });
      } else {
        Object.assign(
          this.$store.state.organization.organization.facilitiesAndCenter[this.editedIndex],
          {
            name: this.name,
            activityType: this.activityType,
            state: this.state,
            city: this.city,
            dateCreated: this.dateCreated,
            phone: this.phone,
          }
        );
      }
      this._id = ""
      this.name = ""
      (this.activityType = ""),
        (this.state = ""),
        (this.city = ""),
        (this.dateCreated = ""),
        (this.phone = "");
    },
  },
};
</script>

<style scoped>
</style>