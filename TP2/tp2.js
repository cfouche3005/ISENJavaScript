function main(){
    let result = celciusToFahrenheit(22);
    console.log(result);

    console.log(limit(4, 3, 8));
    console.log(limit(1, 3, 8));
    console.log(limit(42, 3, 8));

    console.log(isPerfect(6));
    console.log(isPerfect(496));
    console.log(isPerfect(42));
    console.log(isPerfect(1337));

    console.log(nbDigits(0));
    console.log(nbDigits(42));
    console.log(nbDigits(1337));
    console.log(nbDigits(-123));

    console.log(isNarcissistic(42));
    console.log(isNarcissistic(370));
}
main();

function celciusToFahrenheit(celcius){
    let result = (celcius * 1.8)+32;
    return result;
    }

function limit(x, inf, sup){
    if((x<=sup)&&(x>=inf)) {
        return x;
    }else{
         if (x>sup){
             return sup;
         }
         if (x<inf){
            return inf;
         }
    }
}

function isPerfect(n){
    let diviseur = 0;
    for (let i = 0; i < n; i++){
        if (n%i==0){
            diviseur=diviseur+i;
        }
    }
    return (diviseur==n);
}

function nbDigits(n){
    if ((n<=10)&&(n>=-10)){
        return 1;
    }else{
        return 1+nbDigits(n/10);
    }
}

function isNarcissistic(n){
    let nb = nbDigits(n);
    let nars = 0
    let temp = 0
    let tempn = n
    for (let i =0; i<n; i++ ){
        temp = (tempn%10);
        nars= nars+Math.pow(temp,nb);
        tempn = (tempn-(tempn%10))/10;
    }
    return (nars==n);
}
