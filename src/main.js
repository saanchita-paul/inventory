import { createApp } from 'vue'
import App from './App.vue'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Vuetify
import 'vuetify/styles'
import { VDataTable, VDataTableServer} from 'vuetify/labs/VDataTable'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import {VuetifyDateAdapter} from "vuetify/labs/date/adapters/vuetify";


import router from "./router/index.js";
const vuetify = createVuetify({

    components: {
        ...components,
        VDataTable,
        VDataTableServer,

    },
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
        aliases,
        sets: {
            mdi,
        }
    },
    date:{
        adapter: VuetifyDateAdapter
    },
})
const app = createApp(App)

app.use(vuetify).use(router).mount('#app')