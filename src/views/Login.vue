<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>
    <ion-header :translucent="true">
      <ion-toolbar>
        <!-- <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons> -->
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
                Mobile Number <ion-text color="danger">(Required)</ion-text>
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
                Password <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>
          <div class="forgot">
            <ion-label lines="none" @click="forgotPassword" color="danger"
              >Forgot Password?</ion-label
            >
          </div>
        </ion-list>
      </div>
      <br />
      <div class="image-container">
        <img src="../../assets/icon.png" />
      </div>
    </ion-content>
    <!-- <ion-footer>
      <ion-toolbar>
        <ion-button @click="login" expand="full" shape="round"
          >Login</ion-button
        >
      </ion-toolbar>
    </ion-footer> -->
    <ion-footer>
      <!-- <ion-toolbar> -->
      <!-- <ion-item
          @click="fetchConfirmation"
          lines="none"
          expand="full"
          shape="round"
          >Forgot Password</ion-item
        > -->

      <!-- </ion-toolbar> -->
    </ion-footer>

    <ion-footer>
      <ion-toolbar>
        <ion-button
          v-if="!userConfirm"
          @click="fetchConfirmation"
          expand="full"
          shape="round"
          >Login</ion-button
        >
      </ion-toolbar>
    </ion-footer>
    <!-- Custom confirmation dialog -->
    <!-- <div v-if="!userConfirm"> -->
    <div v-if="showDialog" class="confirmation-dialog">
      <div class="dialog-content" style="overflow-y: auto; max-height: 700px">
        <p>
          I have read and understood the Terms and Conditions applicable to
          Mobile Banking Application Facility provided by Malkapur Urban
          Co-Operative Credit Society Ltd., Malkapur. I confirm to the Society
          that I am the duly Authorized User of the Account. I will be solely
          responsible for protecting any password given by Malkapur Urban
          Co-Operative Credit Society Ltd., Malkapur for the use of the
          facility. Malkapur Urban Co-Operative Credit Society Ltd., Malkapur
          will not be liable for any unauthorized use of any password(s) given
          to me as an Authorized User or for any fraudulent, duplicate or
          erroneous instructions given by use of the password. If I have reason
          to believe that my Mobile Phone Number is / has been allotted to
          another person and / or there has been an unauthorized transaction in
          the Account and / or my Mobile Phone Number is lost, the Authorized
          User shall immediately inform Malkapur Urban Co-Operative Credit
          Society Ltd., Malkapur under acknowledgement about the same. Malkapur
          Urban Co-Operative Credit Society Ltd., Malkapur shall not be
          responsible for any failure to utilize the Facility due to me not
          being within the geographical range within which the Facility is
          offered, Malkapur Urban Co-Operative Credit Society Ltd., Malkapur
          makes no warranty or representation of any kind in relation to the
          system and the network or their function or performance or for any
          loss or damage whenever and howsoever suffered or incurred by me or by
          any person resulting from or in connection with the Facility. Malkapur
          Urban Co-Operative Credit Society Ltd., Malkapur shall under no
          circumstance be held liable if the Facility is not available or there
          is any delay in the carrying out of the instructions for any reasons
          whatsoever including but not limited to natural calamities, legal
          restraints, faults in the telecommunication network or network
          failure, or any other reason beyond the control of Malkapur Urban
          Co-Operative Credit Society Ltd., Malkapur.
        </p>
        <div class="button-container">
          <ion-button @click="hideDialog" color="danger">Disagree</ion-button>
          <ion-button @click="login()" color="success">Agree</ion-button>
        </div>
      </div>
    </div>
    <!-- </div> -->
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
      showDialog: false,
      userConfirm: false,
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

    validateEmail() {
      this.validation.email = !validator.isEmpty(this.email);
      if (!this.validation.email) {
        return "Pleae enter valid email";
      }
    },

    hideDialog() {
      this.showDialog = false;
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
          localStorage.setItem("token", this.email);
          localStorage.setItem("userDetails", JSON.stringify(response.data));
          this.setUserDetails({ email: this.email, data: response.data });
          this.success("Logged in successfully");
          this.$router.push("Home");
        } else {
          this.error("Wrong userid or password is entered.");
        }
      } catch (error) {
        alert(JSON.stringify(error));
        alert(error);
        console.error(error);
        this.error("Something went wrong while login. Contat to admin.");
      }
      this.loadderOff();
      this.hideDialog();
    },

    async fetchConfirmation() {
      try {
        const error = this.validateForm();
        if (error) {
          this.error(error);
          return;
        }
        this.loadderOn();
        const response = await api.login(
          "/vcp.java/servlet/MobileUserConfirm",
          {
            email: this.email,
          }
        );
        // console.log(JSON.stringify(response?.data));
        // console.log("Response:", response.data);

        if (response?.data?.message == "Success") {
          // this.$emit("userConfirm", { userConfirm: true });
          this.login();
        } else {
          // this.$emit("userConfirm", { userConfirm: false });
          this.showDialog = true;
        }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },

    async forgotPassword() {
      try {
        const error = this.validateEmail();
        if (error) {
          this.error(error);
          return;
        }
        this.loadderOn();
        const response = await api.login(
          "/vcp.java/servlet/SendForgotPassward",
          {
            email: this.email,
          }
        );
        if (response?.data?.message == "Success") {
          // this.$emit("userConfirm", { userConfirm: true });
          // this.clearUserData();
          this.success("Password Send to your registered E-mail Id.");
          this.$router.push("login");
        } else {
          // this.$emit("userConfirm", { userConfirm: false });
          this.showDialog = true;
        }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.");
        this.clearUserData();
        this.$router.push("login");
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
ion-content {
  --background: var(--primary-gradient);
  --color: var(--light-color);
}

ion-header {
  --background: transparent;
}

ion-toolbar {
  --background: rgba(255, 255, 255, 0.1);
  --border-color: transparent;
  --border-width: 0;
}

ion-title {
  /* color: rgb(46, 118, 180); */
  font-weight: 600;
  letter-spacing: 0.5px;
}
.container {
  padding: 20px;
  margin-top: 10px;
}

.label {
  font-size: larger;
}

/* Card-like form appearance */
ion-list {
  background: var(--card-background);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-bottom: 20px;
}

/* Input styling */
/* ion-item {
  --background: transparent;
  --border-color: var(--border-color);
  --border-style: solid;
  --border-width: 0 0 1px 0;
  --padding-start: 0;
  margin-bottom: 16px;
} */

/* ion-input {
  --color: var(--text-color);
  --placeholder-color: rgba(44, 62, 80, 0.6);
  font-size: 16px;
} */

.forgot {
  text-align: right;
  font-size: small;
  padding: 8px 4px;
}

.forgot ion-label:hover {
  color: crimson;
  text-decoration: underline;
}
.confirmation-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog-content {
  background-color: #b6d9c9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-weight: bolder;
}

ion-footer ion-toolbar {
  --background: transparent;
  --border-style: none;
  padding: 15px 15px 25px;
}

/* Dialog styling */
.confirmation-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.dialog-content {
  background-color: var(--card-background);
  padding: 28px;
  border-radius: 20px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  font-weight: normal;
  max-width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  line-height: 1.6;
  color: var(--text-color);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dialog-content p {
  margin-bottom: 20px;
  font-size: 15px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.button-container ion-button {
  flex: 1;
  margin: 0 5px;
}

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
/* .image-container {
  text-align: center;
} */

.image-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-in-out;
}

.image-container img {
  margin: 20px auto; /* 20px top and bottom margin, auto left and right margin */
  width: 250px; /* Set the desired width */
  height: auto; /* Maintain the aspect ratio */
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
}
.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Loading spinner */
.custom-loading {
  --background: rgba(0, 0, 0, 0.7);
  --spinner-color: var(--light-color);
}

/* Focus states for inputs */
ion-input:focus {
  --border-color: var(--accent-color);
}

/* Error states */
.ion-invalid.ion-touched {
  --border-color: var(--error-color);
}
</style>
