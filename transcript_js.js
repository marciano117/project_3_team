var but1 = document.getElementById("submit");

but1.addEventListener('click',function request(){
    
    var user1 = document.forms["request"]["user1"].value;
    var name = document.forms["request"]["name"].value;
    var birth = document.forms["request"]["birth"].value;
    var address = document.forms["request"]["address"].value;
    
    
    var user_id = document.getElementById("user1");
    var name_id = document.getElementById("name");
    var birth_id = document.getElementById("birth");
    var address_id = document.getElementById("address");
    var msg = document.getElementById("transcript_message");
    
    if(user1 == null || user1 == "" || name == null || name == "" || birth == null || birth == "" || address == null || address == ""){
        
        msg.className = "clear-display";
        
    }
    else {
        
        msg.className = "display";
        
    }
    
});