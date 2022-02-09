// Assigments: 
// 2nd: program to print a table of 5(implement 5 each time)
console.log("Table of 5 is as follows:")
num = prompt("Enter the number: ");
for(let i=0; i<=10; i++){
    console.log(num, "x", i , "=" , num*i)
}

// 3rd: create 5 variables holding marks of 5 subjects,
// then calculate the percentage, depending on that give a grade
let calculus = 89;
let physics  = 70;
let anatomy  = 89;
let theology = 50;
let core     = 90;

sum = calculus + physics + anatomy + theology + core;
console.log("The sum of all subjects marks is:", sum);

per = (sum/500)*100;
console.log("Your percentage this semester is:", per);

if(per>=92){
    console.log("Based on your score, you have a A grade")
} else if(per<= 92 && per>=84){
    console.log("Based on your score, you have a B grade")
} else if(per<=84 && per>=75){
    console.log("Based on your score, you have a C grade")
} else if(per<=75 && per>=61){
    console.log("Based on your score, you have a D grade")
} else{
    console.log("Based on your score, you have a You failed this class! Do better next time :)")
}