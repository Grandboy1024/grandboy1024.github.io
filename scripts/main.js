/**
 * var/let/const 的区别
 */
console.log('声明前' + name);
console.log(window.name);
var name = 'LiSi';
console.log('声明后' + name);
console.log(window.name);

// const constName;    // Uncaught SyntaxError: Missing initializer in const declaration
// Uncaught TypeError: Assignment to constant variable.
// constName = 65; 
const constName = "Const Value";
privateLog(constName);

//
const person = {};
person.name = "Person's Name"
person.age = 6;
person.site = function() {

}

function privateLog(obj) {
    console.log(obj);
}

/**
 * 数据类型
 * */

privateLog(person.lastName);
privateLog(typeof person.name);
privateLog(typeof person.age);
privateLog(typeof person.site);

let message = null;
let age;
if (message) {
    privateLog('true' + message);
}
if (!message) {
    privateLog('false' + message);
}

if (age) {
    privateLog('true' + age);
}
if (!age) {
    privateLog('false' + age);
}
console.log(message);
console.log(age); // Uncaught ReferenceError: age is not defined