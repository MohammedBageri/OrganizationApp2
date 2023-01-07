<template>
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n4">
        <v-spacer></v-spacer>
        <v-btn color="#14425a" dark class="rounded-br-xl rounded-tl-xl"> إضافة منظمة </v-btn>
      </v-toolbar>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n5">
        <v-toolbar-title>الرئيسية</v-toolbar-title>
        <v-btn color="#49D9A0" text class="ml-5"> last sprint </v-btn>
      </v-toolbar>
      <v-divider inset></v-divider>
      <br>
    
      <v-item-group mandatory class="mt-n4">
        <v-container>
          <v-row justify="center" class="space">
            <v-col cols="12" md="2">
              
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#14425a' : 'white'"
                  class="d-flex align-center rounded-xl text-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    
                    <v-col cols="12" sm="12">
                      
                      <v-list-item three-line class="mt-10" >
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#14425a'"
                              >mdi-office-building</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >عدد المنظمات</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>50</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#14425a' : 'white'"
                  class="d-flex align-center rounded-xl text-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : 'green'"
                              >mdi-check-circle</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >عدد المنظمات المرخصه</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>30</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#14425a' : 'white'"
                  class="d-flex align-center rounded-xl text-center"
                  dark
                  height="200"
                  @click="toggle"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : 'red'"
                              >mdi-minus-circle</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >عدد المنظمات الغر مرخصه</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>20</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#14425a' : 'white'"
                  class="d-flex align-center rounded-xl text-center"
                  dark
                  height="200"
                  @click="toggle" >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="mt-10">
                        <v-list-item-content>
                          <div class="mb-4">
                            <v-icon
                              x-large
                              :color="active ? 'white' : '#14425a'"
                              >mdi-account-circle
                            </v-icon>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'white--text' : 'black--text'"
                            >المستخدمين</v-list-item-subtitle
                          >
                          <v-list-item-title
                            class="headline mb-1"
                            :class="active ? 'white--text' : 'black--text'"
                          >
                            <strong>10</strong>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <v-row class="mt-n6">

        <v-col cols="12" sm="7">
          <v-chart class="chart mt-2" :option="option" />
        </v-col>

        <v-col cols="12" md="5" sm="12">
          <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n2">
            <v-toolbar-title> <small>المنظمات التي تم اضافتها حديثاً</small> </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="#14425a" small class="rounded-tl-xl rounded-br-xl white--text" @click="goOrganization"> مشاهدة الكل </v-btn>
          </v-toolbar>
          <!-- Table -->
          <v-simple-table class="grey lighten-3 text-center" dir="rtl">
            <template v-slot:default>
              <thead class="text-center">
                <tr class="text-center">
                  <th>إسم المنظمة</th>
                  <th>المحافظة</th>
                  <th>مرخصة/غير مرخصه</th>
                  <th>رقم الهاتف</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in orders" :key="item.name">
                  <td>{{ item.id }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ item.count }}</td>
                  <td>
                    <v-icon small>{{ item.icon }}</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-toolbar color="rgba(0,0,0,0)" flat class="mt-n8">
        <v-toolbar-title>المستخدمين</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="#14425a" small class="rounded-tl-xl rounded-br-xl white--text" @click="goUsers"> إضافة مستخدم جديد </v-btn>
      </v-toolbar>
      <v-card class="rounded-lg">
        <v-row>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>سالم احمد</v-list-item-title>

                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title>وليد</v-list-item-title>

                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src=""
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>

                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" sm="3">
            <v-list subheader two-line>
              <v-list-item>
                <v-badge
                  bordered
                  bottom
                  color="#49D9A0"
                  dot
                  offset-x="28"
                  offset-y="22"
                >
                  <v-list-item-avatar>
                    <v-avatar size="40">
                      <v-img
                        src=""
                      ></v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                </v-badge>
                <v-list-item-content>
                  <v-list-item-title></v-list-item-title>

                  <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Home",
  data: () => ({
    toggle_exclusive: 1,
    orders: [
      {
        
      },
      {
        
      },
      {
        
      },
      {
        
      },
    ],

    option: {
      title: {
        text: "",
        left: "left",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },

      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          radius: "55%",
          center: ["45%", "50%"],
          data: [
            { value: 335, name: "حضرموت" },
            { value: 310, name: "المهرة" },
            { value: 234, name: "شبوة" },
            { value: 135, name: "الضالع" },
            { value: 1548, name: "عدن" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0)",
            },
          },
        },
      ],
    },
  }),
  methods:{
    goUsers(){
      this.$router.push("/Users")
    },
    goOrganization(){
      this.$router.push("/organizations")
    }

    },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "green",
  },
  async created(){
    await this.$store.dispatch('organization/getOrganizations')
  }
};
</script>
<style>
.space {
  margin-left: -100px;
  margin-right: -100px;
}
</style>
