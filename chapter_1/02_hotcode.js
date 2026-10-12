//hotcode means any line of code executing in the loop is hotcode and any line of code outside the loop is coldcode
let a=10;
console.log(a);
for (let a=0; a<=1000; a++) {
    console.log(a);
    print();
}
function print() {
    console.log("Hello, World!");
}