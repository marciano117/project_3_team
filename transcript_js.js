var but1 = document.getElementById("submit");
var pattern_birth = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




but1.addEventListener('click',function request(){
    
    var test_birth = document.forms["request"]["birth"].value;
    var test_email = document.forms["request"]["email"].value;
    
    var user1 = document.forms["request"]["user1"].value;
    var name = document.forms["request"]["name"].value;
    
    var address = document.forms["request"]["address"].value;
    var delivery = document.forms["request"]["Shipping"].value;
    var payment = document.forms["request"]["Payment"].value
   
 
    var user_id = document.getElementById("user1");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var delivery_id = document.getElementById("shipping");
    var payment_id = document.getElementById("payment");
    var email_id = document.getElementById("email");
    var msg = document.getElementById("transcript_message");
    var error_msg = document.getElementById("error");
    var err_1 = document.getElementById("err_1");
    var err_2 = document.getElementById("err_2");
    var err_3 = document.getElementById("err_3");
    var err_both = document.getElementById("err_both");
    var err_payment = document.getElementById("err_payment");
    var err_shipping = document.getElementById("err_shipping");
    
    
        if(!pattern_email.test(test_email)){
       console.log("error email");
    }
    else {
         var email = document.forms["request"]["email"].value;
            email_id.className="clear";
    }
    
     if(!pattern_birth.test(test_birth)){
        console.log("error birth");
    }
    else {
        var birth = document.forms["request"]["birth"].value;
        birth_id.className="clear";
    }
    
    var value_array = [user1,name,birth,address,email];
    var id_array = [user_id,name_id,birth_id,address_id,email_id,payment_id,delivery_id];
    var i=0;
    
    if(user1 == null || user1 == "" || name == null || name == "" || birth == null || birth == "" || 
       address == null || address == "" || delivery == "Select Delivery Option" 
       || payment == "Select Payment Option" || email == null || email ==""){
         
        msg.className = "clear";
        error_msg.className="clear";
        err_1.className = "clear";
        err_2.className = "clear";
        err_3.className = "clear";
        err_both.className = "clear";
        err_payment.className = "clear";
        err_shipping.className = "clear";
        
        for(i=0;i<value_array.length;i++){
            if(value_array[i] == null || value_array[i] ==""){
                id_array[i].className = "red";
                if(delivery == "Select Delivery Option" && payment == "Select Payment Option"){
                    error_msg.className = "display";
                }
            }  
        }
        if(delivery == "Select Delivery Option" && payment == "Select Payment Option" && value_array != null & value_array !="" && error_msg.className == "clear"){
           for(i=0;i<value_array.length;i++){
            if(value_array[i] != null || value_array[i] !=""){
                id_array[i].className = "clear";
            }
           }
            err_both.className = "display";
        }
        else if(delivery !="Select Delivery Option" && payment == "Select Payment Option" && user1 != null && user1 != "" && name != null
                && name != "" && birth != null && birth != "" && address != null && address != ""
                && email != null && email !="" && error_msg.className == "clear"){
            
             for(i=0;i<value_array.length;i++){
                 if(value_array[i] != null || value_array[i] !=""){
                    id_array[i].className = "clear";
                }
           }
            err_payment.className = "display";
        }
        
        else if(delivery =="Select Delivery Option" && payment != "Select Payment Option" && user1 != null && user1 != "" && name != null
                && name != "" && birth != null && birth != "" && address != null && address != "" 
                && email != null && email !="" && error_msg.className == "clear"){
            
            err_shipping.className = "display";
        }
        else if(delivery !="Select Delivery Option" && payment == "Select Payment Option"  && error_msg.className == "clear"){
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
        
        else if(delivery =="Select Delivery Option" && payment != "Select Payment Option" && error_msg.className == "clear"){
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
        
        else if(delivery !="Select Delivery Option" && payment != "Select Payment Option" ){
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
        
        error_msg.className="clear";
        err_1.className = "clear";
        err_2.className = "clear";
        err_3.className = "clear";
        err_both.className = "clear";
        err_payment.className = "clear";
        err_shipping.className = "clear";
        msg.className = "display";
        user_id.value = "";
        name_id.value = "";
        birth_id.value = "";
        address_id.value = "";
        email_id.value = "";
        user_id.className="clear";
        name_id.className="clear";
        birth_id.className="clear";
        address_id.className="clear";
        email_id.className="clear";
        delivery_id.selectedIndex=0;
        payment_id.selectedIndex=0;
    }
    
    
});