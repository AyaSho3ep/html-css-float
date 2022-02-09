// for nav bar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var fixed = navbar.offsetTop;

function myFunction() {
  if (scrollY ===0) {
    navbar.classList.remove("fixed");
  } else {
    navbar.classList.add("fixed");
  }
}


// form

// get data
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const phonenumber = document.querySelector("#phonenumber");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errors = document.querySelectorAll(".error");

// form validation
function validateform(){

  clearMessage();
  let errorflag = false;

  if(fullname.value.length < 1){
    errors[0].innerText = "name is required.";
    fullname.classList.add("error-border");
    errorflag = true;
  }
  
  if(!emailIsValid(email.value)){
  errors[1].innerText = "invalide email";
  email.classList.add("error-border");
  errorflag = true;
}

  if(phonenumber.value.length < 1){
  errors[2].innerText = "phone number is required.";
  fullname.classList.add("error-border");
  errorflag = true;
}
  if(message.value.length < 1){
  errors[3].innerText = "message is required.";
  fullname.classList.add("error-border");
  errorflag = true;
  }

  if(!errorflag){
    success.innerText = "SUCCESS!";
  }
}

// clear error & success message
function clearMessage(){
  for(let i=0; i< errors.length; i++){
    errors[i].innerText = "";
    
  }
  success.innerText = "";
  fullname.classList.remove("error-border");
  email.classList.remove("error-border");
  phonenumber.classList.remove("error-border");
  message.classList.remove("error-border");


}
// check email
function emailIsValid(email){
  let pattern =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}



