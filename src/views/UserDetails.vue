<template>
  <ion-page>
    <ion-loading class="custom-loading" :isOpen="showLoader"> </ion-loading>

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="container">
        <ion-list>
          <ion-item>
            <ion-label>
              <h3>Name</h3>
              <p>{{userDetails.name}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>balance</h3>
              <p>Rs {{userDetails.balance}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>Email</h3>
              <p>{{userDetails.email_id || "-"}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>Mobile No</h3>
              <p>{{userDetails.phonemobile || "-"}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>Address</h3>
              <p v-if="userDetails.address1">{{userDetails.address1}}</p>
              <p v-if="userDetails.address2">{{userDetails.address2}}</p>
              <p v-if="userDetails.address3">{{userDetails.address3}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>City</h3>
              <p>{{userDetails.city || "-"}}</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              <h3>Mobile No</h3>
              <p>{{userDetails.zip || "-"}}</p>
            </ion-label>
          </ion-item>

        </ion-list>
      </div>
    </ion-content>

    <!-- <ion-footer>
      <ion-toolbar>
        <ion-button @click="login" expand="full" shape="round"
          >Login</ion-button
        >
      </ion-toolbar>
    </ion-footer> -->
  </ion-page>
</template>

<script>
import api from "@/api";
import validator from 'validator';

export default {
  watch: {},
  data() {
    return {
      userDetails: {}
    };
  },
  computed: {
    isFormValid() {
      return [10, 12].includes(this.email?.length) && this.password?.length > 3;
    },
  },
  mounted() {
    this.fetchUserDetails();
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
    async fetchUserDetails() {
      try {
        this.loadderOn();
        const userId = this.loggedInUserId();
        const response = await api.post('/vcp.java/servlet/MobileAccountDetails', {
          "email": userId
        });

        if(response?.data?.name) {
          this.userDetails = response.data;
        } else {
          this.error("Something went wrong while fetching user details. Please login again.")
          this.clearUserData();
          this.$router.push('login');
        }
      } catch (error) {
        this.error("Something went wrong while fetching user details. Please login again.")
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
