import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:2a3ea7d7adfb586d9f6321",
    measurementId: "G-021SCBJMEJ"
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;



new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");