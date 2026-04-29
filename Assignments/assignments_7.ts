// Assignment: Write a program to perform the following tasks:
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

// String sentence = "Java programming is fun and challenging";/


let sentence: string = "Java programming is fun and challenging";

let words: string[]=sentence.split(" ");

console.log(words); //[ 'Java', 'programming', 'is', 'fun', 'and', 'challenging' ]

// Count the words
console.log("total number of wordscount in sentence " + words.length);

// Print sentence in reverse order of words

let reverseString:string=" ";
for (let i:number=words.length-1;i>=0;i--){
    reverseString= reverseString + words[i] + " ";
}
console.log("sentence in reverse order of words " + reverseString);

// Convert the first character of each word to uppercase and print original sentence