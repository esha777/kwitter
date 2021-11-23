
const firebaseConfig = {
      apiKey: "AIzaSyChrP8tRqyqdPqTVHPDKXKTuG40P97I3Qg",
      authDomain: "classtest-e8e65.firebaseapp.com",
      databaseURL: "https://classtest-e8e65-default-rtdb.firebaseio.com",
      projectId: "classtest-e8e65",
      storageBucket: "classtest-e8e65.appspot.com",
      messagingSenderId: "829676087919",
      appId: "1:829676087919:web:fdf24a37f0866d9644fb9a",
      measurementId: "G-ZMPVQDC9T1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
