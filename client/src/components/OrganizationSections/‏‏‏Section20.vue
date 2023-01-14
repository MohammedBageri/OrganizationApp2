<template>
        <v-file-input
          v-model="$store.state.organization.OrganizationalChart"
          class="rounded-bl-xl rounded-tl-xl rounded-tr-xl"
          color="deep-blue accent-4"
          counter
          label="اختر ملف"
          type="file"
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          @change="uploadFile"
          outlined
          show-size
          dense
          reverse
        >
          <!-- <template v-slot:selection="{ index, text }">
        <v-chip
          v-if="index < 2"
          color="deep-purple accent-4"
          dark
          label
          small
        >
          {{ text }}
        </v-chip>
  
        <span
          v-else-if="index === 2"
          class="text-overline grey--text text--darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template> -->
        </v-file-input>

</template>
  
  
  <script>
export default {
  data: () => ({
    OrganizationalChart: [],
  }),
  methods: {
    uploadFile(){
      this.OrganizationalChart.push(event.target.files[0])
      console.log("www",event.target.files[0])
      this.$store.state.organization.organization.OrganizationalChart = this.OrganizationalChart
      console.log(this.OrganizationalChart[0]);
    }
  },
};
</script>
  
  <style scoped>
</style>