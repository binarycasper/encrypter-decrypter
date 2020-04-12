import { cipherArray } from "./ciphers"

let ciphers : HTMLElement = document.getElementById("ciphers")!

for(var i = 0; i < cipherArray.length; i++) {
    var cipher = document.createElement("p")
    cipher.innerHTML = cipherArray[i].name
    ciphers.appendChild(cipher)
}