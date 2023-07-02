function validate() {
    // TODO
    const regexUserName = /[a-zA-Z0-9]{3,20}/gm;
    const regexPassowrd = /[a-zA-Z0-9_]{5,15}/gm;
    let isCompany = document.getElementById("companyInfo")
    function checkedOrUnchecked (e){

        if(e.target.checked){
            isCompany.style.display = ""
        }

        else{
            isCompany.style.display = "none"
        }
    }

   document.getElementById("company").addEventListener("click", checkedOrUnchecked) 
   
  document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault()
    let userName = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirmPassowrd = document.getElementById("confirm-password")
   let NumberOfCompany = document.getElementById("companyNumber")
   let isValid = document.getElementById("valid")
   let Pass = true
   let checkUserStatus = regexUserName.test(userName.value)
   let passowrdCheckStatus = regexPassowrd.test(password.value)
   let testChecked = document.getElementById("company")
   debugger
   if(checkUserStatus && userName.value.length <= 20) {
    userName.style.border = "none"
   }
   else{
    userName.style.borderColor = "red"
    Pass = false
   }
 
   if(passowrdCheckStatus && password.value.length <= 15){
    password.style.border = "none"
   }
   else{
    password.style.borderColor = "red"
    Pass = false
   }

   if(password.value == confirmPassowrd.value &&  password.style.borderColor !== "red"){
    password.style.border = "none"
    confirmPassowrd.style.border = "none"
   }
   else{
    password.style.borderColor = "red"
    confirmPassowrd.style.borderColor = "red"
    Pass = false
   }

   if(email.value.includes("@") && email.value.indexOf("@") < email.value.lastIndexOf(".")){
    email.style.border = "none"
   }

   else{
    email.style.borderColor = "red"
    Pass = false
   }


   if(testChecked.checked){

   if(Number(NumberOfCompany.value) >= 1000 && Number(NumberOfCompany.value) <= 9999){
    NumberOfCompany.style.border = "none"
   }

   else{
    NumberOfCompany.style.borderColor = "red"
    Pass = false
   }
   
}
   
if(Pass){
    isValid.style.display = ""
   }
   })
}
//Wrong: border-color: red
//Correct: border: none;