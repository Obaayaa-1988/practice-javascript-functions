//write a function to find the position of a letter in a string

// function findLetter(word, letter) {
//     const splitWord = word.split("");
//     for (let i = 0; i < splitWord.length; i++) {

//         if (splitWord[i] === letter) {
//             let indexWord = splitWord.indexOf(letter)
//             let indexPosition = indexWord + 1
//             console.log(indexPosition)
//         }

//     }
//     // return newWord

// }

//findLetter("friends", "d");

// const items = ["wrench", "hammer", "mallet", "chainsaw", "chisel", "screw", "screwdriver"];

// function showItems(){
//     for(let i = 0; i < items.length; i++){
//         console.log(items[i])

//     }

// }

// showItems();

// const items = [
//     {id: 1,
//      name: "hammer",
//      cost: 15,
//      quality: true,
//      picture: "hammer.jpg"

//     },

//     {
//         id: 2,
//         name: "plier",
//         cost: 25,
//         quality: true,
//         picture: "plier.jpg"

//     },


//     {
//         id: 3,
//         name: "chisel",
//         cost: 65,
//         quality: true,
//         picture: "chisel.jpg"

//     },

//     {
//         id: 4,
//         name: "mallet",
//         cost: 15,
//         quality: true,
//         picture: "mallet.jpg"

//     },

// ]

// function listItems(){
//     for(let y = 0; y < items.length; y++){
//         console.log(items[y].name + " " + items[y].cost + " " + items[y].picture)
//     }
// }

// listItems();






//function findLetter(word, letter) {
//const splitWord = word.split("");
//console.log("bbbbbb", splitWord)

//console.log("baaaaa", splitWord.indexOf(letter))



//for (let i = 0; i < splitWord.length; i++) {
//console.log("mmnnnna", splitWord[i])

// /console.log("hahdhs", indexOf(splitWord[i]))

// if (splitWord[i] === letter) {

//     let indexWord = splitWord.indexOf(letter)
//     let indexPosition = indexWord + 1
//     console.log("babababa", indexPosition)



// console.log("mxmmama", indexWord)

// newWord.push(splitWord[i])





// console.log("ndnnndndn", newWord)


// console.log("oooo",indexOf(newWord))


// newWord.push(splitWord[i])

// }

//}
// return newWord

//}

//findLetter("friends", "f");

// alert("hellloooo")

//JavaScript Events

//
//finding the x,y axis on mousedown

// document.addEventListener("mousemove", (event) => {
//     console.log("may day mouse down" + " for X: " + event.clientX + " " + " for Y: " + event.clientY)

// })

// document.addEventListener("keydown", (event) => {
//     console.log(String.fromCharCode(event.keyCode) + " alphabet number is " + event.keyCode)

// })

//try to write if statements for it
// document.addEventListener("keydown", (event) => {
//     if (event.keyCode === 66) {
//         console.log(" you are B right  yieeee ")
//     } else {
//         console.log(" wrong key try again ")

//     }

// })

//Javascript advanced debugging

//javascript game to show keycodes of alphabets


// const addInput = document.getElementById("letterInput")
// const btnInput = document.getElementById("btn")



// btnInput.addEventListener("keydown", (event) => {

//     console.log("jejjjjje", addInput.value)

//     if (addInput.value === String.fromCharCode(event.keyCode)) {
//         console.log(`This is ${String.fromCharCode(event.keyCode)} + " and you are " + " " + ${event.Keycode}`)

//     }

// })

// function containString(mainString, searchString) {

//     console.log(searchString)
//     if (mainString.includes(searchString)) {
//         console.log("true")

//     } else {
//         console.log("false")
//     }

// }






// function containString(mainString, searchString) {

//     if (mainString.indexOf(searchString) !== -1) {
//         console.log('true')

//     } else {
//         console.log("false")
//     }


// }

// containString("independent", "depend")
// containString("independent", "indy")










//Question Two

// const allMonths = ["January", "Febuaury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// function getMonthName(a) {
//     console.log(allMonths[a - 1])


// }

// getMonthName(3)
// getMonthName(12)
// getMonthName(1)


//find the biggest numbers in an array of numbers

const nums = [30, 21, 35, 48, 75, 20, 143, 29, 71, 39]
// const numb = nums.filter((num) => num > 20)
// console.log(numb)


// const currentNums = [];

// function biggestNumbers() {
//     const numb = nums.filter(num => num > 50)
//     console.log(numb)

// }
// biggestNumbers();

//find words longer than 6

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const longerWords = words.filter(word => word.length > 6)
// console.log(longerWords)

// function addTwoNumbers(a, b) {
//     const addition = a * b
//     console.log(addition)
// }
// addTwoNumbers(5, 8)
// addTwoNumbers(5, 25)
// addTwoNumbers(5, 85)
// let currentArray = []
//write a function to write to reverse an array of strings
// function reverseArray() {
//     const newArray = words.reverse().join()
//     currentArray.push(newArray)
//     console.log(currentArray)
// }

// reverseArray()


//write a function to loop through strings of array and find the longest string greater than 7 and push it into a new array
//write a funtion to check if a word exist in an array of strings
//write a function to find a string in an array, reverse and split the string and push it into a new array
//write a function 
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const newestString = []

// function reverseFindString(z) {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] == z) {
//             const convertWords = z.split('').reverse()
//             newestString.push(convertWords)
//             console.log(newestString)

//         }

//     }
// }

// reverseFindString("destruction")







