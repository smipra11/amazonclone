import firebase from  "firebase"
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCVrT7CzceYVzgJnTKHt9NOO2Ktd75v1z4",
  authDomain: "clone-3a4f7.firebaseapp.com",
  databaseURL: "https://clone-3a4f7.firebaseio.com",
  projectId: "clone-3a4f7",
  storageBucket: "clone-3a4f7.appspot.com",
  messagingSenderId: "307291593397",
  appId: "1:307291593397:web:2cb65416fca2bd78c6bcfc",
  measurementId: "G-Z2GZ8MB87Z"

})

const auth = firebase.auth();

export {auth}