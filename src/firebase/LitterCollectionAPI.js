import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp6ROCZraGPQXM0QT8ISzgJr5YBonHG60",
  authDomain: "littermap-884f1.firebaseapp.com",
  databaseURL: "https://littermap-884f1.firebaseio.com/",
  projectId: "littermap-884f1",
  storageBucket: "gs://littermap-884f1.appspot.com",
  messagingSenderId: "959826770695",
  appId: "1:959826770695:android:6c80839b1956f2854523a2",
};

firebase.initializeApp(firebaseConfig);

export function addLitterItem(item, addComplete) {
  firebase
    .firestore()
    .collection("litterCollection")
    .add({
      cleared: item.cleared,
      location: item.location,
      size: item.size,
      date: item.date,
      img: item.img,
    })
    .then((data) => addComplete(data))
    .catch((error) => console.log(error));
}

export async function getLitterItems(itemsRetrieved) {
  var litterList = [];

  var snapshot = await firebase
    .firestore()
    .collection("litterCollection")
    .orderBy("date")
    .get();

  snapshot.forEach((doc) => {
    litterList.push(doc.data());
  });

  itemsRetrieved(litterList);
}
