import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Homepage.vue")
    },
    {
        path: "/books",
        name: "books",
        component: () => import("@/views/Books.vue")
      },
    {
      path: "/add-book",
      name: "add",
      component: () => import("@/views/AddBook.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Auth.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Auth.vue")
    }
  ]
});