// function findExistingWord(a) {
//     if (words.includes(a)) {
//         console.log(`yes ${a} exist in the array`)

//     } else {
//         console.log(`${a} doesn't exist in the array`)

//     }

// }

// findExistingWord('coming');




// function longestString() {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 7) {
//             currentArray.push(words[i])
//             console.log(currentArray)
//         }
//     }
// }

// longestString();


//write a function to find wether an array of strings starts with e
//let currentArray = []


// function findLongestStrings() {
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 7) {
//             currentArray.push(words[i])
//             console.log(currentArray)
//         }
//     }
// }
// findLongestStrings();


//write a function to find whether an array of strings starts with e
// const str = ['spray', 'limit', 'exuberant', 'destruction', 'present'];

// for(let i 

//return or print out the content of this using javascript

const arrayObject = [{ name: "Akosua", age: 4, gender: "female" }, { name: "Kofi", age: 10, gender: "male" }]
//using map
// arrayObject.forEach(arr => {
//     console.log(arr)
// })

//using forEach
// arrayObject.map(arr => {
//     console.log(arr)
// })

//using for Loop

// for (let i = 0; i < arrayObject.length; i++) {
//     const element = arrayObject[i];
//     console.log(element)

// }

//write a function to display the keys of an Object

// const objKey = {
//     name: "Akosua",
//     age: 4,
//     gender: "female"

// }
//using Object.key()

// function returnKeys() {
//     const returnKey = Object.keys(objKey)
//     console.log(returnKey)
// }

// returnKeys();

//write a function to show the position of a letter in a string
//first== you need a string and a letter in that string
//

// let letter = "mango"
// function showStringPosition(a, b) {
//     const splitStr = a.split("");
//     for (let i = 0; i < splitStr.length; i++) {
//         if (splitStr[i] === b) {
//             // console.log("mmmm", splitStr[i])

//             let splitIndex = splitStr.indexOf(b)
//             // let splitPosition = splitIndex + 1
//             console.log(splitIndex)
//             // console.log(splitPosition)

//         }


//     }


// }

// showStringPosition("mango", 'n');

// const str = "mango"
// console.log(str[3])


//write a function to find the odd numbers in an array of numbers
// using forEach
const mixedNumbers = [3, 10, 7, 45, 37, 30, 4, 8, 90, 47, 84, 2, 1]
// let newOddFind = []

// function findOddNumbers() {
//     mixedNumbers.forEach(num => {
//         if (num % 2) {
//             newOddFind.push(num)
//             console.log(newOddFind)

//         }
//     })



// }


// findOddNumbers();

//write a function to find the odd numbers in an array of numbers
const oddNumbers = [3, 10, 7, 45, 37, 30, 4, 8, 90, 47, 84, 2, 1]
let oddFind = []
//using filter

// function findFilteredOddNum() {
//     const oddFiltered = oddNumbers.filter(num => num % 2)
//     oddFind.push(oddFiltered)
//     console.log(oddFind)
// }

//findFilteredOddNum();
//write a function to change the color of a button
// const button = document.querySelector(".btn")

// button.addEventListener("click", () => {
//     button.style.backgroundColor = "yellow";
// })

//write a javascript function to reverse a number

// const nombre = 400;


// function reverseNumber() {
//     const changeNumber = (String(nombre))
//     const splitNumber = changeNumber.split('')

//     console.log(splitNumber.reverse())
// }

// reverseNumber();

//write a javascript function to generate a random integer

// function generateRandomInteger(a) {

//     const randomInteger = Math.floor(Math.random() * a)
//     console.log(`random integers from ${a} are ${randomInteger}`)

// }

// generateRandomInteger(100);


//write a function to convert age into days

function convertDaysToAge(a) {
    const mainAge = a * 365;
    console.log(mainAge)
}

convertDaysToAge(96);


//write a function to convert power to current
//where P is power measured in watts
//I is current measured in amps
// E is voltage measured in volts

// function convertPowerToCurrent(volts, amps) {
//     const power = volts * amps
//     console.log(`${power}W`)


// }

// convertPowerToCurrent(120, 1200);

//

// function fridayTheThirteenths(start, end) {
//     const fridayDates = new Date(`${13}/${start}`);
//     const endDates = new Date(`${13} / ${end}`);
//     console.log(`${fridayDates}`)
//     console.log(`${endDates}`)

// }

// fridayTheThirteenths(1999, 2000);

//function to sort strings of alphabet and numbers

function do_math(a) {
   const sortComma = Array.from(a) 
//    console.log(sortComma)
   const sortIndex = sortComma.splice(0, 4)
   const singleIndex= sortIndex.sort()
   const popIndex = singleIndex.slice(0, 3).join()
    const replaceIndex = popIndex.replaceAll(',', '')
    console.log(replaceIndex)

    const satIndex = sortComma.splice(1, 4)
    // console.log(satIndex)
    const satsIndex = satIndex.sort()
    const popsIndex = satsIndex.slice(0, 3).join()
    const replacesIndex = popsIndex.replaceAll(',', '')
    console.log(replacesIndex)
    


    // const sortIndex = sortComma.splice(0, 4)
    // const singleIndex = sortIndex.sort()
    // const popIndex = singleIndex.slice(0, 3).join()
    // const replaceIndex = popIndex.replaceAll(',', '')
    // console.log(replaceIndex)






}

do_math("24z6 1x23 y369 89a 900b");                



// function sortNum (a, b) {
    
//     return (a - b) 

// }
// sortNum();