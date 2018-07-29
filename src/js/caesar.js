function doCaesar() {
    var shiftText = document.getElementById("shift").value; 
    if(!/^-?\d+$/.test(shiftText)) {
        alert("Shift is not an integer.");
        return; 
    }
    var shift = parseInt(shiftText, 10); 
    if (shift < 0 || shift >= 26)
    {
        alert("Shift is out of range.");
        return; 
    }
    var buttonChoice = getElementById("button");
    if (buttonChoice.value == 1)
    shift = (26 - shift) % 26; 

    var text = document.getElementById("text"); 
    text.value = doEncryption(text.value, shift); 
}

function doEncryption(text, shift) { 
    for (var i = 0; i < text.length; i++)
    {
        var c = text.charCodeAt(i); 
        if (65 <= c && c <= 90) document.getElementById("output").value += String.fromCharCode((c - 65 + shift) % 26 + 65);
        else if (97 <= c && c <= 122) document.getElementById("output").value += String.fromCharCode((c - 97 + shift) % 26 + 97); 
        else document.getElementById("output").value += text.charAt(i);
    } 
}