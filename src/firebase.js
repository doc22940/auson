import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBdjufGK-W3ZrxdJwWdXsIMLbwsAbYoeQI",
  authDomain: "auson-6a66a.firebaseapp.com",
  databaseURL: "https://auson-6a66a.firebaseio.com",
  projectId: "auson-6a66a",
  storageBucket: "auson-6a66a.appspot.com",
  messagingSenderId: "665636253093",
  appId: "1:665636253093:web:90f638cedb8b6a120bcc4c",
};

let instance = null;
export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) {
      return instance;
    }
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}

getFirebase();
