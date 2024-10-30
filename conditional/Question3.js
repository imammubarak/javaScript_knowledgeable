let num1 = prompt("Enter first Number:");
let operation = prompt("Enter Operation(+,-,,/)");
let num2 = prompt ("Enter Second Number:");
if (operation === "+"){
    result = Number(num1) + Number(num2);
    alert(num1 + "+" + num2 + "=" + result);   
}else if (operation === "-"){
    result = Number(num1) - Number(num2);
    alert(num1 + "-" + num2 + "=" + result); 
}else if (operation === ""){
    result = Number(num1) * Number(num2);
    alert(num1 + "*" + num2 + "=" + result); 
}else if (operation === "/"){
    if (num2 !== "0")
    result = Number(num1) / Number(num2);
    alert(num1 + "/" + num2 + "=" + result);
}