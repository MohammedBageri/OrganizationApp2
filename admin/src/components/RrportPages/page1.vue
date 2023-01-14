<template>
  <div dir="rtl">
    <ReportHeader />
    <table class="tableReport">
      <tbody>
        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            اسم الموسسة بالعربي
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.nameAr }}
          </td>
        </tr>
        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            اسم الموسسة بالإنجليزي
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.nameEn }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            نوع المؤسسة
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.type }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            تاريخ التأسيس
          </th>
          <td style="width: 50%" v-text="lastRenew()"></td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            رقم تصريح مزاولة النشاط
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.permitNumber }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            تاريخ إصدارة
          </th>
          <td style="width: 50%" v-text="permit()"></td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            مجال عمل المؤسسة
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.fieldWork }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            البريد الإلكتروني
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.email }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            الموقع الإلكتروني
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.website }}
          </td>
        </tr>

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            منظمة محلية/دولية
          </th>
          <td style="width: 50%">
            {{
              this.$store.state.organization.organization.localOrInternational
            }}
          </td>
        </tr>

        <th
          style="width: 50%; background-color: cornflowerblue"
          class="tableRow"
        >
          الموقع الجغرافي
        </th>
        <td style="width: 50%">
          {{ this.$store.state.organization.organization.mapArea.name }}
        </td>

        <!-- <tr>
          <th style="width: 50%; background-color: cornflowerblue;" class="tableRow">المحافظة</th>
          <td style="width: 50%" >{{this.$store.state.organization.organization.mainCenter.state.name}}</td>
        </tr>

        <tr>
          <th style="width: 50%; background-color: cornflowerblue;" class="tableRow">المديرية</th>
          <td style="width: 50%" >{{this.$store.state.organization.organization.mainCenter.city.name}}</td>
        </tr> -->

        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            هاتف المؤسسة
          </th>
          <td style="width: 50%">
            {{ this.$store.state.organization.organization.phone }}
          </td>
        </tr>
        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            شعار المؤسسة
          </th>
          <td style="width: 50%">
            <span><a :href="showLogo" target="_blank">معاينةالصورة</a></span>
          </td>
        </tr>
        <tr>
          <th
            style="width: 50%; background-color: cornflowerblue"
            class="tableRow"
          >
            المرفقات
          </th>
          <td style="width: 50%">
            <span
              ><a :href="showOrganizationalChart" target="_blank"
                >معاينة المرفق</a
              ></span
            >
          </td>
        </tr>
      </tbody>

      <!-- =========================================================================================================== -->
    </table>
    <br />
    <v-row>
      <v-col cols="12" class="text-right"> 2- بيانات مقر المركز الرئيسي</v-col>
    </v-row>
    <table style="width: 100%">
      <tr style="background-color: cornflowerblue">
        <th style="width: 20%">المحافظة</th>
        <th style="width: 20%">الميرية</th>
        <th>الشارع</th>
        <th>نوع المبنى</th>
        <th>ملك/إجار</th>
      </tr>
      <tr>
        <td style="width: 20%">
          {{
            this.$store.state.organization.organization.mainCenter.state.name
          }}
        </td>
        <td style="width: 20%">
          {{ this.$store.state.organization.organization.mainCenter.city.name }}
        </td>
        <td>
          {{ this.$store.state.organization.organization.mainCenter.street }}
        </td>
        <td>
          {{
            this.$store.state.organization.organization.mainCenter.buildingType
          }}
        </td>
        <td>
          {{ this.$store.state.organization.organization.mainCenter.ownOrRent }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ReportHeader from "../../components/Reports/ReportHeader.vue";
import dayjs from "dayjs";
export default {
  // props: ["data"],

  data() {
    return {
      showLogo: "",
      showOrganizationalChart: "",
      table: [
        {
          title: "اسم الموسسة بالعربي",
          data: this.$store.state.organization.organization.nameAr,
        },
        {
          title: "إسم المؤسسة بالإنجليزي",
          data: this.$store.state.organization.organization.nameEn,
        },
        {
          title: "نوع المؤسسة",
          data: this.$store.state.organization.organization.type,
        },
        {
          title: "تاريخ التأسيس",
          data: dayjs(
            this.$store.state.organization.organization.lastRenewalDate
          ).format("YYYY-MM-DD"),
        },
        {
          title: "رقم تصريح مزاولة النشاط",
          data: this.$store.state.organization.organization.permitNumber,
        },
        {
          title: "تاريخ إصدارة",
          data: dayjs(
            this.$store.state.organization.organization.permitDate
          ).format("YYYY-MM-DD"),
        },
        {
          title: "مجالات عمل المؤسسة",
          data: this.$store.state.organization.organization.fieldWork,
        },
        {
          title: "البريد الإلكتروني",
          data: this.$store.state.organization.organization.email,
        },
        {
          title: "الموقع الإلكتروني",
          data: this.$store.state.organization.organization.website,
        },
        {
          title: "منظمة محلية/دولية",
          data: this.$store.state.organization.organization
            .localOrInternational,
        },

        {
          title: "هاتف المؤسسة",
          data: this.$store.state.organization.organization.phone,
        },
        {
          title: "شعار المؤسسة",
        },
      ],
    };
  },
  components: {
    ReportHeader,
  },
  async created() {
    this.showLogo =
      (await import.meta.env.VITE_API) +
      "/" +
      this.$store.state.organization.organization.logo.substring(7);
    this.showOrganizationalChart =
      (await import.meta.env.VITE_API) +
      "/" +
      this.$store.state.organization.organization.OrganizationalChart.substring(
        7
      );
  },
  methods: {
    lastRenew(item) {
      let date = dayjs(
        this.$store.state.organization.organization.lastRenewalDate
      ).format("YYYY-MM-DD");
      return date;
    },
    permit(item) {
      let permit = dayjs(
        this.$store.state.organization.organization.permitDate
      ).format("YYYY-MM-DD");
      return permit;
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  text-align: center;
  font-size: 14px;
}
</style>
