//Loop Statements ==> Loop the statements or execute the same statement multiple times. 

//Before Loop Statements
// let empName :string = "Bharath";
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);
// console.log(empName);


//After Loop Statements

//Loop statements are mainly two different categories. 

//1. for loop ==> When we know the total number of iterations to be executed before itself 
//2. while loop ==> When we don't know the total number of iterations to be executed before 

//1. for loop
//syntax:
// for(condition-to-start; condition-to-end; interval){
//statements
// }

let emp_name: string = 'Onkar';

for (let i: number = 1; i <= 5; i++) {

    console.log(emp_name);

}

//2. while loop
//syntax:
// while(condition){
//statements
// }

let i: number = 1;
let isPageLoaded: boolean = false;

while (i > 0) {

    if (isPageLoaded || i == 10) {
        break;//break the loop
    }

    console.log("Page is loading...");
    i++;
}
