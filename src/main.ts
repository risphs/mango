import mongoose from "mongoose";
import { createApp } from "vue";
import { setSchema } from "./server/schema";
import App from "./App.vue";

export const uri: string = 'mongodb+srv://admin:1234@testing.81kiq.mongodb.net/?retryWrites=true&w=majority'; // Config

createApp(App).mount('#app');

setSchema(new mongoose.Schema({name: String, age: Number}), 'test');