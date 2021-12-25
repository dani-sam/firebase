import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyACVc6GGtzpsqPZ7tmblCae8HMKo2TtlU4",
    authDomain: "fir-ce380.firebaseapp.com",
    projectId: "fir-ce380",
    storageBucket: "fir-ce380.appspot.com",
    messagingSenderId: "530706583195",
    appId: "1:530706583195:web:566cc9dc99a6186a35403e",
    measurementId: "G-VDQQ0CRZS6"
  };

  const app = initializeApp(firebaseConfig);
 export const db =getFirestore(app)


