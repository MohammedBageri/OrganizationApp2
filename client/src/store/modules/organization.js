import axios from "../../axios";
const organization = {
  namespaced: true,
  state: () => ({
    image: null,
    chart: null,
    id: null,
    organization: {
      nameAr: "",
      nameEn: "",
      type: "",
      lastRenewalDate: "",
      permitNumber: "",
      permitDate: "",
      fieldWork: "",
      email: "",
      // isActive: "",
      DateisActive: "", // Found it
      phone: "",
      localOrInternational: "",
      website: "",
      logo: null,
      OrganizationalChart: null,
      mapArea: null,
      activitiesAndProjectsByOthersOrganization: [],
      bankAccount: [],
      boardOfTruste: [],
      employeeStats: {
        numberStaff: "",
        maleStaff: "",
        femaleStaff: "",
        noteStaff: "",
        numberContractors: "",
        maleContractors: "",
        femaleContractors: "",
        noteContractors: "",
        numberVolunteers: "",
        maleVolunteers: "",
        femaleVolunteers: "",
        noteVolunteers: "",
        numberOthers: "",
        maleOthers: "",
        femaleOthers: "",
        noteOthers: "",
      },
      expenditure: [],
      founder: [],
      organizationGoal: [],
      organizationProject: [],
      organizationRegulation: [],
      oversightCommitte: [],
      peopleAndSupporting: [],
      projectsByPeople: [],
      revenue: [],
      standingCommitte: [],
      mainCenter: {
        street: "",
        buildingType: "",
        ownOrRent: "",
        state: null,
        city: null,
        //
      },
      branche: [],
      facilitiesAndCenter: [],
      risks: [],
    },
    defaultOrganization: {
      nameAr: "",
      nameEn: "",
      type: "",
      lastRenewalDate: "",
      permitNumber: "",
      permitDate: "",
      fieldWork: "",
      email: "",
      // isActive: "",
      DateisActive: "", // Found it
      phone: "",
      localOrInternational: "",
      website: "",
      logo: null,
      OrganizationalChart: null,
      mapArea: null,
      activitiesAndProjectsByOthersOrganization: [],
      bankAccount: [],
      boardOfTruste: [],
      employeeStats: {
        numberStaff: "",
        maleStaff: "",
        femaleStaff: "",
        noteStaff: "",
        numberContractors: "",
        maleContractors: "",
        femaleContractors: "",
        noteContractors: "",
        numberVolunteers: "",
        maleVolunteers: "",
        femaleVolunteers: "",
        noteVolunteers: "",
        numberOthers: "",
        maleOthers: "",
        femaleOthers: "",
        noteOthers: "",
      },
      expenditure: [],
      founder: [],
      organizationGoal: [],
      organizationProject: [],
      organizationRegulation: [],
      oversightCommitte: [],
      peopleAndSupporting: [],
      projectsByPeople: [],
      revenue: [],
      standingCommitte: [],
      mainCenter: {
        street: "",
        buildingType: "",
        ownOrRent: "",
        state: null,
        city: null,
        //
      },
      branche: [],
      facilitiesAndCenter: [],
      risks: [],
    },
    organizations: [],
  }),
  mutations: {
    set_organization(state, payload) {
      state.organization = payload;
    },
    set_organizations(state, payload) {
      state.organizations = payload;
    },
  },
  actions: {
    async getOrganization({ commit }, payload) {
      console.log(payload)
      try {
        await axios.get(`/api/Organizations/${payload}`).then((res) => {
          if (res.status === 200) {
            commit("set_organization", res.data.organization);
            console.log(this.state.organization.mapArea);
          } else {
            //Error
          }
        });
      } catch (error) {
        console.error(error);// respons .response.state
      }
    },
    async getOrganizations({ commit }) {
      try {
        await axios.get("/api/Organizations").then((res) => {
          if (res.status === 200) {
            commit("set_organizations", res.data.organization);
          } else {
            // commit("?????? ?????? ???? ?????? ?????? ?????? ???????????????? ??????????????");
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    async getOrganizationByEmail({ commit }) {

      try {
        const email = JSON.parse(localStorage.getItem('user')).email
        console.log(email)
        let res = await axios.get(`/api/Organizations/getOrganizationByEmail/${email}`)
        if (res.status === 200) {
          console.log(res.data.organization)
          commit("set_organization", res.data.organization[0]);
        }
      } catch (error) {
        console.error(error);
      }

    },
    async createOrganization({ commit, state }) {
      try {
        // logo and pdf
        const form = state.organization;
        console.log(form);
        // form.append("logoImage", state.image);

        // console.log(form);
        const res = await axios.post("/api/Organizations/organization_order", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },

        });

        state.organization.id = res.data.result._id
        console.log('iam ??????', res.data.result._id);
        console.log('iam here', state.organization.id);
        console.log(res);
        commit('set_organization', res.data.result)
        console.log(state.organization)

        state.organization.logo = res.data.image;
        state.organization.OrganizationalChart = res.data.chart;
        // console.log(state.organization.logo);

        // if (state.chart){
        //   const res = await axios.post("/api/Organizations", form, {
        //         headers: {
        //           "Content-Type": "multipart/form-data",
        //         },
        //       });
        //       if (res.status === 200) {
        //         //     state.organization.OrganizationalChart = res.data.file;
        //         //     // console.log(state.organization.OrganizationalChart);
        //         //   }
        //       }
        // }

        // if (state.chart) {
        //   form = new FormData();
        //   form.append("pdf", state.chart);
        //   console.log(state.chart);
        //   const res = await axios.post("/api/Organizations/Upload", form, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   if (res.status === 200) {
        //     state.organization.OrganizationalChart = res.data.file;
        //     // console.log(state.organization.OrganizationalChart);
        //   }
        // }

        // await axios.post("/api/Organizations", {
        //   nameAr: state.organization.nameAr,
        //   nameEn: state.organization.nameEn,
        //   logo: state.organization.logo,
        //   type: state.organization.type,
        //   localOrInternational: state.organization.localOrInternational,
        //   lastRenewalDate: state.organization.lastRenewalDate,
        //   permitNumber: state.organization.permitNumber,
        //   permitDate: state.organization.permitDate,
        //   fieldWork: state.organization.fieldWork,
        //   email: state.organization.email,
        //   webSite: state.organization.webSite,
        //   mapArea: state.organization.mapArea,
        //   state: state.organization.state,
        //   city: state.organization.city,
        //   DateisActive: state.organization.DateisActive,
        //   phone: state.organization.phone,
        //   OrganizationalChart: state.organization.OrganizationalChart,
        //   mainCenter: state.organization.mainCenter,
        //   branche: state.organization.branche,
        //   facilitiesAndCenter: state.organization.facilitiesAndCenter,
        //   founder: state.organization.founder,
        //   boardOfTruste: state.organization.boardOfTruste,
        //   oversightCommitte: state.organization.oversightCommitte,
        //   employeeStats: state.organization.employeeStats,
        //   standingCommitte: state.organization.standingCommitte,
        //   projectsByPeople: state.organization.projectsByPeople,
        //   activitiesAndProjectsByOthersOrganization:
        //     state.organization.activitiesAndProjectsByOthersOrganization,
        //   organizationProject: state.organization.organizationProject,
        //   bankAccount: state.organization.bankAccount,
        //   revenue: state.organization.revenue,
        //   expenditure: state.organization.expenditure,
        //   peopleAndSupporting: state.organization.peopleAndSupporting,
        //   organizationGoal: state.organization.organizationGoal,
        //   organizationRegulation: state.organization.organizationRegulation,
        //   risks: state.organization.risks,
        // });
        // if (res.status === 201) {
        //   return res;
        // } else {
        //   return false;
        // }
        return res
      } catch (error) {
        console.error(error);
      }
    },
    async updateOrganization({ commit, state }) {
      try {
        console.log('im here')
        // logo and pdf
        let status = 200;
        let data = "";
        if (state.image.name != state.organization.logo) {
          let form = new FormData();
          // console.log(state.image);
          form.append("logoImage", state.image);

          // console.log(form);
          // const res = await axios.post("/api/Organizations/UploadImage", form, {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          status = res.status;
          data = res.data.image;
        }

        if (status === 200) {
          state.organization.logo = data;
          // console.log(state.organization.logo);

          if (state.chart) {
            // if (state.chart.name != state.organization.OrganizationalChart) {
            //   let form = new FormData();
            //   form.append("pdf", state.chart);
            //   console.log(state.chart);
            //   const res = await axios.post("/api/Organizations/Upload", form, {
            //     headers: {
            //       "Content-Type": "multipart/form-data",
            //     },
            //   });
            //   if (res.status === 200) {
            //     state.organization.OrganizationalChart = res.data.file;
            //     // console.log(state.organization.OrganizationalChart);
            //   }
            // }
          }
          console.log(state.organization._id);
          let res = await axios.patch(
            `/api/Organizations/${state.organization._id}`,
            {
              nameAr: state.organization.nameAr,
              nameEn: state.organization.nameEn,
              logo: state.organization.logo,
              type: state.organization.type,
              localOrInternational: state.organization.localOrInternational,
              lastRenewalDate: state.organization.lastRenewalDate,
              permitNumber: state.organization.permitNumber,
              permitDate: state.organization.permitDate,
              fieldWork: state.organization.fieldWork,
              email: state.organization.email,
              webSite: state.organization.webSite,
              mapArea: state.organization.mapArea,
              state: state.organization.state,
              city: state.organization.city,
              DateisActive: state.organization.DateisActive,
              phone: state.organization.phone,
              OrganizationalChart: state.organization.OrganizationalChart,
              mainCenter: state.organization.mainCenter,
              branche: state.organization.branche,
              facilitiesAndCenter: state.organization.facilitiesAndCenter,
              founder: state.organization.founder,
              boardOfTruste: state.organization.boardOfTruste,
              oversightCommitte: state.organization.oversightCommitte,
              employeeStats: state.organization.employeeStats,
              standingCommitte: state.organization.standingCommitte,
              projectsByPeople: state.organization.projectsByPeople,
              activitiesAndProjectsByOthersOrganization:
                state.organization.activitiesAndProjectsByOthersOrganization,
              organizationProject: state.organization.organizationProject,
              bankAccount: state.organization.bankAccount,
              revenue: state.organization.revenue,
              expenditure: state.organization.expenditure,
              peopleAndSupporting: state.organization.peopleAndSupporting,
              organizationGoal: state.organization.organizationGoal,
              organizationRegulation: state.organization.organizationRegulation,
              risks: state.organization.risks,
            }
          );
          if (res.status === 200) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteOrganization({ commit }, { id }) {
      try {
        let res = await axios.delete(`/api/Organizations/${id}`);
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async activeOrgnaization({ commit }, { id }) {
      try {
        let res = await axios.patch(`/api/Orders/active/${id}`);
        // console.log(res);
      } catch (error) { }
    },


  },
};

export default organization;
