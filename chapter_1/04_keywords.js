// Useful JavaScript keywords

// Variables
let count = 0;
const language = "JavaScript";

// Conditions
if (count === 0) {
    console.log("Starting to learn " + language);
} else {
    console.log("Keep practicing");
}

// Choose between several cases
switch (count) {
    case 0:
        console.log("Count is zero");
        break;
    default:
        console.log("Count is not zero");
}

// Loops
for (let index = 0; index < 3; index++) {
    if (index === 1) {
        continue;
    }
    console.log(index);
}

// Functions and return values
function add(first, second) {
    return first + second;
}

console.log(add(2, 3));

// Error handling
try {
    throw new Error("Example error");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Finished checking the example");
}

// Classes and inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

const dog = new Dog("Rex");
console.log(dog.name);

// Type and property checks
console.log(typeof count);
console.log(dog instanceof Animal);
console.log("name" in dog);

// Async functions use await to wait for asynchronous work
async function getMessage() {
    const response = await Promise.resolve("Hello from async code");
    return response;
}

getMessage().then(console.log);

// Modules use export and import to share code between files.
// Example: export { add };  import { add } from "./04_keywords.js";

/*Useful JavaScript keywords to learn:

- `let` — declares a variable that can be reassigned.
- `const` — declares a variable that cannot be reassigned.
- `if`, `else` — run code conditionally.
- `switch`, `case`, `default` — choose between several cases.
- `for`, `while`, `do` — repeat code in loops.
- `break`, `continue` — control how a loop proceeds.
- `function`, `return` — declare a function and return a value.
- `async`, `await` — work with asynchronous operations.
- `try`, `catch`, `finally`, `throw` — handle and raise errors.
- `class`, `extends`, `constructor`, `super` — define classes and inheritance.
- `import`, `export` — share code between modules.
- `new` — create an instance of a class or object constructor.
- `this` — refer to the current object or class instance.
- `typeof`, `instanceof` — check a value’s type or an object’s class.
- `in`, `of` — check object properties or iterate over values.*/