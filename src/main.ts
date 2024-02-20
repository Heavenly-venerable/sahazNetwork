import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router"

AOS.init({
  delay: 50,
  duration: 1000,
  once: true,
});

createApp(App).use(router).mount("#app");
