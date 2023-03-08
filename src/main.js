import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faStar,
  faImage,
  faUser,
  faListUl,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

library.add(
  faMagnifyingGlass,
  faArrowUpFromBracket,
  faStar,
  faImage,
  faUser,
  faListUl,
  faBars,
  faArrowUp
);

createApp(App)
  .use(router)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
