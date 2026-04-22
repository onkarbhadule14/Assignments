//special case of loops

//1.for...of loop ==> used to iterate the array elements
//2.for...in loop ==> used to iterate the object properties
//3.do...while loop ==> used to execute the statements at least once even the condition is false

//1.for...of loop
//syntax:
// for(variable of iterable){
//statements
// }

let fruits:string []=['apple','banana','mango','grapes']

for(let i:number=0;i<fruits.length;i++){

    console.log(fruits[i])
}

//for of loop
console.log("Executing the statements with for..of loop.");
for(let fruit of fruits){
    console.log(fruit);
}

//2.for...in loop
//syntax:
// for(variable in object){
//statements
// }

console.log("Executing the object values with for..in loop.");


interface personInfo {
    name: string,
    empId: number,
    visaStatus: boolean,
    address: {
        city: string,
        state: string,
        zip: number
    }
}

let person: personInfo = {
    name: "Onkar",
    empId: 1234,
    visaStatus: true,
    address: {
        city: "Pune",
        state: "MH",
        zip: 90081
    }
}

for (let key in person){
    console.log(key);
    console.log(person[key as keyof personInfo]);   

}

for(let key in person.address){
    //console.log(key);
    console.log(person.address[key as keyof typeof person.address]);
}

//3.do...while loop
//syntax:
// do{
//statements
//}while(condition)

console.log("do..while loop")

let x:number=0;
do{
console.log("refreshing the page... ");
x++;
} while(x<0);
