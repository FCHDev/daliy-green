import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage"
import {getDatabase} from "firebase/database";
// import {getAuth} from "firebase/auth";

const configInfos = {
    apiKey: process.env.REACT_APP_CLE_API,
    authDomain: "dailygreen-f7cd1.firebaseapp.com",
    databaseURL: "https://dailygreen-f7cd1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dailygreen-f7cd1",
    storageBucket: "dailygreen-f7cd1.appspot.com",
    messagingSenderId: "30616010209",
    appId: "1:30616010209:web:c1d86dcdff9035a87ca6a0"
};
export const appFirebase = initializeApp(configInfos);
export const storage = getStorage(appFirebase)
export const db = getDatabase(appFirebase);
// export const auth = getAuth(appFirebase);
