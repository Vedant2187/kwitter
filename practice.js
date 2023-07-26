const firebaseConfig = {
    apiKey: "AIzaSyC-15w_G6ePak0SyknD2uZnccct5P4SjSg",
    authDomain: "kwitter-f6413.firebaseapp.com",
    databaseURL: "https://kwitter-f6413-default-rtdb.firebaseio.com",
    projectId: "kwitter-f6413",
    storageBucket: "kwitter-f6413.appspot.com",
    messagingSenderId: "303982589387",
    appId: "1:303982589387:web:b119b0d78a14d96516724e"
  };
  
   firebase.initializeApp(firebaseConfig);

   function addUser() {
    user_name = document.getElementById("inp").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "addingUser"
    });
   }