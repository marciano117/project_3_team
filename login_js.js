var but = document.getElementById("login");

but.addEventListener('click',function login(){
                     
    var user = document.forms["iit"]["user"].value;
    var pass = document.forms["iit"}["pass"].value;
    
    if ((user == null || user =="") && (pass == null || pass ="")){
        alert("Please do not leave the fields empty"); //will change it later to color field input 
    }
    
    if else ((user == null) || user == ""){
        alert("Please do not leave the user field input field empty")
    }
    
    if else((pass == null) || (pass == "")){
        alert("Please enter your password")
    }
    
    else ((user == "iit_test") && (pass == "password")){
        //work on this later.
    }
                     });