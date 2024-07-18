import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

import router from "./router"

import "./assets/main.css"
import "./assets/index.css"

import PrimeVue from "primevue/config";
import "primeicons/primeicons.css" //icons
import "primevue/resources/primevue.min.css" //core css
import "primevue/resources/themes/lara-light-purple/theme.css" //theme
//prime flex

import Toast from "primevue/toast"
import ToastService from "primevue/toastservice"
import ConfirmDialog from "primevue/confirmdialog"
import ConfirmationService from "primevue/confirmationservice"

const app = createApp(App);

app.use(PrimeVue)
app.use(ToastService)
app.use(ConfirmationService)
app.use(router)
app.use(store)

app.component("Toast", Toast)
app.component("ConfirmDialog", ConfirmDialog)

app.mount("#app")
