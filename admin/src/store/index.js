import Vue from "vue";
import Vuex from "vuex";
//modules
import user from "./modules/user";
import organization from "./modules/organization";
import order from "./modules/order"
// import { http } from "../plugins/axios";
import axios from "../axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  //global store
  state: {
    validate: false,
    sectionForm: "",
    sectionFormTow: "",
    sectionFormFinal: "",
    drawer: true,
    cityDialog: false,
    provinceDialog: false,
    localAreaDialog: false,

    mapArea: {
      _id: "",
      name: ""
    },
    mapAreas:[],


    city: {
      _id: "",
      name: "",
      state: "",
    },
    cities: [],

    state: {
      _id: "",
      name: "",
    },
    states: [],
  },
  mutations: {
    set_mapAreas(state,payload){
      state.mapAreas = payload;
    },
    set_mapArea(state,payload){
      state.mapArea = payload;
    },

    set_cities(state, payload) {
      state.cities = payload;
    },
    set_city(state, payload) {
      state.city = payload;
    },
    set_states(state, payload) {
      state.states = payload;
    },
    set_state(state, payload) {
      state.state = payload;
    },
    set_validate(state, payload) {
      state.validate = payload;
    },
  },
  actions: {
    async getMapAreas({ commit }) {
      let res = await axios.get("/api/MapAreas");
      if (res.status === 200) {
        commit("set_mapAreas", res.data);
      }
    },
    async getMapArea ({commit}, {id}){
      let res =  await axios.get(`/api/MapAreas/${id}`);
      if( res.status === 200){
        commit('set_mapArea', res.data.mapArea)
      }
    },

    async createMapArea({ commit },{name}) {
      let res=  await axios
          .post("/api/MapAreas", {
            name: name,
          });
          if (res.status === 200) {
            return true;
          }
          
      },
      async updateMapArea({ commit },{name, id}) {
      let res =  await axios
          .patch(`/api/MapAreas/${id}`, {
            name: name,
          });
          if (res.status === 200) {
            return true;
           }
          
      },
      async deleteMapArea({ commit },{id} ) {
      let res=  await axios.delete(`/api/MapAreas/${id}`);
      if (res.status === 200) {
        return true;
      }else{
        return false
      }
          
      },


    async getCities({ commit }) {
      let res = await axios.get("/api/Cities");
      if (res.status === 200) {
        commit("set_cities", res.data);
      }
    },
    async getCity({ commit }, { id }) {
      let res = await axios.get(`/api/Cities/${id}`);
      if (res.status === 200) {
        commit("set_city", res.data.city);
      }
    },
    async CreateCity({ commit }, { name, state }) {
      let res = await axios.post("/api/Cities", {
        name: name,
        state: state,
      });
      if (res.status === 200) {
        return true;
      }
    },
    async UpdateCity({ commit }, { name, id, state }) {
      let res = await axios.patch(`/api/Cities/${id}`, {
        name: name,
        state: state,
      });
      if (res.status === 200) {
        return true;
      }
    },
    async DeleteCity({ commit }, { id }) {
      let res = await axios.delete(`/api/Cities/${id}`);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    },
    async getStates({ commit }) {
      let res = await axios.get("/api/States");
      if (res.status === 200) {
        commit("set_states", res.data);
      }
    },
    async getState({ commit }, id) {
      let res = await axios.get(`/api/States/${id}`);
      if (res.status === 200) {
        commit("set_state", res.data.state);
      }
    },
    async CreateState({ commit }, { name }) {
      let res = await axios.post("/api/States", {
        name: name,
      });
      if (res.status === 200) {
        return true;
      }
    },
    async UbdateState({ commit }, { name, id }) {
      let res = await axios.patch(`/api/States/${id}`, {
        name: name,
      });
      if (res.status === 200) {
        return true;
      }
    },
    async DeleteState({ commit }, { id }) {
      let res = await axios.delete(`/api/States/${id}`);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    },
    checkValidation({ commit }, form) {
      if (form.validate()) {
        //commit('set_validate', true);
        return true;
      } else {
        //commit('set_validate', false);
        return false;
      }
    },
  },
  //split stores => modules
  modules: {
    user,
    organization,
    order
  },
});

export default store;
