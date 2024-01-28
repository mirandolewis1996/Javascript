const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const phone = document.getElementById("phone")
const email = document.getElementById("email")


form.addEventListener("submit",function(e){
  e.preventDefault();
  checkout();
})


function checkout(){
  const usernameValue = username.value.trim()
  const passwordValue = password.value.trim()
  const phoneValue  = phone.value.trim()
  const emailValue = email.value.trim()

// username
  if (usernameValue == ""){
    setError(username,"Please enter your name")
  }

  else if(!isChar(usernameValue)) {
     setError(username,"Dont use number")
  }

  else {
    setSuccess(username,"correct")
  }

// email
  if (emailValue == ""){
  setError(email,"Please enter your email")
  }

  else if (!isEmail(emailValue)) {
   setError(email,"'@' not found")
  }

  else {
    setSuccess(email,"correct")
  }

  // phone no
  if(phoneValue == ""){
    setError(phone,"Please enter your phone number")
  }

  else if(isNaN(phoneValue)){
    setError(phone,"invalid number")
  }

  else if(phoneValue.length < 10){
    setError(phone,"invalid number")
  }
  else if(phoneValue.length > 10){
    setError(phone,"invalid number")
  }


  else {
    setSuccess(phone,"correct")
  }

 // password
 if(passwordValue == ""){
   setError(password,"Please enter your password")
 }
 else if(passwordValue.length < 10){
   setError(password,"Password is not too strong")
 }
 else {
   setSuccess(password,"correct")
 }


}

function setError(input,message){
  const formControl = input.parentElement
  const small = formControl.querySelector("small")
  formControl.className = "form-valid error"
  small.innerText  = message
}

function setSuccess(input,message){
  const formControl = input.parentElement
  const small = formControl.querySelector("small")
  formControl.className = "form-valid success"
  small.innerText  = message

}

function isChar(username){
     return /^[a-zA-Z\-]+$/.test(username)
}
function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
