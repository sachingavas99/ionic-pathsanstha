<template>
  <ion-page color="primary">
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>In Progress</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from "validator";

export default {
  watch: {},
  data() {
    return {};
  },
};
</script>
