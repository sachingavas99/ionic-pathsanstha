<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Statement</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-grid v-if="transactions.length">
          <ion-row v-for="(transaction, index) in transactions" :key="index">
            <ion-col>1</ion-col>
            <ion-col>2</ion-col>
            <ion-col>3</ion-col>
            <ion-col>4</ion-col>
            <ion-col>5</ion-col>
            <ion-col>6</ion-col>
          </ion-row>
        </ion-grid>

        <ion-list v-else>
          <ion-item>
            <ion-label>
              <h3>No transactions were made earlier.</h3>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from 'validator';

export default {
  watch: {},
  data() {
    return {
      transactions: []
    };
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    validateForm() {
      this.validation.email = !validator.isEmpty(this.email);
      this.validation.passward = !validator.isEmpty(this.password);
      if(!this.validation.email) {
        return "Pleae enter valid email";
      }
      if(!this.validation.passward) {
        return "Pleae enter valid password";
      }
    },
    async fetchTransactions() {
      try {
        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post('/vcp.java/servlet/MobileStatement', {
          "email": userId
        });

        if(response?.data) {
          this.transactions = response.data;
        }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.")
        this.clearUserData();
        this.$router.push('login');
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
