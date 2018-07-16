function doEncryption() {
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
    if (document.getElementById("isDecrypt"))
    shift = (26 - shift) % 26; 

    var text = document.getElementById("text"); 
    text.value = Encrypt(text.value, shift); 
}

function Encrypt() {
    var res = ""; 
    for (var i = 0; i < text.length; i++)
    {
        var c = text.charCodeAt(i); 
        if (65 <= c && c <= 90) res += String.fromCharCode((c - 65 + shift) % 26 + 65);
        else if (97 <= c && c <= 122) res += String.fromCharCode((c - 97 + shift) % 26 + 97); 
        else res += text.charAt(i);
    }
    return res; 
}