import Vue from "vue";
import Router from "vue-router";

import Lists from "./components/Lists";
import Items from "./components/Items";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Lists
    },
    {
      path: "/list/:id",
      component: Items
    }
  ]
});

export default router;
