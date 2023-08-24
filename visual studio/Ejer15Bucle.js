const y = 5;
const x = 5;
let i = 0;

while (i < y) {
    if (i % 2 === 0) {
        console.log("* ".repeat(x) + "=".repeat(x * 9));
    } else {
        console.log("* ".repeat(x + 1) + "=".repeat(x * 9));
    }
    i++;
}

console.log("=".repeat(43));
