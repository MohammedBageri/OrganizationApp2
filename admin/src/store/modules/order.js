import axios from "../../axios";
// import { http } from "../../plugins/axios";
const order = {
  namespaced: true,
  state: () => ({
    order: {
      _id: "",
      organization: "",
      status: ""
    },
    orders: []

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
      if (res.status === 200) {
        commit("set_orders", res.data);
      }
    },


    // async getOrderNotCompleted ({commit}) {
    //   let res = await axios.get(`/api/Orders`, { params: { statues: 'قيد الانتظار' } })
    //   if (res.status === 200) {
    //     commit("set_orders", res.data);
    //   }
    // },
    async getOrderUnderProcessing({ commit }, payload) {
      let res = await axios.get(`/api/Orders`, { params: { status: 'قيد الإنتظار', type: payload.type } })
      if (res.status === 200) {
        commit("set_orders", res.data);
      }

    },
    async getOrderUnderImplementing({ commit }, payload) {
      let res = await axios.get(`/api/Orders`, { params: { status: 'قيد التنفيذ', type: payload.type } })
      if (res.status === 200) {
        commit("set_orders", res.data);
      }
    },
    async getOrderBeforPayment({ commit }, payload) {
      let res = await axios.get(`/api/Orders`, { params: { status: 'مرحلة الدفع', type: payload.type } })
      if (res.status === 200) {
        commit("set_orders", res.data);
      }
    },

    async getOrderCompleted({ commit }, payload) {
      let res = await axios.get(`/api/Orders`, { params: { status: 'مكتمل', type: payload.type } })
      if (res.status === 200) {
        commit("set_orders", res.data);
      }
    },



    async updateOrderNotCompleted({ commit },  payload ) {
      console.log("hvjfgh", payload)
      const formData = {
        note:payload.note
      }
      let res = await axios
        .patch(`/api/Orders/order_notCompleted/${payload.id}`,formData);
      if (res.status === 200) {
        return true;
      }

    },



    async updateOrderUnderProcessing({ commit }, payload) {
      console.log(payload.id)
      let res = await axios.patch(`/api/Orders/order_underProccessing/${payload.id}`);
      if (res.status === 200) {
        return true;
      }
      console.log(res)
    },

    async updateOrderUnderImplementing({ commit }, payload) {
      try {
        let res = await axios
          .patch(`/api/Orders/order_underImplementing/${payload.id}`);
      } catch (error) {

      }
    },

    async updateOrderCompleted({ commit }, { payload, id }) {

      let res = await axios
        .patch(`/api/Orders/order_completed/${payload.id}`, {
        });
      if (res.status === 200) {
        return true;
      }

    },

  }
}

export default order;
