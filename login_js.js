
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
        
    
                     });