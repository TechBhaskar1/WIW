var firebaseConfig = {
  apiKey: "AIzaSyDEX-z_A9NhtZHQTxOZpTIhNlT9VRBAt1s",
  authDomain: "genderequality-a2003.firebaseapp.com",
  databaseURL: "https://genderequality-a2003-default-rtdb.firebaseio.com",
  projectId: "genderequality-a2003",
  storageBucket: "genderequality-a2003.appspot.com",
  messagingSenderId: "943614717050",
  appId: "1:943614717050:web:e22d32fed24eddff62dfc3"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

//to create account
function register() {
  var userName = document.getElementById("username").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("mail").value;
  var password = document.getElementById("pw").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var genderValue = gender.value;

  if (!userName || !phone || !email || !password || !genderValue) {
    window.alert("All the fields are required");
    return;
  }
  const data = {
    name: userName,
    phone: phone,
    email: email,
    password: password,
    gender: genderValue
  };
  console.log(data);

  db.ref('users').push(data);

  localStorage.setItem('username' , userName);
  localStorage.setItem('gender', genderValue);
  window.location.href = 'home.html';
}

//to login into webpage
function login() {
  var userName = document.getElementById("username").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("mail").value;
  var password = document.getElementById("pw").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var genderValue = gender.value;

  if (!userName || !phone || !email || !password || !genderValue) {
    window.alert("All the fields are required");
    return;
  }

  db.ref('users').once('value')
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const user = childSnapshot.val();
        if (user.name == userName && user.phone == phone && user.email == email && user.password == password && user.gender == genderValue) {
          window.location.href = "home.html";
        }
        else {
          window.alert("Invalid input!!");
          return;
        }
      }
      )
    })
}

//to navigate to signup page to create new account
function createN() {
  window.location.href = "index.html"
}

//to navigate to login page to login into existing account
function loginN() {
  window.location.href = "login.html"
}

