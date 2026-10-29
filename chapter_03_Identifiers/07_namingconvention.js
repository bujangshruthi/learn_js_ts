// Naming conventions are common styles for writing identifiers.
// JavaScript allows several styles, but teams choose conventions to keep code
// consistent and easy to read.

// 1. camelCase: common for variables, functions, and object properties.
// Start with a lowercase word; capitalize each following word.
let firstName = "Ari";
let itemCount = 3;

function calculateTotal(price, quantity) {
	return price * quantity;
}

// 2. PascalCase: common for classes and constructor functions.
// Capitalize the first letter of every word.
class ShoppingCart {
	constructor(owner) {
		this.owner = owner;
		this.items = [];
	}
}

// 3. UPPER_SNAKE_CASE: often used for constants that represent fixed values.
// This is a convention, not a requirement for using const.
const MAX_RETRIES = 3;
const TAX_RATE = 0.08;

// 4. snake_case: allowed, but less common for JavaScript variables and
// functions. It is often used when matching data or APIs from other systems.
const user_id = 42;

// 5. Leading underscore: sometimes signals an internal or special-use name.
// The underscore itself does not make a name private in JavaScript.
const _cache = [];

// A dollar sign is also allowed and is used by some libraries or frameworks.
// It has no special meaning by itself in JavaScript.
const $elementName = "#title";

// Hyphenated names (kebab-case) are not valid bare identifiers because `-`
// is interpreted as the subtraction operator. They can be used as strings,
// such as object keys, and accessed with bracket notation.
const settings = {
	"dark-mode": true
};

console.log("Name:", firstName);
console.log("Total:", calculateTotal(10, itemCount));
console.log("Cart owner:", new ShoppingCart(firstName).owner);
console.log("Retry limit:", MAX_RETRIES);
console.log("Tax rate:", TAX_RATE);
console.log("User ID:", user_id);
console.log("Cache entries:", _cache.length);
console.log("Selector:", $elementName);
console.log("Dark mode:", settings["dark-mode"]);

/*
Quick guide:
- Variables and functions: camelCase, for example `totalPrice`.
- Classes: PascalCase, for example `ShoppingCart`.
- Fixed-value constants: often UPPER_SNAKE_CASE, for example `MAX_RETRIES`.
- snake_case is valid JavaScript, but camelCase is more typical in JS code.
- kebab-case works in strings and property keys, not as a bare identifier.

These are conventions, not different kinds of JavaScript identifiers. Follow
the style already used by your project or team, and use descriptive names.
*/
