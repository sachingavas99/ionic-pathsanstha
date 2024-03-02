<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Change Password</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-list>
          <ion-item lines="none">
            <ion-input
              v-model="email"
              labelPlacement="floating"
              value="hi@ionic.io"
              :disabled="true"
              :class="{
                'ion-invalid': !validation.email,
                'ion-touched': !validation.email,
              }"
              error-text="Invalid email"
              @input="validateForm"
            >
              <div slot="label">
                Email <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="password"
              labelPlacement="floating"
              value="hi@ionic.io"
              type="password"
              :class="{
                'ion-invalid': !validation.passward,
                'ion-touched': !validation.passward,
              }"
              error-text="Invalid password"
              @input="validateForm"
            >
              <div slot="label">
                Old Password <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="newpassward"
              labelPlacement="floating"
              value="hi@ionic.io"
              type="password"
              :class="{
                'ion-invalid': !validation.newpassward,
                'ion-touched': !validation.newpassward,
              }"
              error-text="Invalid password"
              @input="validateForm"
            >
              <div slot="label">
                New Password <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-button @click="changepassword" expand="full" shape="round"
          >Change Password</ion-button
        >
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from "validator";

export default {
  watch: {},
  data() {
    return {
      email: "",
      password: "",
      newpassward: "",
      validation: {
        email: true,
        passward: true,
        newpassward: true,
      },
    };
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  methods: {
    validateForm() {
      this.validation.email = !validator.isEmpty(this.email);
      this.validation.passward = !validator.isEmpty(this.password);
      this.validation.newpassward = !validator.isEmpty(this.newpassward);
      if (!this.validation.email) {
        return "Pleae enter valid email";
      }
      if (!this.validation.passward) {
        return "Pleae enter valid password";
      }
      if (!this.validation.newpassward) {
        return "Pleae enter valid new password";
      }
    },
    async changepassword() {
      try {
        const errorMessage = this.validateForm();
        if (errorMessage) {
          this.error(errorMessage);
          return;
        }

        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post(
          "/varad_path.java/servlet/ChangePassword",
          {
            email: userId,
            passward: this.password,
            newpassword: this.newpassward,
          }
        );

        if (response?.data?.message == "Success") {
          this.success("Passward change succeed.");
          this.clearUserData();
          this.loadderOff();
          this.$router.push("login");
        } else {
          this.error("New password and old password must be different.");
          this.clearUserData();
          this.loadderOff();
          this.$router.push("login");
        }
      } catch (error) {
        this.error("Please try again or contact to admin.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },
  },
  mounted() {
    this.email = this.loggedInUserId();
  },
};
</script>

<style scoped>
#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
