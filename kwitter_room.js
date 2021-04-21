//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD5E2U9mOJzBOK7IJBHTosMhyXn9p_asaM",
      authDomain: "kwitter-bbf25.firebaseapp.com",
      databaseURL: "https://kwitter-bbf25-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbf25",
      storageBucket: "kwitter-bbf25.appspot.com",
      messagingSenderId: "253305006631",
      appId: "1:253305006631:web:8223d2cb0d98a6fcd5bc02",
      measurementId: "G-PL34TBV33T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add_room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  //old code
                  // row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  //changes in code removed spaced after and before + and it worked you can also compare code 
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}