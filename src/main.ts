import { createApp } from "vue";
import { connectToDatabase } from "./server/connect";
import App from "./App.vue";

export const uri: string = 'mongodb+srv://admin:1234@testing.81kiq.mongodb.net/?retryWrites=true&w=majority';

createApp(App).mount('#app');

connectToDatabase(uri);