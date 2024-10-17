<template>
  <div v-if="currentUser">
    <h1>{{ currentUser.name }}</h1>
    <h2>Альбомы</h2>
    <!-- пеебор альбомов -->
    <div v-for="album in currentUser.albums" :key="album.id">
      <h3>{{ album.title }}</h3>
      <div class="carousel">
        <!-- ?! -->
        <img
          class="carousel__img"
          v-for="photo in getFirstFivePhotos(album.id)"
          :key="photo.id"
          :src="photo.url"
        />
      </div>
    </div>
    <h2>Посты</h2>
    <ul>
      <li v-for="post in currentUser.posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios"; // http-запросы

export default {
  name: "UserDetail",
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const userId = this.$route.params.id; // id из параметров маршрута
    this.$store.dispatch("fetchUser", userId); // загрузка конкретного пользователя
  },
  methods: {
    async getFirstFivePhotos(albumId) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      return response.data.slice(0, 5); // первые 5 фото
    },
  },
};
</script>

<style scoped lang="scss">
.carousel {
  &__img {
    width: 100px;
    height: auto;
  }
}
</style>
