<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Transfer in same bank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-list>
          <ion-item lines="none">
            <ion-input
              v-model="amount"
              labelPlacement="floating"
              value=""
              :class="{
                'ion-invalid': !validation.amount,
                'ion-touched': !validation.amount,
              }"
              error-text="Invalid Amount"
              @input="validateForm"
            >
              <div slot="label">
                Rs <ion-text color="danger">(Required)</ion-text>
              </div>
            </ion-input>
          </ion-item>

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
              v-model="reason"
              labelPlacement="floating"
              value="00.00"
              placeholder="Reason for transfer (optional)"
              @input="validateForm"
            >
              <div slot="label">
                Reason
                <ion-text color="danger"></ion-text>
              </div>
            </ion-input>
          </ion-item>
        </ion-list>
      </div>

      <template v-if="openConfirmationModal">
        <ConfirmationBeforeTransaction
          @userConfirmation="onUserConfirm"
        ></ConfirmationBeforeTransaction>
      </template>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-button
          @click="openUserConfirmationPopup"
          expand="full"
          shape="round"
          >Transfer</ion-button
        >
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from "validator";
import ConfirmationBeforeTransaction from "./ConfirmationBeforeTransaction.vue";

export default {
  watch: {},
  components: { ConfirmationBeforeTransaction },
  data() {
    return {
      userId: "",
      amount: "",
      ben_account: "",
      reason: "",
      openConfirmationModal: false,
      validation: {
        amount: true,
        ben_account: true,
        reason: false,
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
    openUserConfirmationPopup() {
      const errorMessage = this.validateForm();
      if (errorMessage) {
        this.error(errorMessage);
        return;
      }

      this.openConfirmationModal = true;
    },
    validateForm() {
      this.validation.amount = validator.isFloat(this.amount, {
        min: 1.0,
        max: 100000.0,
      });
      this.validation.ben_account =
        !validator.isEmpty(this.ben_account) &&
        validator.isLength(this.ben_account, { min: 10, max: 14 }) &&
        validator.isAlphanumeric(this.ben_account);
      if (!this.validation.amount) {
        return "Pleae enter valid amount to transfer.";
      }
      if (!this.validation.ben_account) {
        return "Pleae enter valid beneficiary account number.";
      }
    },
    onUserConfirm() {
      this.openConfirmationModal = false;
      this.transfer();
    },
    async transfer() {
      try {
        const errorMessage = this.validateForm();
        if (errorMessage) {
          this.error(errorMessage);
          return;
        }

        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post("/vcp.java/servlet/MobileTrasnaction", {
          email: userId,
          same_bank: "Y",
          bene_account: this.ben_account,
          amount: this.amount,
          reason: this.reason,
        });

        if (response?.data?.message == "Success") {
          this.success("Transaction succeed.");
          this.openConfirmationModal = false;
          this.loadderOff();
          this.$router.push("Home");
        } else {
          this.error(
            "Transaction failed. Please try again or Check Account Code."
          );
          // this.clearUserData();
          this.loadderOff();
          // this.$router.push("login");
        }
      } catch (error) {
        this.error("Transaction failed. Please try again or contact to admin.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },
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
