<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
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
                password <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>
        </ion-list>
      </div>
      <br />
      <div class="image-container">
        <img src="../../assets/icon.png" />
      </div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-button @click="login" expand="full" shape="round"
          >Login</ion-button
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
      validation: {
        email: true,
        passward: true,
      },
    };
  },
  methods: {
    validateForm() {
      this.validation.email = !validator.isEmpty(this.email);
      this.validation.passward = !validator.isEmpty(this.password);
      if (!this.validation.email) {
        return "Pleae enter valid email";
      }
      if (!this.validation.passward) {
        return "Pleae enter valid password";
      }
    },
    async login() {
      try {
        const error = this.validateForm();
        if (error) {
          this.error(error);
          return;
        }
        this.loadderOn();
        const response = await api.login(
          "/varad_path.java/servlet/MobileLogin",
          {
            email: this.email,
            passward: this.password,
          }
        );
        // alert(JSON.stringify(response));
        // alert(JSON.stringify(response));
        if (response?.data?.message == "Success") {
          localStorage.setItem("token", this.email);
          localStorage.setItem("userDetails", JSON.stringify(response.data));
          this.setUserDetails({ email: this.email, data: response.data });
          this.success("Logged in successfully");
          this.$router.push("Home");
        } else {
          this.error("Wrong userid or password is entered.");
        }
      } catch (error) {
        alert("error");
        alert(JSON.stringify(error));
        alert(error);
        console.error(error);
        this.error("Something went wrong while login. Contat to admin.");
      }
      this.loadderOff();
    },
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  created() {
    // this.success("Logged in");
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
/* .image-container img {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
} */
.image-container {
  text-align: center;
}

.image-container img {
  margin: 20px auto; /* 20px top and bottom margin, auto left and right margin */
  width: 300px; /* Set the desired width */
  height: auto; /* Maintain the aspect ratio */
}
</style>
