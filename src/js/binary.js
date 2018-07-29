function doBinary() {
    if(button.value==0)
    {
        doEncryption();
    }
    else if (button.value==1)
    {
        doDecryption();
    }
}

function doEncryption() {
    var input = document.getElementById("text").value;  
    for (var i = 0; i < input.length; i++)
    {
        document.getElementById("output").value += input[i].charCodeAt(0).toString(2) + " "; 
    }
}

function doDecryption() {
    var input = document.getElementById("text").value;
    document.getElementById("output").value += parseInt(input,2).toString(10); 
}