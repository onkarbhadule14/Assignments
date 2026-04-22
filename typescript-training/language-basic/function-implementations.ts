//Function Implementations

//1. Function without parameters and without return type. 
//Creating a function, it won't take any input parameters, and it is always going to return void type. 
function greet(): void {
    console.log("Hello, Buddy!");
}

//calling function
greet();

//2. Function with parameters and without return type.
//Creating a function, it will take two parameters, and it is always going to return void type. 
function greetPerson(name: string, age: number): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
//calling function
greetPerson("Alice", 30);  



//3. Function with parameters and with return type. 
//Creating a function, it will take two parameters, and it is always going to return a string type.
function getGreeting(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}                                                                                                               

//calling function  
const greetingMessage = getGreeting("Bob", 25);
console.log(greetingMessage);

//4. Function with optional parameters and with return type.                

//Creating a function, it will take two parameters, one of them is optional, and it is always going to return a string type.
function getPersonalizedGreeting(name: string, age?: number): string {
    if (age !== undefined) {        
        return `Hello, ${name}! You are ${age} years old.`;
    }

    return `Hello, ${name}!`;
}

//calling function
const personalizedGreeting1 = getPersonalizedGreeting("Charlie", 40);
console.log(personalizedGreeting1);
const personalizedGreeting2 = getPersonalizedGreeting("Dave");
console.log(personalizedGreeting2);

//5. Function without parameters and with return type. 
//Creating a function, it won't take any input parameters, but it is going to return a value. 
function getGreeting(): string {
    return "Hello, World!";
}

function getCurrentDate(): Date {
    return new Date();
}

//calling function
console.log(getGreeting());
console.log(getCurrentDate());




//6. Function with default parameters
//Creating a function that is going to take some input parameter out of those, some of the default parameters are assigned with some default values. .

function printEmployeeDetails(name: string, visaStatus:boolean =false ): void {
    console.log(`Employee Name: ${name}`);
    console.log(`Visa Status: ${visaStatus}`);
}
//calling function
printEmployeeDetails("Bharath");
printEmployeeDetails("Govind",true);


//7.Function with rest parameters
//Creating a function that can take unlimited input parameters as an array 
function sumOfNumber(...numbers:number[]):void {
    let sum:number = 0;
    for(let num of numbers) {
        sum += num;
    }
    console.log(`Sum: ${sum}`);
}

//calling function
sumOfNumber(1, 2, 3);
sumOfNumber(1,2,3,4,5);
sumOfNumber(1,2,3,4,5,6,7,8,9,10);












