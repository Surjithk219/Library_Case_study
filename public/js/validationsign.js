var email = document.getElementById("email");
var nam = document.getElementById("name");
var pass = document.getElementById("pass");
var place = document.getElementById("place");
var phn = document.getElementById("phone");
var pass1 = document.getElementById("pass1");

function valiN()
{
    if(nam.value.trim() =="")
    {
        // alert("name");
        nam.style.border = "2px solid red"
        nam.value = "";
        nam.placeholder = "Enter Name Please...";
        return false;
    }
    else{
        nam.style.border = "2px solid green"
        return true;
    }
}

function valiE()
{
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-z]{2,3}))$/;
    // var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email.value))
    {
        email.style.border = "2px solid green"
        return true;
        
    }
    else{
        email.style.border = "2px solid red"
        email.value = "";
        email.placeholder = "Enter a valid Email";
        //  alert("hi");
        return false;
    }
    

      
}


function valiP()
{
    if(place.value.trim() == "")
    {
        place.style.border = "2px solid red"
        place.value = "";
        place.placeholder = "Enter Place Please...";
        return false; 
    }
    else{
        place.style.border = "2px solid green"
        return true;
    }
}
function valiPH()
{
    var phnn = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    if(phnn.test(phn.value))
    {
        phn.style.border = "2px solid green"
        return true;
        
    }
    else{
        phn.style.border = "2px solid red"
        phn.value = "";
        phn.placeholder = "Enter a valid phone Number";
        //  alert("hi");
        return false;
    }
}
function valiPA()
 {
    
            errors = [];
        if (pass.value.length < 8) {
            errors.push("Your password must be at least 8 characters"); 
        }
        if (pass.value.search(/[a-z]/) < 0) {
            errors.push("Your password must contain at least one lowercase letter.");
        }
        if (pass.value.search(/[0-9]/) < 0) {
            errors.push("Your password must contain at least one digit."); 
        }
        if (pass.value.search(/[A-Z]/) < 0) {                       
              errors.push("Your password must contain at least one uppercase letter.");                    
             } 
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return false;
            pass.value = "";
            pass.placeholder = "Enter a valid Password";
        }
        pass.style.border = "2px solid green"
        return true;
    
}
function valiPAA(){
    if(pass1.value != pass.value){
        pass1.style.border = "2px solid red"
        pass1.value = "";
        pass1.placeholder = "Password Not Match";
        //  alert("hi");
        return false;
    }
    else{
        return true;
    }
}


function valiF(){
var fileInput = document.getElementById('img');

var filePath = fileInput.value;

// Allowing file type
var allowedExtensions = 
    /(\.jpg|\.jpeg|\.png|\.gif)$/i;

if (!allowedExtensions.exec(filePath)) {
alert('Invalid file type');
fileInput.value = '';
return false;
} 
else 
{

// Image preview
if (fileInput.files && fileInput.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(
            'imagePreview').innerHTML = 
            '<img src="' + e.target.result
            + '"/>';
    };
      
    reader.readAsDataURL(fileInput.files[0]);
}
}
}