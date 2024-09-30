import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCgJO83K74ep2TG8ZQOnfO9pbv7pmv9gJY",
    authDomain: "currency-converter-dbf18.firebaseapp.com",
    databaseURL: "https://currency-converter-dbf18-default-rtdb.firebaseio.com",
    projectId: "currency-converter-dbf18",
    storageBucket: "currency-converter-dbf18.appspot.com",
    messagingSenderId: "382868885739",
    appId: "1:382868885739:web:c0ead27119ec0f2dc0eeae",
    measurementId: "G-QXFJSNGL3T"
  };

   // Initialize Firebase
 let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

 export default firebase_app;