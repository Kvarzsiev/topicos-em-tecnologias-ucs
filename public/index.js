import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
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

const storageRef = ref(storage);

listAll(storageRef)
  .then((res) => {
    const randomIndex = Math.floor(Math.random() * res.items.length);
    getDownloadURL(ref(storage, res.items[randomIndex]["_location"]["path_"]))
      .then((url) => {
        // Or inserted into an <img> element
        const img = document.getElementById("mainImg");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

document.addEventListener("DOMContentLoaded", function () {
  console.log("evento");
  const button = document.querySelector("#botao");
  button.addEventListener("click", handleImageInput);
});

function handleImageInput() {
  try {
    const input = document.getElementById("imageInput");

    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);

      uploadBytes(ref(storage, self.crypto.randomUUID()), file).then(() => {
        window.location.reload();
      });
    }
  } catch (err) {
    console.log("erro", err);
  }
}
