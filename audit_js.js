var but1 = document.getElementById("submit");
var pattern_birth = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

but1.addEventListener('click',function request(){

    var IDNumber  = document.forms["request"]["IDNumber"].value;
    var name = document.forms["request"]["name"].value; 
    var address = document.forms["request"]["address"].value 
    
    var test_birth = document.forms["request"]["birth"].value;
    var test_email = document.forms["request"]["email"].value;


    var IDNumber_id = document.getElementById("IDNumber");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var email_id = document.getElementById("email");
    var msg = document.getElementById("audit_message");
    var email_format = document.getElementById("email_format");
    var birth_format =  document.getElementById("birth_format");
    
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

    if(IDNumber == null || IDNumber == "" || name == null || name == "" || birth == null || birth == "" || address == null || address == "" || email == null || email == ""){

        msg.className = "clear-display";

    }
    else {

        msg.className = "display";

    }

});
