function ucfirst(str) {
    if(typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst("test"));
console.log(ucfirst("Test"));
console.log(ucfirst(" test"));
console.log(ucfirst("test TEst tst"));
console.log(ucfirst(""));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(intem) {
        return ucfirst(item);
    }).join(" ");
}

console.log(capitalize("test"));
console.log(capitalize("Test"));
console.log(capitalize(" test"));
console.log(capitalize("test TEst tst"));
console.log(capitalize(""));
console.log(capitalize(null));
console.log(capitalize({}));

function camelCase(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(intem) {
        return capitalize(item);
    }).join(" ");
}

console.log(camelCase("test"));
console.log(camelCase("Test"));
console.log(camelCase(" test"));
console.log(camelCase("test TEst tst"));
console.log(camelCase(""));
console.log(camelCase(null));
console.log(camelCase({}));

function snake_Case(str) {
    if(typeof str !== "string" || !str) return '';
}

console.log(snake_Case("test"));
console.log(snake_Case("Test"));
console.log(snake_Case(" test"));
console.log(snake_Case("test TEst tst"));
console.log(snake_Case(""));
console.log(snake_Case(null));
console.log(snake_Case({}));


function leet(str) {
    if(typeof str !== "string" || !str) return '';
}

console.log(leet("test"));
console.log(leet("Test"));
console.log(leet(" test"));
console.log(leet("test TEst tst"));
console.log(leet(""));
console.log(leet(null));
console.log(leet({}));

function verlan(str) {
    if(typeof str !== "string" || !str) return '';
}

console.log(verlan("test"));
console.log(verlan("Test"));
console.log(verlan(" test"));
console.log(verlan("test TEst tst"));
console.log(verlan(""));
console.log(verlan(null));
console.log(verlan({}));

function yoda(str) {
    if(typeof str !== "string" || !str) return '';
}

console.log(yoda("test"));
console.log(yoda("Test"));
console.log(yoda(" test"));
console.log(yoda("test TEst tst"));
console.log(yoda(""));
console.log(yoda(null));
console.log(yoda({}));

function vig(str) {
    if(typeof str !== "string" || !str) return '';
}

console.log(vig("test"));
console.log(vig("Test"));
console.log(vig(" test"));
console.log(vig("test TEst tst"));
console.log(vig(""));
console.log(vig(null));
console.log(vig({}));
