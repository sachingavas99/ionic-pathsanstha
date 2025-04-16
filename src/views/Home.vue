<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>
          <div class="title-wrapper">
            <ion-text>Dashboard</ion-text>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <!-- <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> -->
        <ion-row>
          <ion-col size="12">
            <ion-card color="medium" class="head" router-link="/UserDetails">
              <ion-card-header class="header">
                <ion-card-title>
                  <p
                    style="
                      color: yellow;
                      font-weight: bold;
                      font-size: 15px;
                      margin-top: 0;
                    "
                  >
                    Malkapur Urban Co-Op Credit Society Ltd.
                  </p>
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <!-- <ion-card color="primary" router-link="/UserDetails">
              <ion-card-header>
                <ion-card-title> Customer Details </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    aria-hidden="true"
                    :ios="mailOutline"
                    :md="mailSharp"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card> -->
            <ion-card class="dashboard-card account" router-link="/UserDetails">
              <div class="card-icon">
                <ion-icon :icon="mailOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Customer Details</h3>
                <p>View your profile information</p>
              </div>
            </ion-card>
            <!-- <div class="card-container">
              <div class="dashboard-card account" router-link="/UserDetails">
                <div class="card-icon">
                  <ion-icon :icon="mailOutline"></ion-icon>
                </div>
                <div class="card-details">
                  <h3>Customer Details</h3>
                  <p>View your profile information</p>
                </div>
              </div>
            </div> -->
          </ion-col>
          <ion-col size="6">
            <ion-card
              class="dashboard-card transfer"
              router-link="/SameBankTransfer"
            >
              <div class="card-icon">
                <ion-icon :icon="sendOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Same Bank Transfer</h3>
                <p>Transfer within our bank</p>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card
              class="dashboard-card transfer"
              router-link="/OtherBankTransfer"
            >
              <div class="card-icon">
                <ion-icon :icon="sendOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Other Bank Transfer</h3>
                <p>Transfer to external banks</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card
              class="dashboard-card account"
              router-link="/AccountsDetails"
            >
              <div class="card-icon">
                <ion-icon :icon="accessibilityOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Accounts</h3>
                <p>View your account details</p>
              </div>
              <!-- <ion-card-header>
                <ion-card-title>Accounts</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="accessibilitySharp"
                    :md="accessibilityOutline"
                  ></ion-icon>
                </div>
              </ion-card-content> -->
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card
              class="dashboard-card beneficiary"
              router-link="/AddBeneficiary"
            >
              <div class="card-icon">
                <ion-icon :icon="personAddOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Add Beneficiary</h3>
                <p>Add a new payment recipient</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card
              class="dashboard-card beneficiary"
              router-link="/RemoveBeneficiary"
            >
              <div class="card-icon">
                <ion-icon :icon="closeCircleOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Remove Beneficiary</h3>
                <p>Remove existing recipients</p>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card class="dashboard-card account" router-link="/Statement">
              <div class="card-icon">
                <ion-icon :icon="menuOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Statement</h3>
                <p>View your transaction history</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="dashboard-card services" router-link="/FastTag">
              <div class="card-icon">
                <ion-icon :icon="bookmarkOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Fast Tag</h3>
                <p>Manage your FastTag account</p>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <ion-card
              class="dashboard-card services"
              router-link="/QRCollection"
            >
              <div class="card-icon">
                <ion-icon :icon="qrCodeOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>QR Collection</h3>
                <p>Generate payment QR codes</p>
              </div>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="dashboard-card logout" router-link="/Logout">
              <div class="card-icon">
                <ion-icon :icon="powerOutline"></ion-icon>
              </div>
              <div class="card-details">
                <h3>Logout</h3>
                <p>Secure exit from account</p>
              </div>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import { App as CapacitorApp } from "@capacitor/app";
import { useRouter } from "vue-router";
import myMixin from "@/mixin";

