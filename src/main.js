import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixin from "./mixin";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonList,
  IonLabel,
  IonItem,
  IonText,
  IonFooter,
  IonButton,
  IonLoading,
  IonGrid,
  IonRow,
  IonCard,
  IonCol,
  IonIcon,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/vue";

const app = createApp(App).use(IonicVue).use(router);
app.component("ion-buttons", IonButtons);
app.component("ion-content", IonContent);
app.component("ion-header", IonHeader);
app.component("ion-menu-button", IonMenuButton);
app.component("ion-page", IonPage);
app.component("ion-title", IonTitle);
app.component("ion-toolbar", IonToolbar);
app.component("ion-input", IonInput);
app.component("ion-list", IonList);
app.component("ion-label", IonLabel);
app.component("ion-item", IonItem);
app.component("ion-text", IonText);
app.component("ion-footer", IonFooter);
app.component("ion-button", IonButton);
app.component("ion-loading", IonLoading);
app.component("ion-grid", IonGrid);
app.component("ion-row", IonRow);
app.component("ion-card", IonCard);
app.component("ion-col", IonCol);
app.component("ion-icon", IonIcon);
app.component("ion-card-header", IonCardHeader);
app.component("ion-card-content", IonCardContent);
app.component("ion-card-title", IonCardTitle);

app.mixin(mixin);

router.isReady().then(() => {
  app.mount("#app");
});
