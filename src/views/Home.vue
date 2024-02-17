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
              <ion-card-title>
              Customer Deatails
              </ion-card-title>
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
       
        <!-- Add more cards as needed -->
      </ion-row>
      
      <ion-row>
        <ion-col size="6">
          <ion-card color="warning" router-link="/Statement">
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

      </ion-row>
    </ion-grid>
  </ion-content>

</ion-page>
  
</template>


<script>
import {mailOutline, mailSharp, menuSharp, menuOutline, sendOutline, sendSharp, personAddOutline, personAddSharp} from "ionicons/icons";
export default {
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
    height: 150px;
  }
  ion-card-title {
    font-size: 14px;
  }

   ion-icon {
    font-size: 50px;
  }

  .card-content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>