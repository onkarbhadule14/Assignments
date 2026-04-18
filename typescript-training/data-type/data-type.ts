
//VS Code Shortcuts

//1. Format Document : Shift + Alt + F
//2. Open Terminal : Cntrl+`  (backtick)
//3. Go to specific line : Cntrl+G
//4. Open and close the files.  Open File (Cntrl+P) , Close the File (Cntrl+W)
//5. Rename JS Files : F2


//Syntax to store data in Typescript

//declaration variable:dataType = value;

//Data types in TypeScript are divided into two different categories. 
// 1. Primitive datatypes (immutable)
// 2. Non-primitive  datatypes (mutable)


/****************************************************/
/*******PRIMITIVE DATA TYPES IN TYPESCRIPT***********/
/****************************************************/

// 1. Number ==> The data type used to store number with/without decimals

let age: number = 25;
let price: number = 99.99;
let discount: number = 0.15;

// 2. String ==> The data type used to store text values

let name: string = "John Doe";
let city: string = "New York";
let country: string = "USA";

// 3. Boolean ==> The data type used to store true or false values

let isStudent: boolean = true;
let isEmployed: boolean = false;
let hasLicense: boolean = true;

// 4. Null ==> The data type used to represent the absence of a value

let emptyValue: null = null;
let noValue: null = null;
let nothing: null = null;

//5.undefined ==> the data type used to store no value /undefined

let notDefined: undefined = undefined;
let missingValue: undefined = undefined;
let uninitialized: undefined = undefined;

//union ==> Union represents more than one data type assigned to the variable. 

let emp_add: number | String | boolean = "123'Test'true";

console.log(emp_add); // Output: true (the last assigned value will be stored in the variable)
emp_add = 123;
console.log(emp_add); // Output: 123 (the last assigned value will be stored in the variable)    

emp_add = true;
console.log(emp_add); // Output: true (the last assigned value will be stored in the variable)


//any ==> The data type used to store any type of value

let randomValue: any = "Hello";
console.log(randomValue); // Output: Hello          
randomValue = 42;
console.log(randomValue); // Output: 42
randomValue = true;
console.log(randomValue); // Output: true           