<template>
  <v-container>
    <v-form ref="section2">
    <v-row dense>
      
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox v-model="$store.state.organization.organization.mainCenter.state" :rules="textRules" class="text-right selection rounded-bl-xl rounded-tl-xl rounded-tr-xl" item-text="name" item-value="_id" outlined dense :items="$store.state.states" label="المحافظة" reverse ></v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox class="text-right rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.mainCenter.city" :rules="textRules" item-text="name" item-value="_id" outlined dense :items="$store.state.cities" label="المديرية" reverse ></v-combobox>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field outlined class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.mainCenter.street" :rules="textRules" dense label="الشارع" reverse></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- <div>title</div> -->
        <v-divider />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-text-field outlined class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" v-model="$store.state.organization.organization.mainCenter.buildingType" :rules="textRules" dense label="نوع المبنى" reverse></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-combobox class="rounded-bl-xl rounded-tl-xl rounded-tr-xl" outlined dense v-model="$store.state.organization.organization.mainCenter.ownOrRent" :rules="textRules" :items="ownOrRent" label="مبنى المقر: ملك/إيجار" reverse></v-combobox>
      </v-col>
    </v-row>
  </v-form>
  </v-container>
</template>

<script>
export default {
  data: ()=> ({
    ownOrRent:['إيجار','ملك'],
    textRules:[
      v => !!v || 'الحقل مطلوب'  
    ],
    
  }),
  async created(){
    await this.$store.dispatch("getStates");
    await this.$store.dispatch("getCities");
  },
  mounted(){
    this.$store.state.sectionFormTow =  this.$refs.section2;
  }
}
</script>