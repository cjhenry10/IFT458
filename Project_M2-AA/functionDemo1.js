var age = 10;
var salary = 15.00;

// console.log(`The variable type of age is ${typeof age}`);
// console.log(`The variable type of salary is ${typeof age}`);

// var name = 'John Smith';
// console.log(`The variable type of name is ${typeof name}`);

const displayGreeting = (name, year) => {
    console.log(`happy new year ${year}, ${name}`);
}

// console.log(`The variable type of displayGreeting is ${typeof displayGreeting}`);

const displayGreetingWithEmoji = (name, year) => {
    console.log(`:) :) happy new year ${year}, ${name} :) :)`);
}

// var greet = {};

// if (age > 10) {
//     greet = displayGreeting;
// } else {
//     greet = displayGreetingWithEmoji;
// }

// greet('Sam', 2022);

const greet = (name, year, func) => {
    func(name, year);
}

greet('Sam', 2022, displayGreetingWithEmoji);
greet('Jane', 2022, displayGreeting);