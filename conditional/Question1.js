//Question 1.
// Note:: value must be accept from prompt
// grade less 40 ouput fail
// grade greaterthan or equal 40 and less than or equal 59 = pass
// grade is greate than or equal 60 and grade is less than or eaual 79 = good
//grade is greaterthan or equal 80 and less than or equal 100 = excellent
// anyt number above 100 is invalid
//any number below 0 is invalid

const grade = prompt ('Enter your grade: ');



if(grade < 40){
    alert("fail");
}
else if(grade >= 40 && grade <= 58){
    alert('pass')
}

if(grade >= 60 && grade <= 79){
    alert('good')
}
else if(grade >= 80 && grade <= 100){
    alert('Excellent')
}
else if(grade > 100 || grade < 0){
    alert('invalid')
}




// const grade = prompt ("Enter your grade:");
// if (grade < 40){
//     console.log("fail");
// };
// if (grade >= 40){
//     console.log('pass');
// }else if (grade <=59);{
//     console.log("pass");
// };
//  if (grade >=60){
// }else if (grade<= 79){
//     console.log("Good");
// }
// if (grade >=80){
// }else if (grade <=100){
//     console.log("Excellent")
// }
// if (grade < 0){
// } else if (grade > 100){
//     console.log ("invalid Grade Put 0 - 100");
// }

