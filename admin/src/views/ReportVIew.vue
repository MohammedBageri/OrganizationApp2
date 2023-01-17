<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row v-if="valid">
          <!-- :data="$store.state.organization.organization" -->
          <div class="page" v-for="(page, index) in pages" :key="index">
            <Page1 v-if="index == 0" />
            <Page2 v-if="index == 1" />
            <Page3 v-if="index == 2" />
            <Page4 v-if="index == 3" />
            <Page5 v-if="index == 4" />
            <Page6 v-if="index == 5" />
            <Page7 v-if="index == 6" />
            <Page8 v-if="index == 7" />
            <Page9 v-if="index == 8" />
            <Page10 v-if="index == 9" />
            <Page11 v-if="index == 10" />
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ReportHeader from "../components/Reports/ReportHeader.vue";
import Page1 from "../components/RrportPages/page1.vue";
import Page2 from "../components/RrportPages/page2.vue";
import Page3 from "../components/RrportPages/page3.vue";
import Page4 from "../components/RrportPages/page4.vue";
import Page5 from "../components/RrportPages/page5.vue";
import Page6 from "../components/RrportPages/page6.vue";
import Page7 from "../components/RrportPages/page7.vue";
import Page8 from "../components/RrportPages/page8.vue";
import Page9 from "../components/RrportPages/page9.vue";
import Page10 from "../components/RrportPages/page10.vue";
import Page11 from "../components/RrportPages/page11.vue";
export default {
  data: () => ({
    valid:false,
    pages: 11,
  }),
  components: {
    ReportHeader,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
  },
  async mounted(){
    let id = this.$route.query.id
    console.log(id,'ss')
    await this.$store.dispatch('organization/getOrganization', id)
    this.valid = true
    // this.$router.currentRoute.go();
  }
  
};
</script>

<style scoped>
.row {
  justify-content: center;
}

.page {
  height: 1040px;
  width: 794px;
  border: 2px solid;
  padding: 30px;
  size: 7in 9.25in;
  font-size: 16px;
  margin-bottom: 6px;
}
</style>