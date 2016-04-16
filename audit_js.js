var but1 = document.getElementById("submit");

but1.addEventListener('click',function request(){

    var IDNumber  = document.forms["request"]["IDNumber"].value;
    var name = document.forms["request"]["name"].value;
    var birth = document.forms["request"]["birth"].value;
    var address = document.forms["request"]["address"].value;
    var email = document.forms["request"]["email"].value;



    var IDNumber_id = document.getElementById("IDNumber");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var email_id = document.getElementById("email");
    var msg = document.getElementById("audit_message");


    if(IDNumber == null || IDNumber == "" || name == null || name == "" || birth == null || birth == "" || address == null || address == "" || email == null || email == ""){

        msg.className = "clear-display";

    }
    else {

        msg.className = "display";

    }

});
