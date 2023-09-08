// User Name
function username() {
  let UserName= document.getElementById("user-name").value; 
  let CheackingInputName=/^[A-Za-z ]{3,18}$/;

  if (CheackingInputName.test(UserName)){
    document.getElementById("user-field").classList="user-success";
  }else{
    document.getElementById("user-field").classList="user-fail";
  }
}
// User Email
function useremail(params) {
  let UserEmail=document.getElementById("user-email").value;
  let CheackingInputEmail=/^[A-Za-z_.]{3,9}@[A-Za-z]{3,9}[.]{1}[A-Za-z]{3,6}$/;

  if (CheackingInputEmail.test(UserEmail)){
    document.getElementById("email-field").classList="user-success";
  }else{
    document.getElementById("email-field").classList="user-fail";
  }
}
// User Password
function userpassword(params) {
  let UserPassword=document.getElementById("user-password").value;
  let CheackingInputPassword=/^[^]{8,12}$/;

  if (CheackingInputPassword.test(UserPassword)){
    document.getElementById("password-field").classList="user-success";
  }else{
    document.getElementById("password-field").classList="user-fail";
  }
}
// User Confirm Password
function userconfirmpassword(params) {
  let UserPassword=document.getElementById("user-password").value;
  let UserConfirmPassword=document.getElementById("user-confirm_password").value;
  let CheackingInputConfirmPassword=/^[^]{8,12}$/;

  if (CheackingInputConfirmPassword.test(UserConfirmPassword) && UserPassword==UserConfirmPassword){
    document.getElementById("confirm-password-field").classList="user-success";
    alert("Congratulation! Your password is correct.")
  }else{
    document.getElementById("confirm-password-field").classList="user-fail";
    alert("Password is don't match! Please! enter your correct password.")
  }
}
