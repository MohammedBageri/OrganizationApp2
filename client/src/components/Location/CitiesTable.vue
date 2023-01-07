<template>
  <v-data-table
    :headers="headers"
    :items="$store.state.cities"
    sort-by="calories"
    class="elevation-1 rounded-br-xl rounded-tl-xl"
  >
    <template v-slot:top>
      <v-toolbar flat class="rounded-br-xl rounded-tl-xl">
        <v-toolbar-title>
          <v-row>
            <v-col cols="3">
              <h5 class="mt-10">المديرية</h5>
            </v-col>
            <v-col cols="6">
              <v-card
                height="80"
                width="80"
                elevation="2"
                class="mr-6 mb-10 mt-2 rounded-l text-center hidden-md-and-down"
              >
                <v-icon large class="mt-5" color="#14425a"
                  >mdi-map-marker-radius</v-icon
                >
              </v-card>
            </v-col>
          </v-row>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-dialog
          v-model="$store.state.cityDialog"
          max-width="500px"
          transition="dialog-top-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="background"
              dark
              class="mb-2 rounded-br-xl rounded-tl-xl"
              v-bind="attrs"
              v-on="on"
            >
              إضافة مديرية
              <v-icon class="mr-2">mdi-map-marker-plus</v-icon>
            </v-btn>
          </template>
          <v-card class="rounded-br-xl rounded-tl-xl">
            <v-card-title dir="rtl">
              <div>
                <h5>{{ formTitle }}</h5>
              </div>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- :key="$store.state.state._id" -->
                  <v-col cols="12">
                    <v-combobox
                      v-model="$store.state.city.state"
                      label="اسم المحافظة"
                      required
                      class="rounded-tl-xl rounded-tr-xl rounded-br-xl"
                      reverse
                      outlined
                      :items="$store.state.states"
                      item-text="name"
                      item-value="_id"
                      dense
                    ></v-combobox>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="$store.state.city.name"
                      label="اسم المديرية"
                      class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                      outlined
                      required
                      reverse
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                class="white--text"
                rounded
                @click="close"
                dir="rtl"
              >
                إغلاق
                <v-icon class="mr-2">mdi-close-circle-outline</v-icon>
              </v-btn>
              <v-btn
                color="green darken-1"
                class="mr-2 white--text"
                rounded
                @click="save"
                dir="rtl"
              >
                حفظ
                <v-icon class="mr-2">mdi-check-circle-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >هل انت متاكد من حذف المديرية؟</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >أغلاق</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >موافق</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-snackbar v-model="snackbarSucess" shaped top color="green">
        <v-icon>mdi-map-marker-radius</v-icon>
        تمت إضافة المديرية بنجاح

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarSucess = false"
          >
            موافق
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="snackbarEdit" shaped top color="green">
        <v-icon>mdi-feather</v-icon>
        تم تعديل معلومات المديرية بنجاح

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarEdit = false"
          >
            موافق
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar v-model="snackbardelete" shaped top color="red">
        <v-icon>mdi-map-marker-remove-variant</v-icon>
        تم حذف المديرية

        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbardelete = false"
          >
            موافق
          </v-btn>
        </template>
      </v-snackbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    snackbarSucess: false,
    snackbarEdit: false,
    snackbardelete: false,
    dialog: false,
    dialogDelete: false,

    headers: [
      {
        text: "مديرية",
        align: "start",
        sortable: false,
        value: "name",
      },

      { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    cities: [],
    editedIndex: -1,

    defaultItem: {
      name: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "إضافة مديرية" : "تعديل مديرية";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    snackbarSucess: function (newSnackbarSucess, oldSnackbarSucess) {
      if (oldSnackbarSucess && !newSnackbarSucess) {
        this.$router.go();
      }
    },
  },

  async created() {
    await this.$store.dispatch("getCities");
  },

  methods: {
    initialize() {
      this.cities = [];
    },

    editItem(item) {
      this.editedIndex = this.$store.state.cities.indexOf(item);
      this.$store.state.city = Object.assign({}, item);

      this.$store.state.cityDialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.$store.state.cities.indexOf(item);
      this.$store.state.city = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      let id = this.$store.state.city._id;
      let result = await this.$store.dispatch("DeleteCity", { id });
      if (result) {
        this.$store.state.cities.splice(this.editedIndex, 1);
        this.closeDelete();
      } else {
        console.log("error");
      }
      this.snackbardelete = true;
    },

    close() {
      this.$store.state.cityDialog = false;
      this.$nextTick(() => {
        this.$store.state.city = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.$store.state.city = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        let name = this.$store.state.city.name;
        let state = this.$store.state.city.state._id;
        let id = this.$store.state.city._id;
        this.$store.dispatch("UpdateCity", { name, id, state });
        Object.assign(
          this.$store.state.cities[this.editedIndex],
          this.$store.state.city
        );
        this.snackbarEdit = true;
      } else {
        //Create city
        let name = this.$store.state.city.name;
        let state = this.$store.state.city.state._id;
        await this.$store.dispatch("CreateCity", { name, state });
        //get cities
        await this.$store.dispatch("getCities");
        this.snackbarSucess = true;
      }
      this.close();
    },
  },
};
</script>
