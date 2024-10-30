//Question 1
const grade = prompt ("Enter your grade:");
if (grade < 0){
} else if (grade > 100){
    console.log ("invalid Grade");
}else if (grade < 40){
    console.log("fail");
}else if (grade < 60){
    console.log("pass");
}else if (grade < 80){
    console.log("Good");
}else {
    console.log("Excellent");
}