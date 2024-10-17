let array = [];
for (let index = 0; index < 1000000; index++) {
  array.push(index);
}

console.time("for loop");
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
console.timeEnd("for loop");

console.time("while loop");
let i = 0;
while (i < array.length) {
  const element = array[i];
  i++;
}
console.timeEnd("while loop");

console.time("forEach loop");
array.forEach((element) => {});
console.timeEnd("forEach loop");

let globalNumber1 = 100;
let globalNumber2 = 200;

function globalSum() {
  return globalNumber1 + globalNumber2;
}
function localSum(localNumber1, localNumber2) {
  return localNumber1 + localNumber2;
}

console.time("global operation");
for (let index = 0; index < 1000000; index++) {
  globalSum();
}
console.timeEnd("global operation");

console.time("local operation");
for (let index = 0; index < 1000000; index++) {
  localSum(100, 200);
}
console.timeEnd("local operation");

function getstringConcatenation(string1, string2) {
  return "This is a primitive concatenation  " + string1 + " " + string2;
}

function getTemplateString(string1, string2) {
  return `This is a template string concatenation ${string1} ${string2}`;
}

console.time("primitive concatenation");
for (let index = 0; index < 1000000; index++) {
  getstringConcatenation("pedrito", "pedrito2");
}
console.timeEnd("primitive concatenation");

console.time("template string");
for (let index = 0; index < 1000000; index++) {
  getTemplateString("pedrito", "pedrito2");
}
console.timeEnd("template string");
