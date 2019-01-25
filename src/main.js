import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
//通配css
import "normalize.css/normalize.css";
//global css
import '@/assets/css/element.css';
import '@/plugins/zepto.js';
import axios from './utils/http';
import echarts from 'echarts';
import '@/permission';// permission control
// import '@/utils/fastclick.js';
// FastClick.attach(document.body);
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
const env = process.env;
//后台静态资源地址
Vue.prototype.imgbaseUrl = env.VUE_APP_imgServer;
//后台上传接口服务地址
Vue.prototype.uploadbaseUrl = env.VUE_APP_server;
//开发不显示提示
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
