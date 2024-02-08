import { createRouter, createWebHistory } from "@ionic/vue-router";
import Login from "@/views/Login.vue";
import UserDetails from "@/views/UserDetails.vue";
import SameBankTransfer from "@/views/SameBankTransfer.vue";
import OtherBankTransfer from "@/views/OtherBankTransfer.vue";
import Statement from "@/views/Statement.vue";

const routes = [
  {
    path: "",
    redirect: "/login",
  },
  {
    name: "userDetails",
    path: "/userDetails",
    component: UserDetails,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "SameBankTransfer",
    path: "/SameBankTransfer",
    component: SameBankTransfer,
  },
  {
    name: "OtherBankTransfer",
    path: "/OtherBankTransfer",
    component: OtherBankTransfer,
  },
  {
    name: "Statement",
    path: "/Statement",
    component: Statement,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  // return false

  console.log(to);
  const userToken = localStorage.getItem("token");
  if (!userToken && to.name != "login") {
    return { name: "login" };
  }
  if (userToken && to.name == "login") {
    return { name: "userDetails" };
  }
});

export default router;
