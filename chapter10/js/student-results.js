// Here's a program that shows female students results (name and average grade).
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Compute female student results
function filterStudentsBySex(array, sex) {
  return students.filter(item => item.sex === sex);
};

function calculateGradesTotal(grades) {
	  return grades.reduce((acc, value) => acc + value, 0);
}

const femaleStudentsResults = [];
const femaleStudents = filterStudentsBySex(students, "f");
for (const student of femaleStudents) {
  const gradesSum = calculateGradesTotal(student.grades);
  const averageGrade = gradesSum / student.grades.length;
  femaleStudentsResults.push({
    name: student.name,
    avgGrade: averageGrade
  });
}

console.log(femaleStudentsResults);