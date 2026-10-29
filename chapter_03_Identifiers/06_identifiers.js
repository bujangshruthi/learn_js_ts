// An identifier is a name we give to something in JavaScript, such as a
// variable, function, class, or parameter.

// Identifier rules:
// 1. The first character must be a letter, underscore (_), or dollar sign ($).
// 2. After the first character, you may also use digits (0-9).
// 3. Spaces and hyphens are not allowed in an identifier.
// 4. Identifiers are case-sensitive: userName and username are different.
// 5. Reserved words such as let, if, and class cannot be used as identifiers.
// 6. Use clear names; camelCase is a common style for variables and functions.

// Valid identifiers:
let studentName = "Maya";
let score2 = 95;
let _isReady = true;
let $price = 12.5;

// Invalid examples (kept in comments so this file can run):
// let 2score = 95;       // Cannot start with a digit.
// let student-name = "Maya"; // A hyphen is treated as subtraction.
// let student name = "Maya"; // Spaces are not allowed.
// let let = "word";      // `let` is a reserved word.

// Names are case-sensitive, so these are two separate identifiers.
let color = "blue";
let Color = "green";

function greetStudent(name) {
	return "Hello, " + name + "!";
}

console.log(greetStudent(studentName));
console.log("Score:", score2);
console.log("Ready:", _isReady);
console.log("Price:", $price);
console.log("color:", color, "Color:", Color);