import {
  mailOutline,
  mailSharp,
  menuSharp,
  menuOutline,
  sendOutline,
  sendSharp,
  personAddOutline,
  personAddSharp,
  accessibilityOutline,
  accessibilitySharp,
  qrCodeOutline,
  qrCodeSharp,
  bookmarkOutline,
  bookmarkSharp,
  closeCircleOutline,
  closeCircleSharp,
  powerOutline,
  powerSharp,
} from "ionicons/icons";
export default {
  mixins: [myMixin],
  watch: {},
  data() {
    return {
      mailOutline,
      mailSharp,
      menuSharp,
      menuOutline,
      sendOutline,
      sendSharp,
      personAddOutline,
      personAddSharp,
      accessibilityOutline,
      accessibilitySharp,
      qrCodeOutline,
      qrCodeSharp,
      bookmarkOutline,
      bookmarkSharp,
      closeCircleOutline,
      closeCircleSharp,
      powerOutline,
      powerSharp,
    };
  },
  methods: {},
  computed: {},
  created() {},

  setup() {
    const router = useRouter();

    const handleBackButton = () => {
      console.log("Back button pressed");
      console.log("Current route name:", router.currentRoute.value.name);
      if (router.currentRoute.value.name === "Home") {
        console.log("Exiting app");
        localStorage.removeItem("token"); // Clear user token
        localStorage.setItem("token", "");
        localStorage.setItem("userDetails", "");
        CapacitorApp.exitApp(); // Exit the app
      }
      if (router.currentRoute.value.name === "Logout") {
        console.log("Exiting app");
        localStorage.removeItem("token"); // Clear user token
        localStorage.setItem("token", "");
        localStorage.setItem("userDetails", "");
        CapacitorApp.exitApp(); // Exit the app
      }
    };

    const handleAppStateChange = (state) => {
      console.log("App state changed:", state);
      if (state.isActive === false) {
        console.log("App minimized");
        localStorage.removeItem("token"); // Clear user token
        localStorage.setItem("token", "");
        localStorage.setItem("userDetails", "");
        CapacitorApp.exitApp(); // Exit the app when minimized
      }
    };

    onMounted(() => {
      console.log("Adding back button listener");
      CapacitorApp.addListener("backButton", handleBackButton);
      CapacitorApp.addListener("appStateChange", handleAppStateChange);
    });

    onBeforeUnmount(() => {
      console.log("Removing back button listener");
      CapacitorApp.removeAllListeners();
    });

    return {};
  },
};
</script>
<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.dashboard-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 140px;
}

.dashboard-card:active {
  transform: scale(0.98);
}

.card-icon {
  margin-bottom: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.card-icon ion-icon {
  font-size: 24px;
}

.card-details h3 {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
}

.card-details p {
  margin: 0;
  font-size: 12px;
  color: #64748b;
}

/* Account cards */
.dashboard-card.account .card-icon {
  background-color: rgba(52, 152, 219, 0.15);
  color: #3498db;
}
/* Transfer cards */
.dashboard-card.transfer .card-icon {
  background-color: rgba(46, 204, 113, 0.15);
  color: #2ecc71;
}

/* Beneficiary cards */
.dashboard-card.beneficiary .card-icon {
  background-color: rgba(155, 89, 182, 0.15);
  color: #9b59b6;
}

/* Services cards */
.dashboard-card.services .card-icon {
  background-color: rgba(243, 156, 18, 0.15);
  color: #f39c12;
}

/* Logout card */
.dashboard-card.logout .card-icon {
  background-color: rgba(231, 76, 60, 0.15);
  color: #e74c3c;
}
ion-card {
  height: 120px;
  border-radius: 20px;
}
ion-card-title {
  font-size: 14px;
}

ion-icon {
  font-size: 50px;
}

ion-text {
  font-weight: bolder;
}

.card-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-wrapper ion-text {
  font-size: 18px;
}
.head {
  height: 50px;
  border-radius: 20px;
}

.header {
  /* background-color: darkblue; */
  --background: linear-gradient(120deg, #4b6cb7, #182848);

  text-align: center;
}
.statementcolor {
  background-color: wheat;
}

/* .card {
  border-radius: 20px;
} */
</style>
