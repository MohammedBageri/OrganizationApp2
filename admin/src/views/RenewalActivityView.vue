<template>
  <AppLayout>
    <v-container class="mt-20" style="height: 100%">
      <v-row style="height: 100%">
        <v-card
          style="z-index: 1"
          class="mt-20 mx-5 rounded-br-xl rounded-tl-xl"
          width="900px"
          dir="ltr"
          transition="scroll-x-transition"
        >
          <v-card-title class="grey lighten-3 justify-center">
            <div>تأكيد دفع المنظمة للبلغ المالي</div>
          </v-card-title>
          <v-card-text class="mt-2">
            <v-container>
              <v-row>
                <v-col cols="4"> </v-col>
                <v-col cols="4">
                  <v-combobox
                    v-model="$store.state.organization.organization"
                    class="text-right rounded-tr-xl rounded-br-xl rounded-tl-xl"
                    color="#14425a"
                    outlined
                    dense
                    :items="$store.state.organization.organizations"
                    item-text="nameAr"
                    item-value="_id"
                    label="أختر المنظمة"
                    reverse
                  ></v-combobox>
                </v-col>
              </v-row>
              <v-row justify="center" align="center">
                <v-col cols="4" dir="rtl">
                  <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    class="rounded-l-xl rounded-br-0 rounded-tr-xl"
                    color="#14425a"
                    prepend-icon="mdi-camera"
                    label="سند الإداع"
                    outlined
                    dense
                    reverse
                    
                  ></v-file-input>
                </v-col>
              </v-row>

              <v-card-actions class="text-center mb-10">
                <div style="width: 100%" dir="rtl">
                  <v-btn
                    color="green"
                    class="rounded-br-xl rounded-tl-xl white--text"
                    @click="active"
                  >
                    تم الدفع
                    <v-icon class="mr-2">mdi-credit-card-refresh</v-icon>
                  </v-btn>
                </div>
              </v-card-actions>
            </v-container>
          </v-card-text>
          <v-divider />
          <v-row justify="center" align="center"> </v-row>
        </v-card>
      </v-row>
    </v-container>
  </AppLayout>
</template>

<script>
import AppLayout from "../layouts/AppLayout.vue";
import _ from "lodash";
export default {
  components: {
    AppLayout,
  },
  async created() {
    await this.$store.dispatch("organization/getOrganizations");
    this.$store.state.organization.organizations = _.filter(
      this.$store.state.organization.organizations,
      (value, key) => {
        return value.isActive == "غير مرخصة";
      }
    );
  },
  methods: {
    async active() {
      await this.$store.dispatch("organization/activeOrgnaization", {
        id: this.$store.state.organization.organization._id,
      });
    },
  },
};
</script>