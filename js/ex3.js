/* Homework 5
Exercise 3 JavaScript code
*/
console.log ("Mihir's output from Homework 5 Exercise 3");
// Declare student list array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95,85,92,98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80,88,100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70,80,90,100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75,85,95,85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95,90,92,98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88,99,90]
    },
];

const cLastNameResults= studentList.filter (student=> student.lastName.startsWith ("C") && student.firstName.startsWith ("C"))
    .map(student=> {
        return {
            lname: student.lastName,
            fname: student.firstName,
            avgGrade: student.scores.reduce((total,score) => total + score,0) / student.scores.length,
            minScore: student.scores.reduce((min,score) => Math.min(min,score), 100),
            maxScore: student.scores.reduce((max,score) => Math.max(max,score), 0),
        };
    });
console.log(cLastNameResults);