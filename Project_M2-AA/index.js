// Do not repeat yourself
// function greetTheStudent(studentName) {
//     return `Hello there ${studentName}`;
// }

const greetTheStudent = studentName => `Hello there ${studentName}`;

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`


// const student = 'Mary Jane';
// const greet = greetTheStudent(student);
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);

