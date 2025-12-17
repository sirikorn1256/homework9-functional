// Homework #9
// Functional Programming: map / filter / reduce

// =======================
// ข้อ 1
// =======================
const numbers = [5, 10, 15, 20, 25];

// a) map: ยกกำลังสอง
const squaredNumbers = numbers.map(n => n * n);
console.log("Squared numbers:", squaredNumbers);

// b) filter: เอาเฉพาะเลขคู่
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNumbers);

// c) reduce: หาผลรวม
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum of numbers:", sum);

// =======================
// ข้อ 2
// =======================
const students = [
  { id: 1, name: 'Alice', grade: 85 },
  { id: 2, name: 'Bob', grade: 75 },
  { id: 3, name: 'Charlie', grade: 95 },
  { id: 4, name: 'David', grade: 60 }
];


const studentNames = students.map(s => s.name);
console.log("Student names:", studentNames);


const passedStudents = students.filter(s => s.grade >= 70);
console.log("Passed students:", passedStudents);


const averageGrade =
  students.reduce((sum, s) => sum + s.grade, 0) / students.length;

console.log("Average grade:", averageGrade);
