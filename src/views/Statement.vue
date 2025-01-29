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
        <!-- <ion-grid class="header-col">
          <ion-row>
            <ion-col>ACCOUNT</ion-col>
            <ion-col>ACCOUNT TYPE</ion-col>
            <ion-col>BALANCE</ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid v-if="accounts.length" class="data-col">
          <ion-row v-for="(account, index) in accounts" :key="index">
            <ion-col @click="selectAccount(account)">
              {{ account.ACCOUNT }}
            </ion-col>
            <ion-col class="colname">{{ account.TYPE_NAME }}</ion-col>
            <ion-col>{{ account.BALANCE }}</ion-col>
          </ion-row>
        </ion-grid>

        <ion-list v-else>
          <ion-item>
            <ion-label>
              <h3>Accounts Not Found.</h3>
            </ion-label>
          </ion-item>
        </ion-list> -->

        <ion-grid class="header-col">
          <ion-row>
            <ion-col>ACCOUNT</ion-col>
            <ion-col>ACCOUNT TYPE</ion-col>
            <ion-col>BALANCE</ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid v-if="accounts.length" class="data-col">
          <ion-row
            v-for="(account, index) in accounts"
            :key="index"
            :class="{ 'highlighted-row': selectedAccount === account }"
          >
            <ion-col @click="selectAccount(account)">
              {{ account.ACCOUNT }}
            </ion-col>
            <ion-col class="colname">{{ account.TYPE_NAME }}</ion-col>
            <ion-col>{{ account.BALANCE }}</ion-col>
          </ion-row>
        </ion-grid>

        <ion-list v-else>
          <ion-item>
            <ion-label>
              <h3>Accounts Not Found.</h3>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-grid v-if="selectedAccount">
          <ion-grid class="header-col">
            <ion-row>
              <ion-col>Date</ion-col>
              <ion-col>Particular</ion-col>
              <ion-col>Amount</ion-col>
              <ion-col>Type</ion-col>
              <ion-col>Balance</ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid v-if="transactions.length" class="data-col">
            <ion-row v-for="(transaction, index) in transactions" :key="index">
              <ion-col>{{ transaction.DATE }}</ion-col>
              <ion-col>{{ transaction.PARTICULAR }}</ion-col>
              <ion-col>{{ transaction.AMOUNT }}</ion-col>
              <ion-col>{{ transaction.TRNTYPE }}</ion-col>
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
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from "validator";

export default {
  watch: {},
  data() {
    return {
      transactions: [],
      accounts: [],
      selectedAccount: null, // Track the selected account
    };
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  mounted() {
    // this.fetchTransactions();
    this.fetchAccounts();
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
    async fetchTransactions() {
      try {
        this.loadderOn();
        // console.log("tr===", this.ben_account);
        const userId = this.loggedInUserId();
        const response = await api.post(
          "/varad_path.java/servlet/MobileStatement",
          {
            // email: userId,
            bene_account: this.ben_account,
            type: "A",
          }
        );

        // console.log(JSON.stringify(response?.data));
        // console.log("Response:", response.data);

        if (response.data && response.data.statement) {
          // Parse the JSON string into an array of objects
          const statementArray = JSON.parse(response.data.statement);

          if (Array.isArray(statementArray)) {
            this.transactions = statementArray;
          } else {
            console.error("Invalid statement format:", response.data.statement);
          }
        } else {
          console.log("No transactions found.");
        }

        // console.log(JSON.stringify(response?.data));
        // console.log(response?.data?.statement);
        // if (response?.data) {
        //   this.transactions = response.data.statement;
        //   console.log("tra" + this.transactions);
        //   // this.$emit("transactions", { transactions });
        // }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },

    async fetchAccounts() {
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

        // console.log(JSON.stringify(response?.data));
        // console.log("Response:", response.data);

        if (response.data && response.data.statement) {
          // Parse the JSON string into an array of objects
          const statementArray = JSON.parse(response.data.statement);

          if (Array.isArray(statementArray)) {
            this.accounts = statementArray;
          } else {
            console.error("Invalid statement format:", response.data.statement);
          }
        } else {
          console.log("No transactions found.");
        }

        // console.log(JSON.stringify(response?.data));
        // console.log(response?.data?.statement);
        // if (response?.data) {
        //   this.transactions = response.data.statement;
        //   console.log("tra" + this.transactions);
        //   // this.$emit("transactions", { transactions });
        // }
      } catch (error) {
        this.error("Something went wrong while fetching transaction details.");
        this.clearUserData();
        this.$router.push("login");
      }
      this.loadderOff();
    },
    selectAccount(account) {
      this.selectedAccount = account; // Set the selected account
      this.ben_account = account.ACCOUNT;
      // console.log("===", this.ben_account);
      this.fetchTransactions();
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

.highlighted-row {
  background-color: #93c5f0; /* Light blue background */
  font-family: "Arial", sans-serif; /* Change to a different font */
  font-weight: bold; /* Make text bold */
  color: #4a90e2; /* Change the text color */
  cursor: pointer; /* Make it clear that it's clickable */
}

/* Styling for the headers */
.header-col {
  font-weight: bold;
  text-align: center;
  background-color: #52545d; /* Light purple header */
  color: white; /* Text color for headers */
}

/* Styling for the content grid */
.data-col {
  font-size: 14px;
  text-align: center;
}

.colname {
  font-style: normal;
  color: #0f0e0e; /* Lighter color for account type */
}
</style>
