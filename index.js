//var=========================================================================================
var nameId = document.getElementById("nameId");
var passasl = document.getElementById("passasl");
var passc = document.getElementById("passc");
var emailId = document.getElementById("emailId");
var submitButton = document.getElementById("submitButton");
//============================================================================================

//onkeyup=====================================================================================
nameId.addEventListener("keyup" , checkname);
passasl.addEventListener("keyup" , checkpass);
passasl.addEventListener("keyup" , checkcpass);
passc.addEventListener("keyup" , checkcpass);
emailId.addEventListener("keyup" , checkemail);
submitButton.addEventListener("click" , clickall);
//============================================================================================

//functions===================================================================================
function checkname(){
    var nameId = document.getElementById("nameId").value;
    
    
        if(nameId === ""){
            document.getElementById("inA").innerHTML = "Please Enter Your Username"
            document.getElementById("inA").style.color = "Red"
            document.getElementById("inA").style.fontWeight = "bold"
            document.getElementById("inA").style.display = "flex"
            return false;
    
        }
        
        else{
            document.getElementById("inA").innerHTML = "Good"
            document.getElementById("inA").style.color = "rgb(6, 250, 6)"
            document.getElementById("inA").style.fontWeight = "bold"
            document.getElementById("inA").style.display = "flex"
            return true;

        }
}    


function checkpass(){
    var passasl = document.getElementById("passasl").value;
    
        
        if(passasl === ""){
            document.getElementById("inB").innerHTML = "Please Enter Your Password"
            document.getElementById("inB").style.color = "Red"
            document.getElementById("inB").style.fontWeight = "bold"
            document.getElementById("inB").style.display = "flex"
            return false;
        
        }
        else{
            document.getElementById("inB").innerHTML = "Good"
            document.getElementById("inB").style.color = "rgb(6, 250, 6)"
            document.getElementById("inB").style.fontWeight = "bold"
            document.getElementById("inB").style.display = "flex"
            return true;
        
        }
}


function checkcpass(){
    var passasl = document.getElementById("passasl").value;
    var passc = document.getElementById("passc").value;
                
        if(passasl === '' && passc === ''){
            document.getElementById("inC").style.display = "flex"
            return false;

        }
            
        else if(passasl === passc){
            document.getElementById("inC").innerHTML = "Good"
            document.getElementById("inC").style.color = "rgb(6, 250, 6)"
            document.getElementById("inC").style.fontWeight = "bold"
            document.getElementById("inC").style.display = "flex"
            return true;
                
        }
            
        else{
            document.getElementById("inC").innerHTML = "Please Confirm Your password Corectly"
            document.getElementById("inC").style.color = "Red"
            document.getElementById("inC").style.fontWeight = "bold"
            document.getElementById("inC").style.display = "flex"
            return false;
            
        }
}


function checkemail(){
    var email = document.getElementById("emailId").value; 
        
        if(email === ""){
            document.getElementById("inD").innerHTML = "Please Enter Your Gmail"
            document.getElementById("inD").style.color = "Red"
            document.getElementById("inD").style.fontWeight = "bold"
            document.getElementById("inD").style.display = "flex"
            return false;
            
        }
        else{
            document.getElementById("inD").innerHTML = "Good"
            document.getElementById("inD").style.color = "rgb(6, 250, 6)"
            document.getElementById("inD").style.fontWeight = "bold"
            document.getElementById("inD").style.display = "flex"
            return true;

        }
    }

function clickall(){
    if(checkname() && checkemail() && checkpass() && checkcpass()){
        var loading = document.getElementById("loading");
        var text = document.getElementById("submitText");

        text.style.display = "none"
        submitButton.style.background = "#1c4d43"
        loading.style.display = "block";
    }
    else{
        checkcpass();checkpass();checkemail();checkname();
    }
    
}
 
//============================================================================================