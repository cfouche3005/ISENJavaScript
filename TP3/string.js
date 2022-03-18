function reverse(s) {
    let result ="";
    for (let i=((s.length)-1); i>=0 ; i--){
        result += s[i];
    }
    return result;
}

function isPalindrome(s){
    return(s==reverse(s));
}
function swapCase(s){
    let result ="";
    for (let i=0; i<(s.length); i++){
        if (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
            result += s[i].toLowerCase();
        }
        if (s.charCodeAt(i)>=97 && s.charCodeAt(i)<=126){
            result += s[i].toUpperCase();
        }
    }
    return result;
}

function getSymbolValue(s){
    return  s.charCodeAt(0) - 55;
}

function isDigit(s){
    if (s.charCodeAt(0)>=48 && s.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}

function isLetter(s){
    if ((s.charCodeAt(0)>=65 && s.charCodeAt(0)<=90) || (s.charCodeAt(0)>=97 && s.charCodeAt(0)<=122)){
        return true;
    }else{
        return false;
    }
}

function hexadecimalToDecimal(hex) {
    let result = 0;
    let inc = 0
    for (let i=((hex.length)-1); i>=0 ; i--){
            if (isDigit(hex[i])){
                result += parseInt(hex[i])*(Math.pow(16,inc));
        }
            if (isLetter(hex[i])){
                result += getSymbolValue(hex[i].toUpperCase())*(Math.pow(16,inc));
            }
            inc ++;
    }
    return result
}