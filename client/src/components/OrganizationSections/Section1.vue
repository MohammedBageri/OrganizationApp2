<template>
  <v-container>
    <v-form ref="section1" lazy-validation>
      <v-row dense>
        <!-- <v-col cols="12">
        <div class="mb-3">البيانات الاساسية للمؤسسة</div>
        <v-divider />
      </v-col> -->
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-text-field
            class="text-sm rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.nameAr"
            outlined
            dense
            label="اسم المؤسسة باللغة العربية"
            dir="rtl"
            :rules="textRules"
            reverse
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.nameEn"
            :rules="textRules"
            outlined
            dense
            label="إسم المؤسسة باللغة الانجليزية"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-combobox
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.type"
            :rules="textRules"
            outlined
            dense
            :items="typeItems"
            label="نوعها"
            reverse
          ></v-combobox>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <v-divider />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.lastRenewalDate"
            type="date"
            :rules="textRules"
            outlined
            dense
            label="تاريخ التأسيس"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.fieldWork"
            :rules="textRules"
            outlined
            dense
            label="مجال عمل المؤسسة"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.email"
            type="emil"
            outlined
            dense
            :rules="textRules"
            label="البريد الإلكتروني"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.website"
            type="sit"
            outlined
            dense
            label="الموقع الإلكتروني إن وجد"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-combobox
            v-model="
              $store.state.organization.organization.localOrInternational
            "
            class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            outlined
            dense
            :items="items"
            :rules="textRules"
            label="محلية/دولية"
            reverse
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-combobox
            v-model="$store.state.organization.organization.mapArea"
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
          ></v-combobox>
        </v-col>
        <!-- <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.permitNumber"
            :rules="textRules"
            outlined
            dense
            label="رقم تصريح مزاولة النشاط"
            reverse
            dir="ltr"
          ></v-text-field>
        </v-col> -->
        <!-- <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.permitDate"
            type="date"
            :rules="textRules"
            outlined
            dense
            label="تاريخ إصدارة"
            reverse
          ></v-text-field>
        </v-col> -->
      </v-row>

      <!-- <v-row dense>
        <v-col cols="12">
          <v-divider />
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.fieldWork"
            :rules="textRules"
            outlined
            dense
            label="مجال عمل المؤسسة"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.email"
            type="emil"
            outlined
            dense
            :rules="textRules"
            label="البريد الإلكتروني"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.website"
            type="sit"
            outlined
            dense
            label="الموقع الإلكتروني إن وجد"
            reverse
          ></v-text-field>
        </v-col>
      </v-row> -->

      <v-row dense>
        <v-col cols="12">
          <!-- <div>title</div> -->
          <v-divider />
        </v-col>
        <!-- <v-col cols="12" sm="6" md="6" lg="4">
          <v-combobox
            v-model="
              $store.state.organization.organization.localOrInternational
            "
            class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            outlined
            dense
            :items="items"
            :rules="textRules"
            label="محلية/دولية"
            reverse
          ></v-combobox>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-combobox
            v-model="$store.state.organization.organization.mapArea"
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
          ></v-combobox>
        </v-col> -->
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-text-field
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            v-model="$store.state.organization.organization.phone"
            outlined
            dense
            :rules="textRules"
            label="هاتف المؤسسة"
            reverse
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-file-input
            v-model="$store.state.organization.logo"
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            type="file"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="اختر الشعار"
            prepend-icon="mdi-camera"
            label="شعار المنظمة"
            outlined
            :rules="imageRules"
            dense
            reverse
            required
            @change="uploadImage"
          >
          </v-file-input>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <Section20 />
        </v-col>
        
      </v-row>

      <v-row dense>
        <v-col cols="12">
          <!-- <div>title</div> -->
          <v-divider />
        </v-col>
        
        <!-- <v-col cols="12" sm="6" md="6" lg="4">
          <v-file-input
            v-model="$store.state.organization.logo"
            class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
            type="file"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="اختر الشعار"
            prepend-icon="mdi-camera"
            label="شعار المنظمة"
            outlined
            :rules="imageRules"
            dense
            reverse
            required
            @change="uploadImage"
          >
          </v-file-input>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <Section20 />
        </v-col> -->
      </v-row>

    </v-form>
  </v-container>
</template>


<script>
import Section20 from '../OrganizationSections/‏‏‏Section20.vue'
export default {
  components: {
    Section20
  },
  data: () => ({
    textRules: [(v) => !!v || "الحقل مطلوب"],
    logo:[],
    imageRules: [
      (v) => !v || v.size < 100000 || "الشعار لابد ان يكون اقل من 1 ميجا",
    ],
    items: ["محلية", "دولية"],
    typeItems: ["مؤسسة", "جمعية", "منظمة"],
    image: null,
  }),
  async mounted(){
    this.$store.state.sectionForm =  this.$refs.section1;
    try {
      await this.$store.dispatch("getMapAreas");
    } catch (error) {
      console.log(error)
    }
    console.log(this.$store.state.mapAreas)
    console.log(this.$store.state.organization.organization.mapArea)
  },
  methods: {
    uploadImage(){
      this.logo.push(event.target.files[0])
      console.log(event.target.files[0])
      this.$store.state.organization.organization.logo = this.logo
      console.log(this.logo);
    }
  },
};
</script>