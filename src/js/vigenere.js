function doVigenere() {
    if (document.getElementById("key").value.length == 0)
    {
        alert("The key is empty.");
        return; 
    }
    var key = filterKey(document.getElementById("key").value);
    if (key.length == 0)
    {
        alert("The key does not contain a letter.");
        return; 
    }
    var buttonChoice = getElementById("button"); 
    if (buttonChoice.value==1)
    {
        //Decrypt 
        for(var i = 0; i < key.length; i++)
        key[i]=(26-key[i])%26; 
    }
    var text = document.getElementById("text");
    text.value = doEncryption(text.value, key); 
}

function doEncryption(input, key)
{
    for (var i = 0, j = 0; i<input.length; i++)
    {
        var c = input.charCodeAt(i); 
        if (isUpperCase(c)) {
            document.getElementById("output").value += String.fromCharCode((c - 65 + key[j % key.length])%26 + 65); 
            j++; 
        }
        else if (isLowerCase(c)) {
            document.getElementById("output").value += String.fromCharCode((c - 97 + key[j % key.length])%26 + 97);
            j++;
        }
        else {
            document.getElementById("output").value += input.charAt(i); 
        }
    }
    document.getElementById("output").innerHTML = output;
}

function filterKey(key) {
    var res = []; 
    for (var i = 0; i < key.length; i++) { 
        var c = key.charCodeAt(i);
        if (isLetter(c))
            res.push((c - 65) % 32); 
    }
    return res;
}

function isLetter(c) {
    return isUpperCase(c) || isLowerCase(c); 
}

function isUpperCase(c) {
    return 65 <= c && c <= 90;  
}

function isLowerCase(c) { 
    return 97 <= c && c <= 122; 
}