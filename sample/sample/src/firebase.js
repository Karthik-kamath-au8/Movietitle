import  firebase from "firebase";
import "firebase/firestore";
import  "firebase/auth"

    var config =  {
      apiKey: "AIzaSyAtnxnBWUVvr7u7ylGP36hd3u2KPUpgvi4",
      authDomain: "rain-a9160.firebaseapp.com",
      projectId: "rain-a9160",
      storageBucket: "rain-a9160.appspot.com",
      messagingSenderId: "255181030415",
      appId: "1:255181030415:web:dfef4f5cd8782fadfe0f7a",
      measurementId: "G-FVGC5GQGYN"
    }
firebase.initializeApp(config)
export default firebase;