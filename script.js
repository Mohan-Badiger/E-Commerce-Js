function goHome(){
    window.location.href='/index.html'
}

function savedata(){
    save()
}

function save(){
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if ((localStorage.email == email) && (localStorage.password== password)){
        console.log("email already exists")
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("phoneno",phone);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
    }
}

// window.onload = function() {
//     display();
// }
