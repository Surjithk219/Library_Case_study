var email = document.getElementById("email");
var nam = document.getElementById("name");
var place = document.getElementById("place");
var phn = document.getElementById("phone");

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


function valiPA(){
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