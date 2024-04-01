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

const id = localStorage.getItem("ID");
console.log(id)
db.ref('product').once('value')
  .then((snapshot)=>{
    snapshot.forEach((childSnapshot)=>{
        const product = childSnapshot.val();
        if(product.id == id){
            document.querySelector('#topic').textContent = product.product; 
            document.querySelector('#price').textContent = product. price;
            document.querySelector('#discription').textContent = product.description;
            document.querySelector('#brand').textContent = product.company;
            document.querySelector('#name').textContent = product.username;
            document.querySelector('#no').textContent = product. phone;
            document.querySelector('#email').textContent = product.email;
            document.querySelector('#id').textContent = product.id;
            document.querySelector('#img').src = product.image;
        }
    })
  })