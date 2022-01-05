import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';



const app = createApp(App)

import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';



app.use(PrimeVue)
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Button", Button);

app.mount('#app')