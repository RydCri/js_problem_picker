const tests = require("../tests.json");
const fs = require("fs");
const { parse } = require("node-html-parser");

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Get random test
function randomArrayValue(array) {
  const randomIndex = getRandomInt(0, array.length);
  return array[randomIndex];
}

const randomTest = randomArrayValue(tests);

// Open tests file
const testsFile = fs.openSync("./spec/support/spec.js", "w");

// Open test runner file for reading contents
const testRunnerFile = fs.openSync("./runner.html", "r");

// Read HTML contents of test runner
const testRunnerFileContents = fs.readFileSync(testRunnerFile).toString();

// Convert contents of HTML file to node tree of elements
const testRunnerRoot = parse(testRunnerFileContents);

// Select the paragraph tag and replace the contents
const testRunnerNode = testRunnerRoot.querySelector("p");
testRunnerNode.set_content(randomTest.spec);

// Open test runner file for writing out the contents
const testRunnerFileToWrite = fs.openSync("./runner.html", "w");

// Write tests to tests file
fs.writeSync(testsFile, randomTest.tests);

// Write contents for the problem specification
fs.writeSync(testRunnerFileToWrite, testRunnerRoot.toString());
