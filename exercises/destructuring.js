let student = {
	name: "Alan",
	notes: [10, 16, 17],
	average: null,
};

// TODO ...

// [firstname, notes, average] = [student.name, student.notes, student.average];
const { name, notes, average } = student;


// constantes
console.log(name, notes, average);
student.name = "Mike";
notes.push(20);
console.log(notes);
console.log(student);

const students = [
	{
		name: "Alan",
		family: {
			mother: "Isa",
			father: "Philippe",
			sister: "Sylvie",
		},
		age: 35,
	},
	{
		name: "Bernard",
		family: {
			mother: "Patricia",
			father: "Cécile",
			sister: "Annie",
		},
		age: 55,
	},
];

// for of exo
console.log("\n ------- ");

for (const student of students) {
    console.log(`name: ${student.name}, sister: ${student.family.sister}\n `);
}