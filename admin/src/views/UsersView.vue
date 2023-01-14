<template>
  <AppLayout>
    <v-container class="mt-20" style="height: 100%">
      <v-row style="height: 100%">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-20 mx-5 rounded-tl-xl rounded-br-xl"
          width="900px"
          dir="ltr"
          transition="scroll-x-transition"
        >
          <div dir="rtl">
            <v-data-table
              :headers="headers"
              :items="$store.state.user.users"
              sort-by="calories"
              class="elevation-6 rounded-tl-xl rounded-br-xl"
            >
              <template v-slot:top>
                <v-toolbar
                  flat
                  class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                >
                  <v-toolbar-title>
                    <v-row>
                      <v-col cols="3" sm="3" md="3" lg="3">
                        <h5 class="mt-10">جميع المستخدمين</h5>
                      </v-col>
                      <v-col cols="6">
                        <v-card
                          height="80"
                          width="80"
                          elevation="2"
                          class="
                            mr-16
                            mb-10
                            rounded-l
                            text-center
                            hidden-md-and-down
                          "
                        >
                          <v-icon large class="mt-5" color="#14425a"
                            >mdi-account-group</v-icon
                          >
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-toolbar-title>
                  <v-spacer></v-spacer>

                  <!-- انشاء حساب -->

                  <v-dialog
                    v-model="dialog"
                    class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                    max-width="600px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="background"
                        class="rounded-br-xl rounded-tl-xl"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        إنشاء حساب
                        <v-icon class="mr-2">mdi-account-plus</v-icon>
                      </v-btn>
                    </template>
                    <!-- معلومات الحساب -->
                    <v-card
                      dir="rtl"
                      class="rounded-bl-xl rounded-tl-xl rounded-br-xl"
                    >
                      <v-card-title>
                        <h5>إنشاء مستخدم</h5>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-form class="px-3" ref="form">
                            <v-row dense>
                              <v-col cols="12" sm="6" md="4" dir="rtl">
                                <v-text-field
                                  v-model="$store.state.user.user.name"
                                  label="الاسم"
                                  :rules="textRules"
                                  required
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  color="indigo darken-4"
                                  outlined
                                  reverse
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="$store.state.user.user.username"
                                  label="اسم المستخدم"
                                  color="indigo darken-4"
                                  :rules="textRules"
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  outlined
                                  reverse
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                  v-model="$store.state.user.user.phone"
                                  label="رقم الهاتف"
                                  persistent-hint
                                  color="indigo darken-4"
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  :rules="phoneRule"
                                  required
                                  outlined
                                  reverse
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="$store.state.user.user.email"
                                  label="الإيميل"
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  color="indigo darken-4"
                                  required
                                  :rules="emailRules"
                                  reverse
                                  outlined
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="$store.state.user.user.password"
                                  label="كلمة المرور"
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  type="password"
                                  color="indigo darken-4"
                                  required
                                  :rules="passwordRules"
                                  outlined
                                  reverse
                                  dense
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  v-model="
                                    $store.state.user.user.conformPassword
                                  "
                                  label="تأكيد كلمة المرور"
                                  class="
                                    rounded-bl-xl rounded-tl-xl rounded-tr-xl
                                  "
                                  :rules="passwordRules"
                                  type="password"
                                  color="indigo darken-4"
                                  required
                                  outlined
                                  reverse
                                  dense
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-container>
                        <h4 class="fontColor">الإقليم</h4>
                        <v-row
                          >ْ
                          <v-col cols="12">
                            <v-autocomplete
                              v-model="
                                $store.state.user.user.mapArea
                              "
                              class="
                                text-right
                                selection
                                rounded-bl-xl rounded-tl-xl rounded-tr-xl
                              "
                              item-text="name"
                              item-value="_id"
                              outlined
                              :rules="textRules"
                              dense
                              :items="$store.state.mapAreas"
                              label="النطاق الجغرافي"
                              reverse
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                        <h4 class="fontColor">وظائف الحسابات</h4>
                        <v-row>
                          <v-col cols="12">
                            <v-autocomplete
                              v-model="role"
                              :items="items"
                              @change="oprUser"
                              item-text="key"
                              item-value="value"
                              class="
                                text-right
                                rounded-bl-xl rounded-tl-xl rounded-tr-xl
                              "
                              outlined
                              label="الوظائف"
                              chips
                              dense
                              reverse
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                        <h4 class="fontColor">صلاحيات الحساب</h4>
                        <v-row>
                          <v-col cols="12">
                            <v-autocomplete
                              v-model="role"
                              :items="items1"
                              multiple
                              @change="perUser"
                              item-text="key"
                              item-value="value"
                              class="
                                text-right
                                rounded-bl-xl rounded-tl-xl rounded-tr-xl
                              "
                              outlined
                              label="الصلاحيات"
                              chips
                              dense
                              reverse
                            ></v-autocomplete>
                          </v-col>
                        </v-row>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="green darken-1"
                          class="white--text"
                          rounded
                          @click="save"
                        >
                          حفظ
                          <v-icon class="mr-2">mdi-check-circle-outline</v-icon>
                        </v-btn>

                        <v-btn
                          color="red darken-1 white--text"
                          class="mr-2"
                          rounded
                          @click="close"
                        >
                          إغلاق
                          <v-icon class="mr-2">mdi-close-circle-outline</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5" dir="rtl"
                        ><h5>هل انت متأكد من حذف الحساب؟</h5>
                      </v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >إغلاق</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >موافق</v-btn
                        >

                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <!-- <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon> -->
              </template>
            </v-data-table>
            <v-snackbar v-model="snackbarSucess" shaped top color="green">
              <v-icon>mdi-account-check</v-icon>
              تمت إضافة حساب جديد

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
              <v-icon>mdi-account-convert</v-icon>
              تم تعديل معلومات الحساب بنجاح

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
          </div>
        </v-card>
      </v-row>
    </v-container>
  </AppLayout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";

