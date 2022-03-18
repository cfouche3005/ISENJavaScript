function abs(numbers) {
     return  numbers.map(function (number){ return Math.abs(number)});
}

function evenOnly(numbers){
     return numbers.filter(function (number){ return (number % 2 == 0)});
}
function sum(numbers) {
     return numbers.reduce(function (sum,number){return sum+=number;},0);
}
function removeDuplicates(values){
     return values.filter(function (elmt,indx,array){return array.indexOf(elmt)==indx});
}