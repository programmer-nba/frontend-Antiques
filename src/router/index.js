import { createRouter, createWebHistory } from "vue-router";

let routes = [];
routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/employee",
    name: "employee",
    component: () =>
      import("../views/employee/EmployeeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile/ProfileView.vue"),
  },
  {
    path: "/customer",
    name: "customer",
    component: () => import("../views/customer/CustomerView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/product/ProductView.vue"),
  },
  {
    path: "/report1",
    name: "report1",
    component: () => import("../views/report/ReportView1.vue"),
  },
  {
    path: "/report2",
    name: "report2",
    component: () => import("../views/report/ReportView2.vue"),
  },
  {
    path: "/pos",
    name: "pos",
    component: () => import("../views/pos/POSView.vue"),
  },
  // {
    // path: "/pay",
    // name: "pay",
    // component: () => import("../views/Admin/Pay/Pay.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
