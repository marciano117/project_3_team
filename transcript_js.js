var but1 = document.getElementById("submit");

but1.addEventListener('click',function request(){
    
    var user1 = document.forms["request"]["user1"].value;
    var name = document.forms["request"]["name"].value;
    var birth = document.forms["request"]["birth"].value;
    var address = document.forms["request"]["address"].value;
    var delivery = document.forms["request"]["Shipping"].value;
    var payment = document.forms["request"]["Payment"].value
    var email = document.forms["request"]["email"].value;
    
    var user_id = document.getElementById("user1");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var delivery_id = document.getElementById("shipping");
    var payment_id = document.getElementById("payment");
    var email_id = document.getElementById("email");
    var msg = document.getElementById("transcript_message");
    var error_msg = document.getElementById("error");
    
    var value_array = [user1,name,birth,address,email];
    var id_array = [user_id,name_id,birth_id,address_id,email_id,payment_id,delivery_id];
    var i=0;
    
    if(user1 == null || user1 == "" || name == null || name == "" || birth == null || birth == "" || address == null || address == "" || delivery == null || delivery == "" || payment == null || payment == "" || email == null || email ==""){
         
        for(i=0;i<value_array.length;i++){
            if(value_array[i] == null || value_array[i] ==""){
                id_array[i].className = "red";
            }  
        }
    }
    else {
        
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