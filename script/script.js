let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let form = document.getElementById("myForm")
let divErrorBox1 = document.querySelector("#errorBox1") 
let divErrorBox2 = document.querySelector("#errorBox2") 
let divErrorBox3 = document.querySelector("#errorBox3") 
let divErrorBox4 = document.querySelector("#errorBox4") 




let firstNameError = document.createElement("p")
    firstNameError = "First name cannot be empty"

let lastNameError = document.createElement("p")
    lastNameError = "Last Name cannot be empty"

let emailError = document.createElement("p")
    emailError = "Looks like this is not an email" 
    
let passwordError = document.createElement("p")
    passwordError = "Password cannot be empty"    


    

submit.addEventListener("click", function(event) {
      event.preventDefault()

     console.log(event)
     
    if (event.path[1][0].value == "" ) {
      firstName.style.border = "2px solid red"
      firstName.classList.add("error")
      divErrorBox1.append(firstNameError)
      divErrorBox1.style.display = "block"
      firstNameError = ""
      } else {
            firstName.style.border = "1px solid hsl(246, 25%, 77%)"
            firstName.classList.remove("error")
            divErrorBox1.style.display = "none"
            event.path[1][0].value == ""
    }
    
    if (event.path[1][1].value == "" ){
      lastName.style.border = "2px solid red"
      lastName.classList.add("error")
      divErrorBox2.append(lastNameError)
      divErrorBox2.style.display = "block"
      lastNameError = ""
      } else {
            lastName.style.border = "1px solid hsl(246, 25%, 77%)"
            lastName.classList.remove("error")
            divErrorBox2.style.display = "none"
    }

    if (event.path[1][2].value == "" || event.path[1][2].value.includes("@") == false || event.path[1][2].value.includes(".") == false) {
      email.style.border = "2px solid red"
      email.classList.add("error")
      divErrorBox3.append(emailError)
      divErrorBox3.style.display = "block"
      emailError = ""
      } else {
            email.style.border = "1px solid hsl(246, 25%, 77%)"
            email.classList.remove("error")
            divErrorBox3.style.display = "none"
    }

    if (event.path[1][3].value == "") {
      password.style.border = "2px solid red"
      password.classList.add("error")
      divErrorBox4.append(passwordError)
      divErrorBox4.style.display = "block"
      passwordError = ""
      } else {
            password.style.border = "1px solid hsl(246, 25%, 77%)"
            password.classList.remove("error")
            divErrorBox4.style.display = "none"
    }
    
    form.reset();
})