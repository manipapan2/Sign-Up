//var=========================================================================================
var nameId = document.getElementById("nameId");
var passasl = document.getElementById("passasl");
var passc = document.getElementById("passc");
var emailId = document.getElementById("emailId");
var submitButton = document.getElementById("submitButton");
var acc = 
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
        document.getElementById("inA").innerHTML = "Please Enter Your Username";
        document.getElementById('inA').classList.remove("acces");
        document.getElementById('inA').classList.add("inA");
        return false;
    
    }
        
    else{
        document.getElementById('inA').classList.add("acces");
        document.getElementById('inA').classList.remove("inA");
        document.getElementById("inA").innerHTML = "Good";
        return true;

    }
}    


function checkpass(){
    var passasl = document.getElementById("passasl").value;
    
        
    if(passasl === ""){
        document.getElementById("inB").innerHTML = "Please Enter Your Password";
        document.getElementById('inB').classList.remove("acces");
        document.getElementById('inB').classList.add("inB");
        return false;
        
    }
    else{
        document.getElementById("inB").innerHTML = "Good";
        document.getElementById('inB').classList.add("acces");
        document.getElementById('inB').classList.remove("inB");
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
        document.getElementById("inC").innerHTML = "Good";
        document.getElementById('inC').classList.remove("inC");
        document.getElementById('inC').classList.add("acces");
        return true;
                
    }
            
    else{
        document.getElementById("inC").innerHTML = "Please Confirm Your password Corectly";
        document.getElementById('inC').classList.remove("acces");
        document.getElementById('inC').classList.add("inC");
        return false;
            
    }
}


function checkemail(){
    var email = document.getElementById("emailId").value; 
        
    if(email === ""){
        document.getElementById("inD").innerHTML = "Please Enter Your Gmail";
        document.getElementById('inD').classList.remove("acces");
        document.getElementById('inD').classList.add("inD");
        return false;
            
    }
    else{
        document.getElementById("inD").innerHTML = "Good";
        document.getElementById('inD').classList.add("acces");
        document.getElementById('inD').classList.remove("inD");
        return true;

    }
}


function checknamel(){
    var nameId = document.getElementById("nameId").value;
        
        
    if(nameId === ""){
        document.getElementById("inA").innerHTML = "Please Enter Your Username";
        document.getElementById('inA').classList.remove("acces");
        document.getElementById('inA').classList.add("inA");
        document.getElementById("nameId").classList.add("larzesh");
        setTimeout(pak,200);
        return false;
        
    }
            
    else{
        document.getElementById("inA").innerHTML = "Good";
        document.getElementById('inA').classList.add("acces");
        document.getElementById('inA').classList.remove("inA");
        return true;
    
    }
}    
    
    
function checkpassl(){
    var passasl = document.getElementById("passasl").value;
        
            
    if(passasl === ""){
        document.getElementById("inB").innerHTML = "Please Enter Your Password"
        document.getElementById('inB').classList.remove("acces");
        document.getElementById('inB').classList.add("inB");
        document.getElementById("passasl").classList.add("larzesh");
        setTimeout(pak,200)
        return false;
            
    }
    else{
        document.getElementById("inB").innerHTML = "Good"
        document.getElementById('inB').classList.add("acces");
        document.getElementById('inB').classList.remove("inB");
        return true;
            
    }
}
    
    
function checkcpassl(){
    var passasl = document.getElementById("passasl").value;
    var passc = document.getElementById("passc").value;
                    
    if(passasl === '' && passc === ''){
        document.getElementById("inC").style.display = "flex";
        document.getElementById("passasl").classList.add("larzesh");
        setTimeout(pak,200);
        return false;
    
    }
                
    else if(passasl === passc){
        document.getElementById("inC").innerHTML = "Good";
        document.getElementById('inC').classList.add("acces");
        document.getElementById('inC').classList.remove("inC");
        return true;
                    
    }
                
    else{
        document.getElementById("inC").innerHTML = "Please Confirm Your password Corectly";
        document.getElementById('inC').classList.remove("acces");
        document.getElementById('inC').classList.add("inC");
        document.getElementById("passc").classList.add("larzesh");
        setTimeout(pak,200)
        return false;
                
        }
}
    
    
function checkemaill(){
    var email = document.getElementById("emailId").value; 
            
    if(email === ""){
        document.getElementById("inD").innerHTML = "Please Enter Your Gmail";
        document.getElementById('inD').classList.remove("acces");
        document.getElementById('inD').classList.add("inD");
        document.getElementById("emailId").classList.add("larzesh");
        setTimeout(pak,200)
        return false;
                
    }
    else{
        document.getElementById("inD").innerHTML = "Good"
        document.getElementById('inD').classList.add("acces");
        document.getElementById('inD').classList.remove("inD");
        return true;
    
    }
}



function pak(){
    nameId.classList.remove("larzesh");
    passasl.classList.remove("larzesh");
    passc.classList.remove("larzesh");
    emailId.classList.remove("larzesh");
}

function clickall(){
    if(checkname() && checkemail() && checkpass() && checkcpass()){
        var loading = document.getElementById("loading");
        var text = document.getElementById("submitText");

        text.style.display = "none"
        submitButton.style.background = "#1c4d43"
        loading.style.display = "block";  
        submitButton.style.pointerEvents = "none";
        
    }
    else{
        checkcpassl();checkpassl();checkemaill();checknamel();
        return false;
    }
    
}

//============================================================================================