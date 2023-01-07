<template>
    <v-data-table
      :headers="headers"
      :items="$store.state.mapAreas"
      sort-by="calories"
      class="elevation-1 rounded-br-xl rounded-tl-xl"
    >
      <template v-slot:top>
        <v-toolbar flat class="rounded-br-xl rounded-tl-xl">
          <v-toolbar-title>
            <v-row>
              <v-col cols="3">
                <h5 class="mt-10">الموقع الجغرافي</h5>
              </v-col>
              <v-col cols="6">
                <v-card
                  height="80"
                  width="80"
                  elevation="2"
                  class="mr-14 mb-10 rounded-l text-center hidden-md-and-down"
                >
                  <v-icon large class="mt-5" color="#14425a">mdi-google-maps</v-icon>
                </v-card>
              </v-col>
            </v-row>
          </v-toolbar-title>
  
          <v-spacer></v-spacer>
          <v-dialog
            v-model="$store.state.localAreaDialog"
            transition="dialog-top-transition"
            class="rounded-br-xl rounded-tl-xl"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="background"
                dark
                class="mb-2 rounded-br-xl rounded-tl-xl"
                v-bind="attrs"
                v-on="on"
              >
                إضافة موقع جغرافي
                <v-icon class="mr-2">mdi-map-plus</v-icon>
              </v-btn>
            </template>
            <v-card dir="rtl" class="rounded-br-xl rounded-tl-xl">
              <v-card-title>
                <h5>{{ localTitle }}</h5>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="$store.state.mapArea.name"
                        label="الموقع الجغرافي"
                        outlined
                        class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                        color="indigo darken-4"
                        required
                        reverse
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-btn
                  color="green darken-1 "
                  class="mr-2 white--text"
                  rounded
                  @click="save"
                  dir="rtl"
                >
                  حفظ
                  <v-icon class="mr-2">mdi-check-circle-outline</v-icon>
                </v-btn>
  
                <v-btn
                  color="red darken-1 "
                  class="mr-2 white--text"
                  rounded
                  @click="close"
                  dir="rtl"
                >
                  إغلاق
                  <v-icon class="mr-2">mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >هل انت متاكل من حذف الموقع الجغرافي الحالي</v-card-title
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
          <v-icon>mdi-map-plus</v-icon>
          تمت الاضافة موقع جغرافي جديد
  
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
          تم تعديل معلومات الموقع الجغرافي بنجاح
  
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
          <v-icon>mdi-map-minus</v-icon>
          تم حذف الموقع الجغرافي
  
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
          text: "الموقع الجغرافي",
          align: "start",
          sortable: false,
          value: "name",
        },
  
        { text: "تعديل/حذف", value: "actions", sortable: false },
      ],
      mapAreas: [],
      editedIndex: -1,
  
      defaultItem: {
        name: "",
      },
    }),
  
    computed: {
      localTitle() {
        return this.editedIndex === -1 ? "إضافة موقع جغرافي جديد" : "تعديل الموقع الجغرافي";
      },
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      },
      dialogDelete(val) {
        val || this.closeDelete();
      },
    },
  
    async created() {
      // dispatch for call actions from store
      await this.$store.dispatch("getMapAreas");
    },
  
    methods: {
      initialize() {
        this.states = [];
      },
  
      editItem(item) {
        this.editedIndex = this.$store.state.states.indexOf(item);
        this.$store.state.state = Object.assign({}, item);
        this.$store.state.localAreaDialog = true;
      },
  
      deleteItem(item) {
        this.editedIndex = this.$store.state.states.indexOf(item);
        this.$store.state.state = Object.assign({}, item);
        this.dialogDelete = true;
      },
  
      async deleteItemConfirm() {
        let id = this.$store.state.state._id;
        let result = await this.$store.dispatch("deleteMapArea", { id });
        if (result) {
          this.$store.state.states.splice(this.editedIndex, 1);
          this.closeDelete();
          this.snackbardelete= true
        } else {
          console.log("error");
        }
      },
  
      close() {
        this.$store.state.localAreaDialog = false;
        this.$nextTick(() => {
          this.$store.state.state = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      closeDelete() {
        this.dialogDelete = false;
        this.$nextTick(() => {
          this.$store.state.state = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
  
      async save() {
        if (this.editedIndex > -1) {
          let name = this.$store.state.state.name;
          let id = this.$store.state.state._id;
          await this.$store.dispatch("updateMapArea", { name, id });
          Object.assign(
            this.$store.state.states[this.editedIndex],
            this.$store.state.state
          );
          this.snackbarEdit= true;
        } else {
          let name = this.$store.state.mapArea.name;
          await this.$store.dispatch("createMapArea", { name });
          this.$store.state.states.push(this.$store.state.state);
          setTimeout(this.$router.go(), 50000);
          this.snackbarSucess = true;
          
        }
        this.close();
      },
    },
  };
  </script>