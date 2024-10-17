import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    currentUser: null,
  },
  mutations: {
    SET_USERS(state, users) {
      // установка списка пользователей
      state.users = users;
    },
    SET_CURRENT_USER(state, user) {
      // установка текущего пользователя
      state.currentUser = user;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      // асинхронное действие для загрузки пользователей
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("SET_USERS", response.data); // вызов
    },
    async fetchUser({ commit }, userId) {
      const userResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const albumsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const postsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );

      const user = {
        ...userResponse.data,
        albums: albumsResponse.data,
        posts: postsResponse.data,
      };

      commit("SET_CURRENT_USER", user); // установак текущего пользователя
    },
  },
  getters: {
    users: (state) => state.users, // спиоск пользователей
    currentUser: (state) => state.currentUser, // текущий пользователей
  },
});
