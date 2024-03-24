import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdHyPmuLCW2rDIvbqYtxUNIsELIDvOx5M",
  authDomain: "topicos-em-tecnologias-ucs.firebaseapp.com",
  databaseURL: "https://topicos-em-tecnologias-ucs-default-rtdb.firebaseio.com",
  projectId: "topicos-em-tecnologias-ucs",
  storageBucket: "topicos-em-tecnologias-ucs.appspot.com",
  messagingSenderId: "996680749929",
  appId: "1:996680749929:web:ff8d95949e878f2ef0a3f8",
  measurementId: "G-RW35E0XL7P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

const allFilesRef = ref(storage);

getDownloadURL(ref(storage, "borracho.png"))
  .then((url) => {
    // Or inserted into an <img> element
    const img = document.getElementById("mainImg");
    img.setAttribute("src", url);
  })
  .catch((error) => {
    console.log(error);
  });

// Find all the prefixes and items.
// listAll(allFilesRef)
//   .then((res) => {
//     console.log("then");
//     // res.prefixes.forEach((folderRef) => {
//     //   // All the prefixes under listRef.
//     //   // You may call listAll() recursively on them.
//     // });
//     res.items.forEach((itemRef) => {
//       // All the items under listRef.
//       console.log("item ", itemRef);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
