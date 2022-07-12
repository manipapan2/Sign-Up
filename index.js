function checkname(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 


    if(nameId === ""){
        document.getElementById("inA").innerHTML = "Please Enter Your Name"
        document.getElementById("inA").style.color = "Red"
        document.getElementById("inA").style.display = "flex"

    }
    
    else{
        document.getElementById("inA").innerHTML = "Good"
        document.getElementById("inA").style.color = "Green"
        document.getElementById("inA").style.display = "flex"
    }
}    

function checkpass(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 

    if(pass === ""){
        document.getElementById("inB").innerHTML = "Please Enter Your Password"
        document.getElementById("inB").style.color = "Red"
        document.getElementById("inB").style.display = "flex"

    }
    else{
        document.getElementById("inB").innerHTML = "Good"
        document.getElementById("inB").style.color = "Green"
        document.getElementById("inB").style.display = "flex"

    }
}


function checkcpass(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 
    

        if(pass === '' && cpass === ''){
            document.getElementById("inC").style.display = "none"

        }

        else if(pass === cpass){
            document.getElementById("inC").innerHTML = "Good"
            document.getElementById("inC").style.color = "Green"
            document.getElementById("inC").style.display = "flex"
    
            }

    else{
        document.getElementById("inC").innerHTML = "Please Confirm Your Corectly"
        document.getElementById("inC").style.color = "Red"
        document.getElementById("inC").style.display = "flex"

    }
}

function checkemail(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var email = document.getElementById("emailId").value; 
    
var val = document.getElementById("emailId").value
document.getElementById("emailId").innerHTML = val + "lavat"


    if(email === ""){
        document.getElementById("inD").innerHTML = "Please Enter Your Email"
        document.getElementById("inD").style.color = "Red"
        document.getElementById("inD").style.display = "flex"
        
    }
    else{
        document.getElementById("inD").innerHTML = "Good"
        document.getElementById("inD").style.color = "Green"
        document.getElementById("inD").style.display = "flex"
    }
}


