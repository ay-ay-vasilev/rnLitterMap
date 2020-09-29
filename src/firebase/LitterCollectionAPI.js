import * as firebase from "firebase";
import "firebase/firestore";

import moment from "moment";

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

export async function getLitterItems(itemsRetrieved) {
  var litterList = [];

  var snapshot = await firebase
    .firestore()
    .collection("litterCollection")
    .orderBy("date")
    .get();

  snapshot.forEach((doc) => {
    litterList.push({
      cleaned: doc.data().cleaned,
      location: {
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
      },
      size: doc.data().size,
      date: doc.data().date,
      img: doc.data().img,
    });
  });

  itemsRetrieved(litterList);
}

export function uploadLitterItem(item) {
  if (item.img) {
    const fileExtension = item.img.uri.split(".").pop();
    const id = moment(new Date()).format("YYYY-MM-DD-hh-mm-ss");
    const fileName = `${id}.${fileExtension}`;

    var storageRef = firebase.storage().ref(`litter/images/${fileName}`);

    (async () => {
      const response = await fetch(item.img.uri);
      const blob = await response.blob();
      var metadata = {
        contentType: `image/${fileExtension}`,
      };

      storageRef.put(blob, metadata).on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          console.log("snapshot: " + snapshot.state);
          console.log(
            "progress: " +
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          if (snapshot.state === firebase.storage.TaskEvent.SUCCESS) {
            console.log("Success");
          }
        },
        (error) => {
          console.log("image upload error: " + error.code);
        },
        () => {
          storageRef.getDownloadURL().then((downloadUrl) => {
            console.log("File available at: " + downloadUrl);

            addLitterItem({ ...item, img: downloadUrl });
          });
        }
      );
    })();
  }
}

export function addLitterItem(item) {
  firebase
    .firestore()
    .collection("litterCollection")
    .add({
      cleaned: item.cleaned,
      location: item.location,
      size: item.size,
      date: item.date,
      img: item.img,
    })
    .then((data) => console.log("addLitterData: ", data))
    .catch((error) => console.log(error));
}
