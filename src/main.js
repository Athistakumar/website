import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './components/Store';
import { router } from "./router";


import Vuex from "vuex";




/* Personal Details */




const app = createApp(App)

import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Avatar from 'primevue/avatar';
import Steps from 'primevue/steps';
import Checkbox from 'primevue/checkbox';



app.use(router)
app.use(Vuex)
app.use(PrimeVue)
app.component("Checkbox", Checkbox)
app.component("Avatar", Avatar)
app.component("Steps", Steps);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("InputNumber", InputNumber);


app.mount('#app')