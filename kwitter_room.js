
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

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_room.html"
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + room_name);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}