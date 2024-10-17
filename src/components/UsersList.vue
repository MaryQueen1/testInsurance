<template>
  <div>
    <h1>Список пользователей</h1>
    <ul>
      <!-- перебор пользователей -->
      <li v-for="user in users" :key="user.id">
        <!-- ссылка на страницу конкретного пользователя -->
        <router-link :to="`/user/${user.id}`">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UsersList",
  computed: {
    ...mapState(["users"]), //состояние пользователей из Vuex
  },
  created() {
    this.$store.dispatch("fetchUsers"); // вызов загрузки users при создании компонента
  },
};
</script>

<style scoped lang="scss">
ul {
    list-style-type: none; // убираем маркеры у списка
}
</style>