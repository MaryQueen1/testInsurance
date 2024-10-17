import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./assets/style.scss";
import { createApp } from "vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
