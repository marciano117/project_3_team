var but = document.getElementById('login');

but.addEventListener('click',function login(){
    
    var user = document.forms["iit"]["user"].value;
    var pass = document.forms["iit"]["pass"].value;
    var user_id = document.getElementById("user");
    var pass_id = document.getElementById("pass");
    
    if ((user == null || user =="") && (pass == null || pass =="")){
        user_id.className = "red";
        pass_id.className = "red";
        
        
    }
    
    else if (user == null || user == ""){
        user_id.className="red";
       
    }
    
    else if(pass == null || pass == ""){
          pass_id.className="red";
    }
    
    else if(user == "undergraduate" && pass == "password"){
        window.location.href="undergrad.html";
    }
    else if(user == "graduate" && pass == "password"){
        window.location.href="grad.html";
    }
    
    else if (user == "coterminal" && pass =="password"){
        window.location.href="coterm.html"
    }
    else if (user != "undergraduate" && user != "graduate" && user != "coterminal" && user != "" && user != null ){
        var err_user = document.getElementById("wrong_user");
        err_user.className = "display";
        user_id.value ="";
        pass_id.value ="";
    }    
    else if(pass!= "password" && pass!="null" && pass!= ""){
        var err_pass = document.getElementById("wrong_pass");
        err_pass.className = "display";
        user_id.value="";
        pass_id.value="";
    }
    
                     });


