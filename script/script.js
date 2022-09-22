let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let divError = document.querySelector("#errorBox") 

let paragraph = document.createElement("p")
    paragraph = "First name cannot be empty"
 

submit.addEventListener("click", function(event){
      event.preventDefault()

     console.log(event)
    if ( event.path[1][0].value == "" ) {
     
        firstName.style.border = "2px solid red"
        firstName.classList.add("error")
        // paragraph.style.color = "red"
        divError.append(paragraph)
       
        console.log("Chyba")
     
    } else { 
        firstName.style.border = "2px solid green"
        alert("Vše je v pořádku")}
   
})