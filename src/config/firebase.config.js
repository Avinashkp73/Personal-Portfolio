import {initializeApp,getApp,getApps} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNYUoo2nIRIwMsfglUbQjB8k_KJC8GZxA",
    authDomain: "portfolio-5b6e5.firebaseapp.com",
    projectId: "portfolio-5b6e5",
    storageBucket: "portfolio-5b6e5.appspot.com",
    messagingSenderId: "1025583950745",
    appId: "1:1025583950745:web:e351bdf448a8ce5bdfc108"
  };

  const app= getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app, db};