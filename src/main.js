import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
