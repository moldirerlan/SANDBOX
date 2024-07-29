//CODEWARS JS TASKS 


//TASK 4(SUPER DUPER EASY)
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


//SOLUTION
function problem(x){
    if (typeof x === 'string') {
         return "Error";
     }
     return x * 50 + 6;
 }
 
 console.log(problem(2));
 console.log(problem('Hello'));
 console.log(problem(0));