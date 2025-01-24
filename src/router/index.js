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
import RemoveBeneficiary from "@/views/RemoveBeneficiary.vue";

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
  {
    name: "RemoveBeneficiary",
    path: "/RemoveBeneficiary",
    component: RemoveBeneficiary,
  },
  {
    name: "Logout",
    path: "/Logout",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

let logoutTimer = null;

const resetLogoutTimer = () => {
  if (logoutTimer) {
    clearTimeout(logoutTimer);
  }
  logoutTimer = setTimeout(() => {
    localStorage.removeItem("token");
    // location.reload();
    // this.clearUserData();
    router.push({ name: "login" });
  }, 600000); // 10 minute
};

const setupActivityListeners = () => {
  window.addEventListener("mousemove", resetLogoutTimer);
  window.addEventListener("keydown", resetLogoutTimer);
  window.addEventListener("click", resetLogoutTimer);
  window.addEventListener("scroll", resetLogoutTimer);
};

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  // return false

  console.log(to);
  const userToken = localStorage.getItem("token");
  // if (!userToken && to.name != "login") {
  //   return { name: "login" };
  // }
  // if (userToken && to.name == "login") {
  //   return { name: "userDetails" };
  // }
  if (!userToken && to.name != "login") {
    // localStorage.removeItem("token");
    localStorage.setItem("token", "");
    // location.reload();
    return { name: "login" };
  }
  if (userToken && to.name == "login") {
    // return { name: "userDetails" };
    return { name: "Home" };
  }

  // Redirect to login if the user navigates back from Home page
  if (to.name === "login" && from.name === "Home") {
    localStorage.removeItem("token"); // Clear user token
    localStorage.setItem("token", "");
    localStorage.setItem("userDetails", "");
    return { name: "login" };
  }

  if (userToken) {
    resetLogoutTimer();
  }
});

setupActivityListeners();

export default router;
