<template>
  <ControlPanelLayout>
    <v-container>
        <v-row style="height: 100%;">
        <v-card
          style="z-index: 1"
          rounded="lg"
          class="mt-16 mx-5 rounded-br-xl rounded-tl-xl"
          width="900px"
          dir="rtl"
          transition="scroll-x-transition"
        >
          <TimeLine :order="order" />
        </v-card>
      </v-row>
    </v-container>
  </ControlPanelLayout>
</template>

<script>
import ControlPanelLayout from "../../layouts/ControlPanelLayout.vue";
import TimeLine from "../../components/ControlPanel/TimeLine.vue"
export default {
  components: {
    ControlPanelLayout,
    TimeLine
  },
  data (){
    return {
      order: null
    }
  },
  async mounted () {
    console.log(this.$route)
    try {
         this.order = await this.$store.dispatch('order/getOrganizationByEmail')
      } catch (error) {
        console.log(error)  
      }
  }
};
</script>

<style scoped>
</style>