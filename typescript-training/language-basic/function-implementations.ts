//Function Implementations

//1. Function without parameters and without return type. 
//Creating a function, it won't take any input parameters, and it is always going to return void type. 
function greet(): void {
    console.log("Hello, Buddy!");
}

//calling function
greet();

//2. Function with parameters and without return type. 
//Creating a function, it will take an input parameter, but it is not going to return anything.( Void type)
function greetPerson(name: string): void {
    console.log(`Hello, ${name}!, How are you doing?`);

//calling function
greetPerson("Govind");//2. Function with parameters and without return type. 
//Creating a function, it will take an input parameter, but it is not going to return anything.( Void type)
function greetPerson(name: string): void {
    console.log(`Hello, ${name}!, How are you doing?`);
}

//calling function
greetPerson("Govind");