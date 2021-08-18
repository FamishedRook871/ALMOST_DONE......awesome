var firebaseConfig = {
    apiKey: "AIzaSyDasuLEhoow-jcZn51F2OsmsXG5sPiz4lI",
    authDomain: "kwitter-d684a.firebaseapp.com",
    databaseURL: "https://kwitter-d684a-default-rtdb.firebaseio.com",
    projectId: "kwitter-d684a",
    storageBucket: "kwitter-d684a.appspot.com",
    messagingSenderId: "377185623197",
    appId: "1:377185623197:web:48575a1bc3c98401620874"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
      })

      document.getElementById("msg").value = "";
    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();