//Data types in JavaScript

//1.Primitive Data Types (Immutable)
//2. Non-Primitive Data Types (Mutable)

//immutable
let a=10;
a+10;
console.log(a);

//mutable
let obj = {
    "name":"bharath",
    "id":1234
}
obj.age =34;
console.log(obj);


//Data types in JavaScript 

/********************************************/
/**********Primitive Datatypes***************/
/********************************************/

//number,string, boolean,undefined, null and symbol

//1. number ==> The data type to store numbers with decimals, without decimals, without using any quotations 
let num1 =10;
let num2 =12.23187;
console.log(typeof num1);
console.log(typeof num2);

//2. string ==> The data type to store text, it is a sequence of characters enclosed in single or double quotes 

let emp_name="Onkar";
let emp_location='Pune';
let emp_compnay=`InfoTech`
console.log(typeof emp_name);
console.log(typeof emp_location);
console.log(typeof emp_compnay);

console.log('employee name is '+emp_name);
console.log(`employee name is ${emp_name} and location is ${emp_location}`);    

//3. boolean ==> The data type to store true or false values
let x=10;
let y=11;
console.log(x>y); //false
console.log(x<y); //true

//4. undefined ==> The data type to store a variable that has been declared but not assigned a value

let age;
console.log(age); //undefined


//5. null ==> The data type to store a variable that has been assigned a null value, which represents the absence of any object value

let salary = 100000;
salary=null;
console.log(salary);

//6.Symbol()==>ymbol represents a unique hidden identifier. 

let countryOfOrigin = Symbol();
let productInfo = {
    productName : "One Plus 17",
    [Symbol("price")] : 90000,
    [countryOfOrigin] : "China"
}
console.log(productInfo);

/********************************************/
/**********Non-primitive Datatypes***********/
/********************************************/


//1.object ==> Object data type represents a collection of key-value pairs within the curly braces. 

let employee = {
    name : "Onkar",
    age : 34,
    company : "InfoTech",

    address: {

        city : "Pune",
        state : "Maharashtra",
        country : "India"   
    }           
}
console.log(employee.name);

console.log(employee.address.city);
console.log(employee["address"]["state"]);


//2. array ==> Array represents a list of values. 

let fruits = ["apple","banana","grapes","orange"];
console.log(fruits[0]);
console.log(fruits[2]); 
let prices=[100,200,300,400];
console.log(prices[1]); 
let fruitandPrices = ["apple",100,"banana",200,"grapes",300,"orange",400];
console.log(fruitandPrices[0]);
console.log(fruitandPrices[1]); 

let mixedArray = ["Onkar",34,true,null,undefined,{name:"Onkar",age:34},[1,2,3,4]];
console.log(mixedArray[3]);

//console.log(mixedArray[5].age);
console.log(mixedArray[6][2]);

//3. function ==> Function represents a block of code or collection of statements written together to complete a particular task.

// function lounchthebrozer(browserName){
//     console.log("Brozer is lounched");
//     console.log("Browser name is: " + browserName);
// }
// lounchthebrozer(browserName="chrome");
// console.log(lounchthebrozer.name);


function launchBrowserAndLogin(browserName,url) {
    console.log(`Launch the ${browserName} Browser`);
    console.log(`Enter the URL: ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
    console.log("Verify the home page is displayed");
}

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

function getBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

//4.Set==> Set is a collection of unique values. It does not allow duplicate values and does not maintain the order of elements.

let emp_id=new Set();

emp_id.add(123445);
emp_id.add(67890);

emp_id.add(123445)

console.log(emp_id);

//5. Map ==> Map represents a collection of key-value pairs. (Map won't allow duplicate keys, but always duplicate values are allowed. )
let empData = new Map();
empData.set("name","Onkar");
empData.set("age",34);
empData.set("company","InfoTech");
console.log(empData);

console.log(empData.get("name"));
console.log(empData.size);
empData.forEach((value,key)=>{
    console.log(`${key} : ${value}`);
});

empData.entries().forEach((entry)=>{
    console.log(entry);
});     
console.log(empData.has("age")); //true
empData.delete("company");
console.log(empData);   

