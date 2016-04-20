var but = document.getElementById('login');

but.addEventListener('click',function login(){
    
    var user = document.forms["iit"]["user"].value;
    var pass = document.forms["iit"]["pass"].value;
    var user_id = document.getElementById("user");
    var pass_id = document.getElementById("pass");
    var err_user = document.getElementById("wrong_user");
    var err_pass = document.getElementById("wrong_pass");
    
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
    
    else if(user != "undegraduate" || user != "graduate" || user != "coterminal" || user != "" || user != null || pass!= "password" || pass!="null" || pass!= ""){
        err_user.className = "clear-display";
        err_pass.className = "clear-display";
            
        if(user != "undergraduate" && user != "graduate" && user != "coterminal" && user != "" && user != null ){
            err_user.className="display";
        }
        
        if(pass!= "password" && pass!="null" && pass!= ""){
            err_pass.className="display";
        }
    }

    
                     });


