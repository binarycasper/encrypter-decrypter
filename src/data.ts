import { Option, Encrypt, Decrypt } from "./options"

const input : string = document.getElementById("input")!.innerHTML
const password : string = document.getElementById("password")!.innerHTML

let checkboxEncrypt = <HTMLInputElement> document.getElementById("checkboxEncryt")!
var cEisChecked = checkboxEncrypt.checked
var cDisChecked = checkboxDecrypt.checked 

let action : Option
if (cEisChecked) {
    action = Encrypt
} 
if (cDisChecked) {
    action = Decrypt
}

export { input, password, action }

