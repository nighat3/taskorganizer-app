import Vue from "vue";
import Router from "vue-router";
import Organizer from "./views/Organizer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "organizer",
      component: Organizer
    }
  ]
});
