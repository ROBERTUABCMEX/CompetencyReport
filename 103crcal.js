function Sum(a, b){
    return a+b;
}


function Subtraction(a, b){
    return a-b;
}


function Division(a, b){
    return a/b;
}


function Multiplication(a, b){
    return a*b;
}

var value1 = 0;
var value2 = 0;

do{

     value1 = Number(prompt("Give me number"));
     value2 = Number(prompt("Give me other number"));

     if(Number.isNaN(value1) || Number.isNaN(value2)){
         alert("Need to enter number value!!!");
     }

}while(Number.isNaN(value1) || Number.isNaN(value2));

document.getElementById("ResultSum").innerHTML = `Sum Result<h2>${value1}+${value2}</h2> ${Sum(value1,value2)}`;
document.getElementById("ResultSubtraction").innerHTML = `Subtraction Result</h2><h2>${value1}-${value2}</h2> ${Subtraction(value1,value2)}`;
document.getElementById("ResultDivision").innerHTML = `Division Result</h2><h2>${value1}/${value2}</h2> ${Division(value1,value2)}` ;
document.getElementById("ResultMultiplication").innerHTML = `Multiplication Result</h2><h2>${value1}*${value2}</h2> ${ Multiplication(value1,value2)}`;