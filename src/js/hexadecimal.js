function doBinary() {
    var input = document.getElementById("text").value;  
    for (var i = 0; i < input.length; i++)
    {
        document.getElementById("output").value += input[i].charCodeAt(0).toString(2) + " "; 
    }
    var buttonChoice = document.getElementById("button").value; 
    if(buttonChoice==0)
    {
        hexEncryption();
    }
    else if (buttonChoice==1)
    {
        hexDecryption();
    }
}

function hexEncrypt() {
    document.getElementById("output").value = parseInt(input, 2).toString(16); 
}

function hexDecrypt() { 
    document.getElementById("output").value = parseInt(input, 16).toString(2);
}