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
