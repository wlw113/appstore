import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 样式初始化
import 'normalize.css';
// 引入 ElementUI
import ElementPlus from 'element-plus';
import Axios from 'axios';
import 'element-plus/lib/theme-chalk/index.css';
//国际化
// import i18n, { elementPlusMessages } from '@/config/i18n';

const app=createApp(App)

app.config.globalProperties.$axios=Axios;

app.use(store)
  .use(router)
  .use(ElementPlus)
  // .use(i18n)
  .mount("#app");
