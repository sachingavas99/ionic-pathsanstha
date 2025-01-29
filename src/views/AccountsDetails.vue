<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Accounts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-grid class="header-col">
          <ion-row>
            <ion-col>ACCOUNT</ion-col>
            <ion-col>ACCOUNT TYPE</ion-col>
            <ion-col>BALANCE</ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid v-if="transactions.length" class="data-col">
          <ion-row v-for="(transaction, index) in transactions" :key="index">
            <ion-col @click="selectAccount(transaction)">
              {{ transaction.ACCOUNT }}
            </ion-col>
            <ion-col class="colname">{{ transaction.TYPE_NAME }}</ion-col>
            <ion-col>{{ transaction.BALANCE }}</ion-col>
          </ion-row>
        </ion-grid>

        <ion-list v-else>
          <ion-item>
            <ion-label>
              <h3>No transactions were made earlier.</h3>
            </ion-label>
          </ion-item>
        </ion-list>

        <!-- Account Details Section (Conditionally displayed) -->
        <ion-grid v-if="selectedAccount">
          <ion-row>
            <ion-col>
              <h3>Account Details</h3>
              <p><strong>Account:</strong> {{ selectedAccount.ACCOUNT }}</p>
              <p>
                <strong>Account Type:</strong> {{ selectedAccount.TYPE_NAME }}
              </p>
              <p><strong>Balance:</strong> {{ selectedAccount.BALANCE }}</p>
              <!-- You can add more details of the selected account here -->
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from "validator";

export default {
  data() {
    return {
      transactions: [],
      selectedAccount: null, // Track the selected account
    };
  },
  mounted() {
    this.fetchTransactions();
  },
  methods: {
    async fetchTransactions() {
      try {
        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post(
          "/varad_path.java/servlet/MobileStatement",
          {
            email: userId,
            type: "C",
          }
        );

        if (response.data && response.data.statement) {
          const statementArray = JSON.parse(response.data.statement);
          if (Array.isArray(statementArray)) {
            this.transactions = statementArray;
          } else {
            console.error("Invalid statement format:", response.data.statement);
          }
        } else {
          console.log("No transactions found.");
        }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },
    selectAccount(account) {
      this.selectedAccount = account; // Set the selected account
    },
  },
};
</script>

<style scoped>
.header-col {
  font-weight: bold;
  text-align: center;
}
ion-title {
  color: #7c89e3;
  font-size: 25px;
}
.data-col {
  font-size: 12px;
  text-align: center;
}
.colname {
  font-size: 12px;
  text-align: left;
}
</style>
