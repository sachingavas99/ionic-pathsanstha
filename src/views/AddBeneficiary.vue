<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Add beneficiary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-list>
          <ion-item lines="none">
            <ion-input
              v-model="ben_account"
              labelPlacement="floating"
              value="00.00"
              :class="{
                'ion-invalid': !validation.ben_account,
                'ion-touched': !validation.ben_account,
              }"
              error-text="Invalid beneficiary account"
              @input="validateForm"
            >
              <div slot="label">
                Beneficiary Account Number
                <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="con_ben_account"
              labelPlacement="floating"
              value="00.00"
              :class="{
                'ion-invalid': !validation.con_ben_account,
                'ion-touched': !validation.con_ben_account,
              }"
              error-text="Invalid beneficiary account"
              @input="validateForm"
            >
              <div slot="label">
                Confirm Beneficiary Account Number
                <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="ifsc_code"
              labelPlacement="floating"
              value="00.00"
              :class="{
                'ion-invalid': !validation.ifsc_code,
                'ion-touched': !validation.ifsc_code,
              }"
              error-text="Invalid IFSC Number"
              @input="validateForm"
            >
              <div slot="label">
                IFSC Number <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="bene_name"
              labelPlacement="floating"
              value="00.00"
              :class="{
                'ion-invalid': !validation.bene_name,
                'ion-touched': !validation.bene_name,
              }"
              error-text="Invalid Beneficiary Name."
              @input="validateForm"
            >
              <div slot="label">
                Beneficiary Name <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

          <ion-item lines="none">
            <ion-input
              v-model="bank_name"
              labelPlacement="floating"
              value="00.00"
              :class="{
                'ion-invalid': !validation.bank_name,
                'ion-touched': !validation.bank_name,
              }"
              error-text="Invalid Bank Name."
              @input="validateForm"
            >
              <div slot="label">
                Bank Name <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-button @click="addbene" expand="full" shape="round"
          >Add</ion-button
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
      userId: "",
      ben_account: "",
      con_ben_account: "",
      ifsc_code: "",
      bene_name: "",
      bank_name: "",
      validation: {
        ben_account: true,
        con_ben_account: true,
        ifsc_code: true,
        bene_name: true,
        bank_name: true,
      },
    };
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  mounted() {
    this.userId = this.loggedInUserId();
  },
  methods: {
    validateForm() {
      this.validation.ben_account =
        !validator.isEmpty(this.ben_account) &&
        // validator.isLength(this.ben_account, { min: 10, max: 14 }) &&
        validator.isAlphanumeric(this.ben_account);
      this.validation.con_ben_account =
        !validator.isEmpty(this.con_ben_account) &&
        // validator.isLength(this.ben_account, { min: 10, max: 14 }) &&
        validator.isAlphanumeric(this.con_ben_account);
      this.validation.ifsc_code =
        !validator.isEmpty(this.ifsc_code) &&
        validator.isLength(this.ifsc_code, { min: 4, max: 11 });
      this.validation.bank_name =
        !validator.isEmpty(this.bank_name) &&
        validator.isLength(this.bank_name, { min: 4, max: 30 });
      this.validation.bene_name =
        !validator.isEmpty(this.bene_name) &&
        validator.isLength(this.bene_name, { min: 4, max: 30 });

      if (!this.validation.ben_account) {
        return "Pleae enter valid beneficiary account number.";
      }
      if (!this.validation.con_ben_account) {
        return "Pleae enter valid confirm beneficiary account number.";
      }

      if (this.ben_account != this.con_ben_account) {
        // alert("missmatch" + this.con_ben_account);
        return "beneficiary account number missmatch.";
      }
      if (!this.validation.ifsc_code) {
        return "Pleae enter valid IFSC code.";
      }
      if (!this.validation.bank_name) {
        return "Pleae enter valid bank name.";
      }
      if (!this.validation.bene_name) {
        return "Pleae enter valid beneficiary name.";
      }
    },
    async addbene() {
      try {
        const errorMessage = this.validateForm();
        if (errorMessage) {
          this.error(errorMessage);
          return;
        }

        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post("/vcp.java/servlet/AddBeneficiary", {
          email: userId,
          bene_account: this.ben_account,
          bene_ifsc: this.ifsc_code,
          bene_name: this.bene_name,
          bene_bankname: this.bank_name,
          type: "A",
        });

        if (response?.data?.message == "Success") {
          this.success("Beneficiary added successfully.");
          this.$router.push("Home");
        } else {
          this.error("failed. Please try again or contact to admin.");
          this.clearUserData();
          this.$router.push("login");
        }
      } catch (error) {
        this.error("failed. Please try again or contact to admin.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },
  },
};
</script>

<style scoped>
ion-input {
  text-transform: uppercase;
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
</style>
