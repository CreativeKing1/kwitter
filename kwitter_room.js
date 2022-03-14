
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC95Rv613ZBJpW5In1Ea9GdqkgnsrLAgYA",
      authDomain: "class---93-b4049.firebaseapp.com",
      databaseURL: "https://class---93-b4049-default-rtdb.firebaseio.com",
      projectId: "class---93-b4049",
      storageBucket: "class---93-b4049.appspot.com",
      messagingSenderId: "289392809182",
      appId: "1:289392809182:web:eabf0e37ff330d4a7b9e4f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
         console.log(Room_names);
         row = "<div class = 'roomName' id = "+Room_names+" omclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logOut() {
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_Name");
}

function addRoom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update(
         {
               purpose: "Adding the room Name"
         }
   );
   localStorage.setItem("room_name",room_name);
   window.location = "kwitter_page.html";
}
//+= adds it again and again


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("name",name);
  window.location = "kwitter_page.html";
}