var but = document.getElementById("login");

but.addEventListener('click',function login(){
                     
    var user = document.forms["iit"]["user"].value;
    var pass = document.forms["iit"}["pass"].value;
    
    if ((user == null || user =="") && (pass == null || pass ="")){
        user.class="red";
        pass.class="red";//will change it later to color field input 
    }
    
    if else ((user == null) || user == ""){
        user.class="red";
    }
    
    if else((pass == null) || (pass == "")){
          pass.class="red";
    }
    
    else ((user == "iit_test") && (pass == "password")){
        //work on this later.
    }
                     });