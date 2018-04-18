import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const sourceOfTruth = {
  lists: []
};

new Vue({
  router,
  data: sourceOfTruth,
  render: h => h(App)
}).$mount("#app");
