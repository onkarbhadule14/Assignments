// 2. Non-primitive  datatypes (mutable)

/********************************************/
/**********Non-primitive Datatypes***********/
/********************************************/


//1.Object ==> The data type used to store collection of key-value pairs

interface Person {
    name: string;
    age: number;
    city: string;
}


let person: Person = {
    name: "John",
    age: 30,
    city: "New York"


}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

//2. Array ==> The data type used to store collection of similar/different data types

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]    
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
let mixedArray: (number | string | boolean)[] = [1, "Hello", true, 42, "World", false];
console.log(mixedArray); // Output: [1, "Hello", true, 42, "World", false]  


//3. tuple ==> Table represents storing multiple values, different data types together 
// at one place with a restriction on the order along with the number of values.



//Array  vs Tuple

//Store employee name, employee phone number, and employee visa status within the array. 
let empInfo: (string | number | boolean)[] = [9553220022, "Bharath Reddy", true, "hyderabad"];
empInfo.push("India"); // Output: [9553220022, "Bharath Reddy", true, "hyderabad", "India"] (the new value will be added to the end of the array)   
console.log(empInfo);



//Store employee name, employee phone number, and employee visa status within the tuple. 
let newEmpInfo: [string, number, boolean, string] = ["Bharath Reddy", 9553220022, true, "hyderabad"];
console.log(newEmpInfo);

newEmpInfo.push("India"); // Output: [9553220022, "Bharath Reddy", true, "hyderabad"] (the new value will not be added to the end of the tuple as it has a fixed length and order)
console.log(newEmpInfo);

//4. function ==> The data type used to store a block of code that performs a specific task.

function lunchbrowerandlogin(browsername: string): void {

    console.log(`launching ${browsername} and logging in...`);


}

lunchbrowerandlogin("chrome"); // Output: launching chrome and logging in...
lunchbrowerandlogin("firefox"); // Output: launching firefox and logging in...

//5. Map ==> Map represents a collection of key-value pairs with JavaScript class data type. 

let empData: Map<number, string> = new Map();
empData.set(123, "Bharath");
empData.set(124, "Sarath");
empData.set(123, "Hemanth");
empData.set(126, "Sarath");

//console.log(empData.keys()); // Output: MapIterator { 123, 124, 126 } (the keys of the map)
//console.log(empData.values());   
console.log(empData);
// Output: MapIterator { [ 123, 'Hemanth' ], [ 124, 'Sarath' ], [ 126, 'Sarath' ] } (the key-value pairs of the map)
//empData.delete(123);
//console.log(empData)
console.log(empData.size);

//6. Set ==> Set represents a collection of unique values.
let empIds:Set<number> = new Set();
empIds.add(1234);
empIds.add(5678);
empIds.add(1234);//duplicate value will not be added to the set
console.log(empIds);
console.log(empIds.size); // Output: 2 (the number of unique values in the set)



//6. Date ==> Date represents a specific point in time.
let currentDate = new Date();
console.log(currentDate);


//get the current year
console.log(currentDate.getFullYear());

//get the current month
console.log(currentDate.getMonth()+1); //month values are from 0 to 11, so we need to add 1 to get the correct month number


//get the current date
console.log(currentDate.getDate());


// get the current day of the week
console.log(currentDate.getDay()); //day values are from 0 to 6, where 0 represents Sunday and 6 represents Saturday

 //get the current hours
console.log(currentDate.getHours());

//get the current minutes
console.log(currentDate.getMinutes());

//get the current seconds
console.log(currentDate.getSeconds());