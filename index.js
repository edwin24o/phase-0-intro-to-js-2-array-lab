const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(names) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(names) {
 cats.pop();   
}
function destructivelyRemoveFirstCat(names) {
    cats.shift();
}
function appendCat(names) {
    return [...cats, "Broom"];
}
function prependCat(name) {
    return [ "Arnold", ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}
