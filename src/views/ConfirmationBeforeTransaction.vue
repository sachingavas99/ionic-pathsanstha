<template>
    <ion-modal ref="modal" :can-dismiss="true" :isOpen="true">
       <ion-header :translucent="true">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>User Confirmation</ion-title>
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
                  Email <ion-text  color="danger">(Required)</ion-text>
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
      </ion-content>

      <ion-footer>
        <ion-toolbar>
          <ion-button @click="login" expand="full" shape="round"
            >Confirm</ion-button
          >
        </ion-toolbar>
      </ion-footer>
    </ion-modal>
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
        const response = await api.login("/vcp.java/servlet/MobileLogin", {
          email: this.email,
          passward: this.password,
        });
        // alert(response);
        // alert(JSON.stringify(response));
        if (response?.data?.message == "Success") {
          // localStorage.setItem("token", this.email);
          // localStorage.setItem("userDetails", JSON.stringify(response.data));
          // this.setUserDetails({email: this.email, data: response.data});
          this.success("User confirmation succeed.");
           this.loadderOff();
          this.$emit('userConfirmation', { userConfirmation: true });
          // this.$router.push("Home");
        } else {
          this.loadderOff();
          this.error("Wrong userid or password is entered.");
        }
      } catch (error) {
        console.error(error);
        this.error("Something went wrong while user confirmation. Contat to admin.");
      }
      this.loadderOff();
    },
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  mounted() {
      this.email = this.loggedInUserId();
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
</style>
