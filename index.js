function checkname(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 


    if(nameId === ""){

        document.getElementById("inA").style.display = "flex"

    }
    else{
        document.getElementById("inA").style.display = "none"
    }
}    

function checkpass(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 

    if(pass === ""){
        document.getElementById("inB").style.display = "flex"

    }
    else{
        document.getElementById("inB").style.display = "none"
    }
}


function checkcpass(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 
    
    if(pass === cpass){
        document.getElementById("inC").style.display = "none"
        }
    else{
        document.getElementById("inC").style.display = "flex"
    }
}

function checkemail(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var email = document.getElementById("emailId").value; 
        
    if(email === ""){
        document.getElementById("inD").style.display = "flex"
        
    }
    else{
        document.getElementById("inD").style.display = "none"
    }
}