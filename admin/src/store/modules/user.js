import axios from "../../axios"
// import { http } from "../../plugins/axios";
const user = {
  namespaced: true,
  state: () => ({
    user: {
      _id: "",
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      address: "",
      mapArea: null,
      role: []
    },
    users: [],
  }),
  mutations: {
    set_user(state, payload) {
      const {password, ...other} = payload
      state.user = other;
    },
    set_users(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      let res = await axios.post("/api/Authentication/login", {
        //ading api
        email: email,
        password: password,
      });

      if (res.status === 200) {
        commit("set_user", res.data.user);
        localStorage.setItem('user', JSON.stringify(res.data.user))
        return true;
      } else {
        return false;
      }
      //   commit('set_user', res.date.user)
      //   // commit("تم تسجيل الدخول بنجاح");
      //   // console.log(res.data.user);
      // } else {
      //   // commit("لم يتم تسجيل الدخول بنجاح");
      // }
    },
    async getUsers({ commit }) {
      let res = await axios.get(`/api/Users`);
      if (res.status === 200) {
        commit("set_users", res.data.users);
      }
    },
    async createUser({ commit, state }) {
      let res = await axios.post("/api/Users/createAdmin", {
        username: state.user.username,
        email: state.user.email,
        name: state.user.name,
        phone: state.user.phone,
        address: state.user.address,
        password: state.user.password,
        mapArea: state.user.mapArea,
        role: state.user.role
      });
      if (res.status === 201) {
        return true;
      }
    },
    async updateUser({ commit }, { id, state }) {
      let res = await axios.patch(`/api/Users/updateAdmin/${id}`, {
        username: state.username,
        email: state.email,
        name: state.name,
        phone: state.phone,
        address: state.address,
        password: state.password,
        mapArea: state.mapArea,
        role: state.role
      });
      if (res.status === 201) {
        return true;
      }
    },
    async deleteUser({ commit }, { id }) {
      let res = await axios.delete(`/api/Users/${id}`);
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    },
    async logout({}, { user }) {
      let res = await axios.delete(`/api/Authentication/logout`, {
        user: {
          userId: user._id,
        },
      });
      commit("set_user", {
        _id: "",
        name: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        mapArea: null,
        role: ""
      });
      localStorage.removeItem('user')
      console.log(res);
    },
  },
};

export default user;
