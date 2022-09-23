export const generateRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(`from utility ${generateRandomNumber(10, 100)}`);