var but1 = document.getElementById("submit");
var pattern_birth = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

but1.addEventListener('click',function request(){

    var IDNumber  = document.forms["request"]["IDNumber"].value;
    var name = document.forms["request"]["name"].value; 
    var address = document.forms["request"]["address"].value; 
    var degree = document.forms["request"]["Degree"].value;
    var major = document.forms["request"]["Major"].value;

    var test_birth = document.forms["request"]["birth"].value;
    var test_email = document.forms["request"]["email"].value;


    var IDNumber_id = document.getElementById("IDNumber");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var email_id = document.getElementById("email");
    var major_id = document.getElementById("major");
    var minor_id = document.getElementById("minor");
    var specialization_id = document.getElementById("specialization");
    var additionalInfo_id = document.getElementById("additionalInfo");
    var msg = document.getElementById("audit_message");
    var email_format = document.getElementById("email_format");
    var birth_format =  document.getElementById("birth_format");
    
    var error_msg = document.getElementById("error");
    var err_major = document.getElementById("err_major");
    var err_degree = document.getElementById("err_degree");
    var err_both = document.getElementById("err_both");
    var err_1 = document.getElementById("err_1");
    var err_2 = document.getElementById("err_2");
    var err_3 = document.getElementById("err_3");

    
    if(!pattern_email.test(test_email)){
        email_format.className="display";
    }
    else {
         var email = document.forms["request"]["email"].value;
            email_id.className="clear";
            email_format.className ="clear-display";
    }
    
     if(!pattern_birth.test(test_birth)){
        birth_format.className="display";
    }
    else {
        var birth = document.forms["request"]["birth"].value;
        birth_id.className="clear";
        birth_format.className="clear-display";
    }
    
    var value_array = [IDNumber,name,birth,address,email,major];
    var id_array= [IDNumber_id,name_id,birth_id,address_id,email_id,major_id];
    var i=0;

    if(IDNumber == null || IDNumber == "" || name == null || name == "" || birth == null || birth == "" || address == null || address == "" || email == null || email == "" || degree == "Select A Degree" || major == "Select A Major"){

        msg.className = "clear-display";
        err_1.className = "clear";
        err_2.className = "clear";
        err_3.className = "clear";
        err_both.className = "clear";
        err_major.className = "clear";
        err_degree.className = "clear";
        
         for(i=0;i<value_array.length;i++){
            if(value_array[i] == null || value_array[i] ==""){
                id_array[i].className = "red";
                if(degree == "Select A Degree" && major == "Select A Major"){
                    error_msg.className = "display";
                }
            }  

        }
        
        if(degree == "Select A Degree" && major == "Select A Major" && value_array != null & value_array !=""  && error_msg.className == "clear"){
            for(i=0;i<value_array.length;i++){
                if(value_array[i] != null || value_array[i] !=""){
                    id_array[i].className = "clear";
                }
           }
            err_both.className = "display";
        }
        
         else if(degree != "Select A Degree" && major == "Select A Major" && IDNumber != null && IDNumber!= "" && name != null && name != "" && birth != null && birth != "" && address != null && address != ""
                && email != null && email !="" && error_msg.className == "clear"){
            
             for(i=0;i<value_array.length;i++){
                 if(value_array[i] != null || value_array[i] !=""){
                    id_array[i].className = "clear";
                }
           }
            err_major.className = "display";
        }
        
        else if(degree == "Select A Degree" && major != "Select A Major" && IDNumber != null && IDNumber != "" && name != null
                && name != "" && birth != null && birth != "" && address != null && address != "" 
                && email != null && email !="" && error_msg.className == "clear"){
            
            err_degree.className = "display";
        }
        else if(degree !="Select A Degree" && major == "Select A Major"  && error_msg.className == "clear"){
            for(i=0;i<value_array.length;i++){
                if(value_array[i] == null || value_array[i] ==""){
                    id_array[i].className = "red";
                }
                else if(value_array[i] != null || value_array[i] != ""){
                    id_array[i].className = "clear";
                }
            }
            err_1.className = "display";
        }
        
        else if(degree =="Select A Degree" && major != "Select A Major" && error_msg.className == "clear"){
            for(i=0;i<value_array.length;i++){
                if(value_array[i] == null || value_array[i] ==""){
                    id_array[i].className = "red";
                }
                else if(value_array[i] != null || value_array[i] != ""){
                    id_array[i].className = "clear";
                }
            }
            err_2.className = "display";
        }
        
        else if(degree !="Select A Degree" && major != "Select A Major" ){
            for(i=0;i<value_array.length;i++){
                if(value_array[i] == null || value_array[i] ==""){
                    id_array[i].className = "red";
                }
                else if(value_array[i] != null || value_array[i] != ""){
                    id_array[i].className = "clear";
                }
            }
            err_3.className = "display";
        }
    }
    else {
        error_msg.className = "clear";
        err_1.className = "clear";
        err_2.className = "clear";
        err_3.className = "clear";
        err_both.className = "clear";
        err_major.className = "clear";
        err_degree.className = "clear";
        msg.className = "display";
        IDNumber_id.value="";
        name_id.value="";
        birth_id.value="";
        address_id.value="";
        email_id.value="";
        major_id.value="";
        minor_id.value="";
        specialization_id.value="";
        additionalInfo_id.value="";
        IDNumber_id.className="clear";
        name_id.className="clear";
        birth_id.className="clear";
        address_id.className="clear";
        email_id.className="clear";
        degree_id.selectedIndex=0;
        major_id.selectedIndex=0;

    }
    


});
