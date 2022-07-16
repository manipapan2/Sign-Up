function checkname(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 


    if(nameId === ""){
        document.getElementById("inA").innerHTML = "Please Enter Your Username"
        document.getElementById("inA").style.color = "Red"
        document.getElementById("inA").style.fontWeight = "bold"
        document.getElementById("inA").style.display = "flex"

    }
    
    else{
        document.getElementById("inA").innerHTML = "Good"
        document.getElementById("inA").style.color = "rgb(6, 250, 6)"
        document.getElementById("inA").style.fontWeight = "bold"
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
        document.getElementById("inB").style.fontWeight = "bold"
        document.getElementById("inB").style.display = "flex"

    }
    else{
        document.getElementById("inB").innerHTML = "Good"
        document.getElementById("inB").style.color = "rgb(6, 250, 6)"
        document.getElementById("inB").style.fontWeight = "bold"
        document.getElementById("inB").style.display = "flex"

    }
}


function checkcpass(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var emailId = document.getElementById("emailId").value; 
    

        if(pass === '' && cpass === ''){
            document.getElementById("inC").style.display = "flex"

        }

        else if(pass === cpass){
            document.getElementById("inC").innerHTML = "Good"
            document.getElementById("inC").style.color = "rgb(6, 250, 6)"
            document.getElementById("inC").style.fontWeight = "bold"
            document.getElementById("inC").style.display = "flex"
    
            }

    else{
        document.getElementById("inC").innerHTML = "Please Confirm Your password Corectly"
        document.getElementById("inC").style.color = "Red"
        document.getElementById("inC").style.fontWeight = "bold"
        document.getElementById("inC").style.display = "flex"

    }
}

function checkemail(){
var pass = document.getElementById("wer").value;
var cpass = document.getElementById("wet").value;
var nameId = document.getElementById("nameId").value;
var email = document.getElementById("emailId").value; 
    

    if(email === ""){
        document.getElementById("inD").innerHTML = "Please Enter Your Gmail"
        document.getElementById("inD").style.color = "Red"
        document.getElementById("inD").style.fontWeight = "bold"
        document.getElementById("inD").style.display = "flex"
        
    }
    else{
        document.getElementById("inD").innerHTML = "Good"
        document.getElementById("inD").style.color = "rgb(6, 250, 6)"
        document.getElementById("inD").style.fontWeight = "bold"
        document.getElementById("inD").style.display = "flex"
    }
}


