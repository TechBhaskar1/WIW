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


//Publish for female
function publishF(){
    var userName = document.getElementById("username").value;
    var phone = document.getElementById("no").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var product = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("des").value;
    var image = document.getElementById("img").value;
    var id = document.getElementById('id').value;

    db.ref('product').once('value')
    .then((snapshot)=>{
        snapshot.findEach((childSnapshot)=>{
            const idM = childSnapshot.val();
            console.log(idM.id);
            if(idM.id == id){
                window.alert("Id already exists");
                return;
            }
        })
    });


    data = {
        username: userName,
        phone: phone,
        email : email,
        product: product,
        price: price,
        description: description,
        company:company,
        image:image,
        id:id
    };
    
    console.log(data)

    if(!image || !id || !userName || !phone || !email || !product || !price || !description || !company){
        window.alert("All the fields are required");
        return;
    }
    db.ref('product').push(data);
    window.location.href = "home.html";

}

//Publish for male
function publishM(){
    var sellerName = document.getElementById("seller").value;
    var mediumName = document.getElementById("medium").value;
    var phone = document.getElementById("no").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var product = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("des").value;
    var image = document.getElementById("img").value;
    var id = document.getElementById('id').value;
    var relation = document.getElementById('relation').value;
    console.log(relation);

    db.ref('product').once('value')
        .then((snapshot)=>{
            snapshot.forEach((childSnapshot)=>{
                const idM = childSnapshot.val();
                console.log(idM.id);
                if(idM.id == id){
                    window.alert("Id already exists");
                    return;
                }
            })
        });

    data = {
        seller: sellerName,
        mediator:mediumName,
        phone: phone,
        email : email,
        product: product,
        price: price,
        description: description,
        company:company,
        relation:relation,
        id:id,
        image:image
    };
    
    console.log(data)

    if(!image || !id || !mediumName || !relation || !sellerName || !phone || !email || !product || !price || !description || !company){
        window.alert("All the fields are required");
        return;
    }
    db.ref('product').push(data);
    window.location.href = "home.html";
}
