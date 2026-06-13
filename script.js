 const form=document.getElementById("registrationForm");

form.addEventListener("submit",function(event){

event.preventDefault();

let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let message=document.getElementById("message");
let success=document.getElementById("successMessage");
let errors=document.querySelectorAll(".error");

errors.forEach(error=>{
error.innerHTML="";
}
);

let isValid=true;

function showError(input,text){

input.classList.add("invalid");
input.classList.remove("valid");
input.nextElementSibling.innerHTML=text;

isValid=false;
}

function successInput(input){

input.classList.remove("invalid");

input.classList.add("valid");
}
// Name Validation

if(name.value.trim()==""){

showError(name,"Name is required");
}
else if(name.value.length<3){
showError(name,"Name must contain 3 characters");
}

else{
successInput(name);
}

// Email Validation

let emailPattern=
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){
showError(email,"Enter valid email address");
}

else{
successInput(email);
}

// Phone Validation

let phonePattern=/^[0-9]{11}$/;

if(!phonePattern.test(phone.value)){
showError(phone,"Phone must contain 11 digits");
}

else{
successInput(phone);
}

// Password Validation

let passwordPattern=
/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;

if(!passwordPattern.test(password.value)){

showError(
password,
"Password needs uppercase, lowercase, special character and 8+ length"
);
}

else{
successInput(password);
}

// Confirm Password

if(password.value!==confirmPassword.value){

showError(
confirmPassword,
"Passwords do not match"
);

}
else{
successInput(confirmPassword);

}

// Message

if(message.value.trim()==""){
showError(message,"Message cannot be empty");
}

else{
successInput(message);
}

if(isValid){


success.innerHTML=
"✔ Form submitted successfully!";
success.className="success";

form.reset();

}

}
);