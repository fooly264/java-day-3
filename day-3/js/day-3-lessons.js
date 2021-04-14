// string Methods

const myString = 'I am a String.';

const replaceStringWithWord = myString.replace('string', 'word');// i am a sting
const indexOfI = myString.indexOf('i'); //10
const lastIndexOfi = myString.lastIndexOf('i'); // 10
const arrayOfLetters = myString.split('');
const includesWordString = myString.includes('string');
const stringLength = myString.length;// 27
const stringPad = myString.padEnd(20, '-'); // i am string
const justASlice = myString.slice(5, 9); // "a st"
const removeWhiteSpace = myString.trim();
const upperCase = myString.toUpperCase();// "I AM STRING."
const lowerCase = myString.toLocaleLowerCase(); // " i am string."



// pop up methods
// const myAlertValue = alert('this is a pop up');
// const myConfirmValue = confirm('are you sure?');
// const myPromptValue = prompt('what is your age?');

// console.log(myAlertValue,  myConfirmValue);

//math properties
const random = Math.random() * 10;
const floored = Math.floor(random);
console.log(floored);

const ceiling = Math.ceil(random);
console.log(ceiling);


// date object
