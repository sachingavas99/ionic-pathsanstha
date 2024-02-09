import { toastController } from "@ionic/vue";

const myMixin = {
  data() {
    return {
      title: "Mixins are cool",
      copyright: "All rights reserved. Product of super awesome people",
      openLoader: false,
      userDetailsMixin: {},
    };
  },
  computed: {
    showLoader() {
      return this.openLoader;
    },
  },
  created: function () {
    // this.greetings();
    if (this.loggedInUserData()) {
      this.setUserDetails({
        email: this.loggedInUserId(),
        data: this.loggedInUserData(),
      });
    }
  },
  methods: {
    setUserDetails({ email, data }) {
      this.userDetailsMixin = { email, data };
    },
    loggedInUserId() {
      return localStorage.getItem("token");
    },
    loggedInUserData() {
      return localStorage.getItem("userDetails");
    },
    clearUserData() {
      localStorage.setItem("token", "");
      localStorage.setItem("userDetails", "");
      this.userDetails = {};
    },
    logoutMixin() {
      this.clearUserData();
      this.$router.push("login");
      this.success("Logged out successfully!");
    },
    loadderOn() {
      this.openLoader = true;
    },
    loadderOff() {
      this.openLoader = false;
    },
    async success(message) {
      const toast = await toastController.create({
        message: message,
        duration: 1500,
        position: "top",
        color: "success",
      });

      toast.present();
    },
    async error(message) {
      const toast = await toastController.create({
        message: message,
        duration: 1500,
        position: "top",
        color: "danger",
      });

      toast.present();
    },
  },
};

export default myMixin;