export default {
  components: {
    AppLayout,
  },
  data: () => ({
    dialog: false,
    snackbarSucess: false,
    snackbarEdit: false,
    dialogDelete: false,
    items: [
      { key: "المختص", value: "admin" },
      { key: "مراجع المختص", value: "manager" },
      { key: "المسؤول المالي", value: "admin_2" },
      { key: "معمد الطلبات", value: "admin_3" },
    ],
    items1: [
      { key: "انشاء منظمة", value: "create" },
      { key: "تعديل منظمة", value: "update" },
      { key: "حذف منظمة", value: "delete" },
    ],
    textRules: [(v) => !!v || "الحقل مطلوب"],
    phoneRule: [
      (v) => !!v || "يرجى كتابة رقم الهاتف",
      // v => v.length >= 9 || "لابد ان لا يقل رقم الهاتف عن 9 ارقام",
    ],
    emailRules: [
      (v) => !!v || "يرجى كتابة الإيميل",
      (v) => /.+@.+/.test(v) || "يرجى كتابة الإيميل بالطريقة الصحيحة",
    ],
    passwordRules: [
      (v) => !!v || "يرحى تعبئة حقل كلمة المرور",
      // v => v.length >= 6 || "كلمة المرور اقل من 6 احرف او ارقام",
    ],

    headers: [
      {
        text: "اسم المستخدم",
        align: "start",
        sortable: false,
        value: "username",
      },
      {
        text: "الهاتف",
        value: "phone",
      },
      { text: "تعديل/حذف", value: "actions", sortable: false },
    ],
    role:null,
    accounts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      username: "",
      phone: "",
      password: "",
    },
    defaultItem: {
      name: "",
      username: "",
      phone: "",
      password: "",
      conformPassword: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    await this.$store.dispatch("user/getUsers");
    await this.$store.dispatch("getMapAreas");
  },

  methods: {
    initialize() {},

    editItem(item) {
      this.editedIndex = this.$store.state.user.users.indexOf(item);
      this.$store.state.user.user = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.$store.state.user.users.indexOf(item);
      this.$store.state.user.user = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      let id = this.$store.state.user.user._id;
      let result = await this.$store.dispatch("user/deleteUser", { id });
      if (result) {
        this.$store.state.user.users.splice(this.editedIndex, 1);
        this.closeDelete();
      } else {
        alert("Error");
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.$store.state.user.user = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.$store.state.user.user = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1 && this.$refs.form.validate()) {
        const user = this.$store.state.user.user;
        for(var i in this.role){
          this.$store.state.user.user.role.push(this.role[i])
        }
        console.log(user)
        await this.$store.dispatch("user/updateUser", {
          id: user._id,
          state: user,
        });
        Object.assign(
          this.$store.state.user.users[this.editedIndex],
          this.$store.state.user.user
        );
        this.close();
        this.snackbarEdit = true;
      } else if (this.$refs.form.validate()) {
        for(var i in this.role){
          this.$store.state.user.user.role.push(this.role[i])
        }
        console.log(this.$store.state.user.user.role)
        const user = await this.$store.dispatch(
          "user/createUser",
          this.$store.state.user.user
        );
        this.$store.state.user.users.push(this.$store.state.user.user);
        this.close();
        this.snackbarSucess = true;

        // console.log(this.$store.state.user.user);
      }
      // this.$store.state.user.user.email = "";
      // this.$store.state.user.user.name = "";
      // this.$store.state.user.user.username = "";
      // this.$store.state.user.user.phone = "";
      // this.$store.state.user.user.address = "";
      // this.$store.state.user.user.password = "";
    },
    oprUser(){
      this.$store.state.user.user.role = [this.role]
      this.role = null
    },
    perUser(){
        // this.$store.state.user.user.role.push(this.role[this.role.length - 1])
        // console.log(this.$store.state.user.user.role)
        // console.log(this.role.length - 1)
    }
  }
};
</script>

<style scoped>
.fontColor {
  color: #14425a;
}
</style>