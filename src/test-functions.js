function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
const randomBoolean = Boolean(Math.round(Math.random()));
const randomNamesArray = ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse", "Campbell", "Ernest", "Rogers", "Theresa", "Patterson", "Henry", "Simmons", "Michelle", "Perry", "Frank", "Butler", "Shirley"]
let randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
const exampleObject = {"firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";


function randomPositiveEvenNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = getRandomIntInclusive(1, 1000);
    if (randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


// The next 4 lines create variables that hold these generated random numbers

var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();
let randomPositiveNumericString = getRandomIntInclusive(1, 1000).toString();
let randomNegativeNumericString = (getRandomIntInclusive(1, 1000) * -1).toString();
const randomFloatingNumber = Number((Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
const randomNegFloatingNumber = Number((-1 * Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2));
let randomNegativeNumber = (getRandomIntInclusive(1, 1000) * -1);
let randomPositiveNumber = getRandomIntInclusive(1, 1000);
let randomPositiveFloatString = getRandomArbitrary(1, 1000).toFixed(2)
let randomNegativeFloatString = getRandomArbitrary(-1, -1000).toFixed(2)
let randomPositiveFloat = Number(getRandomArbitrary(1, 1000).toFixed(2))
let randomNegativeFloat = Number(getRandomArbitrary(-1, -1000).toFixed(2))
const emptyString = "";
const notANumber = NaN;
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];


function randomizeNumbers() {
    randomPositiveNumericString = getRandomIntInclusive(1, 1000).toString();
    randomNegativeNumericString = (getRandomIntInclusive(1, 1000) * -1).toString();
    randomNegativeNumber = (getRandomIntInclusive(1, 1000) * -1);
    randomPositiveNumber = getRandomIntInclusive(1, 1000);
}

const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let firstUpperCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)].toUpperCase();
let secondUpperCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)].toUpperCase();

let firstLowerCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)];
let secondLowerCaseLetter = Alphabet[Math.floor(Math.random() * Alphabet.length)];

function randomizeName() {
    randomName = randomNamesArray[Math.floor(Math.random() * randomNamesArray.length)];
}

function randomizeAll() {
    randomizeNumbers();
    randomizeName()
}

var SpecListSelector = window.setInterval(function () {
    const button = document.querySelector("body > div > div.jasmine-alert > span.jasmine-menu.jasmine-bar.jasmine-failure-list > a")
    if (button) {
        clearInterval(SpecListSelector)
        button.click();
    }
}, 5);
