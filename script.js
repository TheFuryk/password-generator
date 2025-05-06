const characters = ["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2","3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%", "^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];


let password1El = document.getElementById("password")
let password2El = document.getElementById("password-2")
document.getElementById("generate-btn").addEventListener("click", handlegeneratePassword);


function getRandomIndex() {
    let Randomindex = Math.floor(Math.random()*characters.length)
    return Randomindex
}

function generatePassword() {
    let password = ""
    
        for (let j =0; j<15;j++){
            let randomIndex=getRandomIndex()
            password += characters[randomIndex]

        }

  
    return password
}
    
 function generatePassword1() {
    let password1 
    password1 = generatePassword()
    password1El.textContent = password1
  
 }

 function generatePassword2() {
    let password2 
    password2 = generatePassword()
    password2El.textContent = password2
  
 }

 function handlegeneratePassword() {
    generatePassword1()
    generatePassword2()
}
 