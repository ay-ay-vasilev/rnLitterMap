import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp6ROCZraGPQXM0QT8ISzgJr5YBonHG60",
  authDomain: "littermap-884f1.firebaseapp.com",
  databaseURL: "https://littermap-884f1.firebaseio.com/",
  projectId: "littermap-884f1",
  storageBucket: "gs://littermap-884f1.appspot.com",
  messagingSenderId: "959826770695",
  appId: "1:959826770695:android:6c80839b1956f2854523a2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
