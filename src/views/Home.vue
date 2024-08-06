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
            <ion-card color="primary" router-link="/UserDetails">
              <ion-card-header>
                <ion-card-title> Customer Deatails </ion-card-title>
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
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="secondary" router-link="/SameBankTransfer">
              <ion-card-header>
                <ion-card-title>Same Bank Transfer</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    aria-hidden="true"
                    slot="start"
                    :ios="sendOutline"
                    :md="sendSharp"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card color="tertiary" router-link="/OtherBankTransfer">
              <ion-card-header>
                <ion-card-title>Other Bank Transfer</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    aria-hidden="true"
                    slot="start"
                    :ios="sendOutline"
                    :md="sendSharp"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="medium" router-link="/AccountsDetails">
              <ion-card-header>
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
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card color="success" router-link="/AddBeneficiary">
              <ion-card-header>
                <ion-card-title>Add Beneficiary</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    aria-hidden="true"
                    slot="start"
                    :ios="personAddOutline"
                    :md="personAddSharp"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="danger" router-link="/RemoveBeneficiary">
              <ion-card-header>
                <ion-card-title>Remove Beneficiary</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="closeCircleSharp"
                    :md="closeCircleOutline"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card class="statementcolor" router-link="/Statement">
              <ion-card-header>
                <ion-card-title>Statement</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="menuSharp"
                    :md="menuOutline"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="warning" router-link="/FastTag">
              <ion-card-header>
                <ion-card-title>Fast Tag</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="bookmarkSharp"
                    :md="bookmarkOutline"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="6">
            <ion-card color="dark" router-link="/QRCollection">
              <ion-card-header>
                <ion-card-title>QR Collection</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="qrCodeSharp"
                    :md="qrCodeOutline"
                  ></ion-icon>
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card color="danger" router-link="/Logout">
              <ion-card-header>
                <ion-card-title>Logout</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <div class="card-content-wrapper">
                  <ion-icon
                    slot="start"
                    :ios="powerSharp"
                    :md="powerOutline"
                  ></ion-icon>
                </div>
              </ion-card-content>
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
  background-color: darkblue;
  text-align: center;
}
.statementcolor {
  background-color: wheat;
}
/* .card {
  border-radius: 20px;
} */
</style>
