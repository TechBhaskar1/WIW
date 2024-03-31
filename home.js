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

var parentDiv = document.getElementById("parent")
var usernameL = localStorage.getItem('username');
var genderL = localStorage.getItem('gender');
var username = document.getElementById('username');
username.innerText = "Username :" + usernameL;

db.ref("product").once('value')
  .then((snapshot)=>{
    snapshot.forEach((childSnapshot)=>{
        const product = childSnapshot.val();
        divX = '<div class="main"><h1 id="topic">'+product.product+'</h1><img id="image"  width="80%" src="'+product.image+ '"><br><br> <p id="price">'+product.price+'</p><label>Product ID :</label><p id = "ID">'+product.id+'</p><button id="buy" type="button" onclick="buy()">Buy Now</button></div>';
        parentDiv.innerHTML += divX;
    })
    const mainDiv = document.querySelectorAll('.main');

    mainDiv.forEach(div => {
      div.addEventListener('click' , function(){
        const idText = this.querySelector('#ID');
        if(idText){
         const mainID = idText.textContent;
         console.log(mainID)
         localStorage.setItem("ID" , mainID);
        }
      })
    })
    
  })


function create(){
    if(genderL ==="male"){
        window.location.href = "serviceM.html";
    }
    else if(genderL ==="female"){
        window.location.href = "serviceF.html";
    }
}

function buy(){
    window.location.href = "work.html";
}




