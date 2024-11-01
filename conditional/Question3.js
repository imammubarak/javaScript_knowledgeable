
//Q3. create a simple arithemetic solution that perform operation for two number using the following
// 1. Addition,
// 2. Subtraction
// 3 Multiplication
// 4. Division

//Note:: The console should list the type of operation that can be perform and user supply equivalent number to proceed


let num1 = prompt("Enter first Number:");
let operation = prompt("Enter Operation(+,-,*,/)");
let num2 = prompt ("Enter Second Number:");
if (operation === "+"){
    result = Number(num1) + Number(num2);
    console.log("Addition:", num1 + "+" + num2 + "=" + result);  
}else if (operation === "-"){
    result = Number(num1) - Number(num2);
    console.log("Subtraction:", num1 + "-" + num2 + "=" + result); 
}else if (operation === "*"){
    result = Number(num1) * Number(num2);
    console.log("Multiplication:", num1 + "*" + num2 + "=" + result); 
}else if (operation === "/"){
    if (num2 !== "0")
    result = Number(num1) / Number(num2);
    console.log("Division:", num1 + "/" + num2 + "=" + result);
}