function ucfirst(str) {
    if(typeof str !== "string" || !str) return '';

    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(intem) {
        return ucfirst(item);
    }).join(" ");
}

function camelCase(str) {
    if(typeof str !== "string" || !str) return '';

    return str.toLowerCase().split(" ").map(function(intem) {
        return capitalize(item);
    }).join(" ");
}

function snake_Case(str) {
    if(typeof str !== "string" || !str) return '';
}

function leet(str) {
    if(typeof str !== "string" || !str) return '';
}

function verlan(str) {
    if(typeof str !== "string" || !str) return '';
}


function yoda(str) {
    if(typeof str !== "string" || !str) return '';
}


function vig(str) {
    if(typeof str !== "string" || !str) return '';
}
