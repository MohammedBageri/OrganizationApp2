import axios from "../../axios";
// import { http } from "../../plugins/axios";
const order = {
  namespaced: true,
  state: () => ({
    _id: "",
    organization: "",
    status: ""
  }),
  mutations: {
    set_order(state, payload) {
      state.order = payload
    },
    set_orders(state, payload) {
      state.orders = payload
    },
    set_validate(state, payload) {
      state.validate = payload;
    },
  },
  actions: {
    async getOrders({ commit }) {
      let res = await axios.get("/api/Orders");
      if (res.status === 200) {
        commit("set_orders", res.data);
      }
    },
    async getOrder({ commit }) {
      let res = await axios.get(`/api/Orders/${id}`)
    },
    async updateOrderNotCompleted({ commit }, { state, id }) {
      let res = await axios
        .patch(`/api/Orders/order_notCompleted/${id}`, {
          status: state.status,
        });
      if (res.status === 200) {
        return true;
      }

    },

    async updateOrderUnderProcessing({ commit }, { state, id }) {
      let res = await axios
        .patch(`/api/Orders/order_underProccessing/${id}`, {
          status: state.status,
        });
      if (res.status === 200) {
        return true;
      }

    },

    async updateOrderUnderImplementing({ commit }, { state, id }) {
      let res = await axios
        .patch(`/api/Orders/order_underImplementing/${id}`, {
          status: state.status,
        });
      if (res.status === 200) {
        return true;
      }

    },

    async updateOrderCompleted({ commit }, { state, id }) {
      let res = await axios
        .patch(`/api/Orders/order_completed/${id}`, {
          status: state.status,
        });
      if (res.status === 200) {
        return true;
      }

    },
    async getOrganizationByEmail({ commit }) {

      try {
        const email = JSON.parse(localStorage.getItem('user')).email
        let res = await axios.get(`/api/Organizations/getOrganizationByEmail/${email}`)
        if (res.status === 200) {
          console.log(res.data.organization)
          commit("set_order", res.data.organization[1]);
          return res.data.organization[1]
        }
      } catch (error) {
        console.error(error);
      }

    },
  }
}

export default order;
