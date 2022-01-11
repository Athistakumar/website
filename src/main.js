import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import './components/Store';

import Vuex from "vuex";









const app = createApp(App)

import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Steps from 'primevue/steps';


app.use(Vuex)
app.use(PrimeVue)
app.component("Steps", Steps);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("InputNumber", InputNumber);


app.mount('#app')