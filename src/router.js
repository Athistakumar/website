import { createRouter, createWebHistory } from "vue-router";
import PersonalDetails from './components/PersonalDetails.vue';
import CompanyDetails from './components/CompanyDetails.vue';
import EmailVerification from './components/EmailVerification.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: PersonalDetails
        },
        {
            path: "/CompanyDetails",
            component: CompanyDetails
        },
        {
            path: "/EmailVerification",
            component: EmailVerification,
        }

    ]
});