
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAsKQypxrncLGryVLEihhNNyoTTHGARYSQ",
    authDomain: "class-test-f7788.firebaseapp.com",
    databaseURL: "https://class-test-f7788-default-rtdb.firebaseio.com",
    projectId: "class-test-f7788",
    storageBucket: "class-test-f7788.appspot.com",
    messagingSenderId: "194975904726",
    appId: "1:194975904726:web:6dc8efe023206603096a77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
