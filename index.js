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

// function convertDaysToAge(a) {
//     const mainAge = a * 365;
//     console.log(mainAge)
// }

// convertDaysToAge(96);


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

// function do_math(a) {
//    const sortComma = Array.from(a)
//    //for z 246
// //    console.log(sortComma)
//    const sortIndex = sortComma.splice(0, 4)
//    const singleIndex= sortIndex.sort()
//    const popIndex = singleIndex.slice(0, 3).join()
//     const replaceIndex = popIndex.replaceAll(',', '')
//     // console.log(replaceIndex)

//     //for x 123

//     const satIndex = sortComma.splice(1, 4)
//     // console.log(satIndex)
//     const satsIndex = satIndex.sort()
//     const popsIndex = satsIndex.slice(0, 3).join()
//     const replacesIndex = popsIndex.replaceAll(',', '')
//     // console.log(replacesIndex)


// //for y 369
//     const sortsIndex = sortComma.splice(2, 4)
//     const singlesIndex = sortsIndex.sort()
//     const popsesIndex = singlesIndex.slice(0, 3).join()
//     const replacesesIndex = popsesIndex.replaceAll(',', '')
//     // console.log(replacesesIndex)

// // for a 89 placeindex
//     const sortsesIndex = sortComma.splice(2, 3)
//     const singsIndex = sortsesIndex.sort()
//     const posesIndex = singsIndex.slice(0, 3).join()
//     const placeIndex = posesIndex.replaceAll(',', '')
//     // console.log(placeIndex)

// //for b 900
//     const nineIndex = sortComma.splice(4, 5)
//     const ninesIndex = nineIndex.sort()
//     const nopeIndex = ninesIndex.slice(0, 3).reverse().join()
//     const placesIndex = nopeIndex.replaceAll(',', '')
//     // console.log(placesIndex)

//     const totalIndex = (parseInt(placeIndex) + parseInt(placesIndex) - parseInt(replacesIndex)) * parseFloat(replacesesIndex) / parseInt(replaceIndex)

//      console.log(totalIndex)


// //89 + 900 - 123 * 369 / 246 = 1299
// }

// do_math("24z6 1x23 y369 89a 900b");
// do_math("24z6 1z23 y369 89z 900b");



// function sortNum (a, b) {

//     return (a - b)

// }
// sortNum();

// a function to return the keys of all nested object
// var obj = {
//     site: "Codewars",
//     description: "Lorem ipsum dolor sit...",

//     obj2: {
//         str: "Yeah, Codewars!",
//         num: 123,

//         obj3: {
//             something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
//         }
//     }
// };

// function AllObjectKeys() {
//     const allKeys = Object.keys(obj, obj.obj2, obj.obj2.obj3).sort()
//     // const allKeys = Object.keys(obj)

//     console.log(allKeys)

// }

// AllObjectKeys()

//results = ["obj2.obj3.something", "obj2.str", "site"]

//write a function to print all even numbers between 0-10

// const numPrint = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numArr = []

// function printNumbers() {
//     numPrint.forEach(num => {
//         if (num % 2 == 0) {
//             numArr.push(num)
//             console.log(numArr)
//         }
//     })
// }

// printNumbers();


// function findOddNumbers() {
//     mixedNumbers.forEach(num => {
//         if (num % 2) {
//             newOddFind.push(num)
//             console.log(newOddFind)

//         }
//     })
//write a function to display the multiplication table of a number
// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

//Write a function to convert Kilometers to miles

// function convertKilosToMiles(a) {

//     const kiloMiles = a * 0.6214;
//     const kiloFloor = Math.floor(kiloMiles)
//     console.log(`${a} Kilometer is ${kiloFloor} miles`)
// }

// convertKilosToMiles(10);

//write a function to add all numbers in an array of numbers
// const arrNums = [25, -21, 78.99, 45, 50, 70, 80, 100, -49, 300]

// function addAllNumbers() {
//     const addNums = arrNums[0] + arrNums[1] + arrNums[2] + arrNums[3] + arrNums[4] + arrNums[5] + arrNums[6] + arrNums[7] + arrNums[8] + arrNums[9]
//     console.log(addNums)

// }

// addAllNumbers();

//OR new approach

// const sum = [1, 2, 3].reduce(add, 0); // with initial value to avoid when the array is empty

// function add(accumulator, a) {
//     return accumulator + a;
// }

// console.log(sum); // 6
//Create a function that filters out negative numbers

// const negativeNumbers = [1, -9.5, 6, 4, 7, 2, 8, 54, 32, -8, -8, -4, -6, -10, -1]
// let newNegative = []

// function filterNegativeNumbers() {
//     let negatives = negativeNumbers.filter(num => num < 0)
//     newNegative.push(negatives)
//     console.log(newNegative)
// }

// filterNegativeNumbers();

//write a function to remove spaces from a string

// function removeSpaces(a) {
//     const removedSpace = a.split(',')
//     const joinSpace = removedSpace.join()
//     console.log(joinSpace)
// }

// removeSpaces('Romance is a bonus');

//write a function to return a boolean if a number is divisible by 10

function returnBoolean(a) {
    if (a % 10 === 0) {
        console.log('true')
    } else {
        console.log('false')

    }
}
returnBoolean(1);

//write a function to return the number of vowels in a string

returnBoolean(1);

//write a function to return the first item of an array
// const firstArray = ['mango', 'pear', 'apple', 'kiwi']

// function firstArrayItem() {
//     const firstItem = firstArray[0]
//     console.log(firstItem)

// }

// firstArrayItem();

//write a function to return the first item of an array
// function incrementNumber(a) {
//     const numIncrement = a + 1;
//     console.log(numIncrement)

// }

// incrementNumber(10);

// //

// function returnSomething(b) {
//     console.log(`say something: ${b}`)

// }

// returnSomething("hello there")

//write a function to display date and time when a button is clicked

// const btnTime = document.querySelector(".btn2")

// function getDate() {

//     btnTime.addEventListener('click', () => {
//         const clickedDate = new Date();
//         console.log(clickedDate)
//     })

// }
// getDate();

//write a function to change the content of an html element

//write a function to change the image attribute of an html element,turn on and off light

const onLight = document.querySelector(".lightOn")
const offLight = document.querySelector(".lightOff")
const banner = document.querySelector(".ban")
const banners = document.querySelector(".bans")

function onLightBulb() {

    onLight.addEventListener('click', () => {
        const banns = banner.src = 'light-on.jpg';
        console.log(banns)


    })
}

onLightBulb();

function offLightBulb() {
    offLight.addEventListener('click', () => {
        const bann = banners.src = 'light-off.jpg'
        console.log(bann)

    })

}

offLightBulb()








// changeContent();

//write a function that takes three arguements for a profitale game comparison

// function profitGame(a, b, c) {
//     if (a + b == c) {
//         console.log("true")

//     } else {
//         console.log("wrong comparison")
//     }

// }

// profitGame(2, 3, 5)

//write a function to return tthe next number integer

function nextInteger(a) {
    const additionToInteger = a + 1;
    console.log(additionToInteger)

}

nextInteger(22);

//write a function to fix a bug in a code

function exponentCube(a, y) {
    // const exponentMultiply = a ** y
    const exponentMultiply = Math.pow(a, y)
    console.log(exponentMultiply)

}

exponentCube(7, 3)