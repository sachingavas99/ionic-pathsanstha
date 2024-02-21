import { createRouter, createWebHistory } from "@ionic/vue-router";
import Login from "@/views/Login.vue";
import UserDetails from "@/views/UserDetails.vue";
import SameBankTransfer from "@/views/SameBankTransfer.vue";
import OtherBankTransfer from "@/views/OtherBankTransfer.vue";
import Statement from "@/views/Statement.vue";
import Home from "@/views/Home.vue";
import AccountsDetails from "@/views/Accountsdetails.vue";
import ChangePassword from "@/views/ChangePassword.vue";
import AddBeneficiary from "@/views/AddBeneficiary.vue";
import QRCollection from "@/views/QRCollection.vue";
import FastTag from "@/views/FastTag.vue";

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
  {
    name: "Home",
    path: "/Home",
    component: Home,
  },
  {
    name: "AccountsDetails",
    path: "/AccountsDetails",
    component: AccountsDetails,
  },
  {
    name: "ChangePassword",
    path: "/ChangePassword",
    component: ChangePassword,
  },
  {
    name: "AddBeneficiary",
    path: "/AddBeneficiary",
    component: AddBeneficiary,
  },
  {
    name: "QRCollection",
    path: "/QRCollection",
    component: QRCollection,
  },
  {
    name: "FastTag",
    path: "/FastTag",
    component: FastTag,
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
