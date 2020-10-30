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
    .orderBy("date", "desc")
    .get();

  snapshot.forEach((doc) => {
    litterList.push({
      cleaned: doc.data().cleaned,
      location: {
        latitude: doc.data().location.latitude,
        longitude: doc.data().location.longitude,
      },
      size: doc.data().size,
      date: doc.data().date.toDate().toISOString(),
      litterPhotos: doc.data().litterPhotos,
      cleanedPhotos: doc.data().cleaned ? doc.data().cleanedPhotos : undefined,
    });
  });

  itemsRetrieved(litterList);
}

export function uploadLitterItem(item, onUploadFinish) {
  if (item.litterPhotos) {
    const fileExtension = item.litterPhotos.uri.split(".").pop();
    const id = moment(new Date()).format("YYYY-MM-DD-hh-mm-ss");
    const fileName = `${id}.${fileExtension}`;

    var storageRef = firebase.storage().ref(`images/litter/${fileName}`);

    (async () => {
      const response = await fetch(item.litterPhotos.uri);
      const blob = await response.blob();
      var metadata = {
        contentType: `image/${fileExtension}`,
      };

      storageRef.put(blob, metadata).on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          if (snapshot.state === firebase.storage.TaskEvent.SUCCESS) {
            console.log("Success");
          }
        },
        (error) => {
          console.log("image upload error: " + error.code);
        },
        () => {
          storageRef.getDownloadURL().then((downloadUrl) => {
            addLitterItem(
              { ...item, litterPhotos: downloadUrl },
              onUploadFinish
            );
          });
        }
      );
    })();
  }
}

export function addLitterItem(item, onAddFinish) {
  let uploadItem = {
    cleaned: item.cleaned,
    location: item.location,
    size: item.size,
    date: firebase.firestore.Timestamp.now(),
    litterPhotos: item.litterPhotos,
  };

  firebase
    .firestore()
    .collection("litterCollection")
    .add(uploadItem)
    .then((snapshot) => {
      (uploadItem.id = snapshot.id), snapshot.set(uploadItem);
    })
    .then(onAddFinish())
    .catch((error) => console.log(error));
}
