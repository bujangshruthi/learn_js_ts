// let is a block -scoped
/*`let` is **block-scoped** (lives only inside `{ }`), can be **reassigned**, but **cannot be redeclared** in the same scope. It is **hoisted** but not initialized, so accessing it before declaration throws a `ReferenceError`.

Use `let` when the value will genuinely change -> counters, retry attempts, current page URL, etc.

`let`  is **block-scoped**. It stays within `if` /`for` /`{}`  blocks. `let` **does NOT allow re-declaration** in the same scope. **Reassignment** is allowed
*/
let retryCount = 0; // retrycount is declared here and can be reassigned but not redeclared in the same scope.
retryCount = retryCount + 1 // retry is reassigned here
retryCount = retryCount + 1 // retry is reassigned here
console.log("retryCount:", retryCount)//2

let testStatus = "pending"
if (testStatus === "pending") {
    let executionTime = 2000;
    console.log("Inside the if Block:", executionTime)
}
{
    let executionTime = 5000;
    console.log("Inside the Block:", executionTime)
}

for (let i = 10; i < 11; i++) {
    let executionTime = 1000;
    console.log("Inside the for Block:", executionTime)
}

//this line is commentedout to error shown while pushing code to github
// console.log("Outside the all the Blocks:", executionTime)//ReferenceError: executionTime is not defined
