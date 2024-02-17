<template>
<ion-page>

  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>Dashboard</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col size="6">
          <ion-card color="primary" router-link="/UserDetails">
            <ion-card-header>
              <!-- <ion-card-title>Account Deatails</ion-card-title> -->
               <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="mailOutline"
                  :md="mailSharp"
                ></ion-icon>
            </ion-card-header>
            <ion-card-content>
              Customer Deatails
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col size="6">
          <ion-card color="secondary" router-link="/SameBankTransfer">
            <ion-card-header>
              <!-- <ion-card-title>Same Bank Transfer</ion-card-title> -->
              <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="sendOutline"
                  :md="sendSharp"
                ></ion-icon>
            </ion-card-header>
            <ion-card-content>
              Same Bank Transfer
            </ion-card-content>
          </ion-card>
        </ion-col>
       
      </ion-row>
      <ion-row>
         <ion-col size="6">
          <ion-card color="tertiary" router-link="/OtherBankTransfer">
            <ion-card-header>
              <!-- <ion-card-title>Other Bank Transfer</ion-card-title> -->
               <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="sendOutline"
                  :md="sendSharp"
                ></ion-icon>
            </ion-card-header>
            <ion-card-content>
              Other Bank Transfer
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col size="6">
          <ion-card color="success" router-link="/AddBeneficiary">
            <ion-card-header>
              <!-- <ion-card-title>Add Beneficiary</ion-card-title> -->
               <ion-icon
                  aria-hidden="true"
                  slot="start"
                  :ios="personAddOutline"
                  :md="personAddSharp"
                ></ion-icon>
            </ion-card-header>
             <ion-card-content>
              Add Beneficiary
            </ion-card-content>
          </ion-card>
        </ion-col>
       
        <!-- Add more cards as needed -->
      </ion-row>
      
      <ion-row>
        <ion-col size="6">
          <ion-card color="warning" router-link="/Statement">
            <ion-card-header>
              <!-- <ion-icon name="document-outline" slot="start"></ion-icon> -->
              <ion-icon
                  slot="start"
                  :ios="powerSharp"
                  :md="powerOutline"
                ></ion-icon>
              <!-- <ion-card-title>Statement</ion-card-title> -->
            </ion-card-header>
            <ion-card-content>
              Statement
            </ion-card-content>
          </ion-card>
        </ion-col>

      </ion-row>
    </ion-grid>
  </ion-content>

</ion-page>
  
</template>


<script lang="ts">
import {mailOutline, mailSharp, powerSharp, powerOutline, sendOutline, sendSharp, personAddOutline, personAddSharp} from "ionicons/icons";
export default {
  watch: {},
  data() {
    return {
      mailOutline,
      mailSharp,
      powerSharp,
      powerOutline,
      sendOutline,
      sendSharp,
      personAddOutline,
      personAddSharp
    };
  },
  methods: {},
  computed: {
  },
  created() {
  },
};
</script>
<style scoped>
ion-card {
  height: 100px;
}
</style>