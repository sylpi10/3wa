const populations = [
	{ id: 0, name: "Alan" },
	{ id: 1, name: "Albert" },
	{ id: 2, name: "Jhon" },
	{ id: 3, name: "Brice" },
	{ id: 4, name: "Alexendra" },
	{ id: 5, name: "Brad" },
	{ id: 6, name: "Carl" },
	{ id: 7, name: "Dallas" },
	{ id: 8, name: "Dennis" },
	{ id: 9, name: "Edgar" },
	{ id: 10, name: "Erika" },
	{ id: 11, name: "Isaac" },
	{ id: 12, name: "Ian" },
];

populations.sort((a,b) => a.name.length - b.name.length);

populations.map(person => person.lenName = person.name.length);

console.log(populations);


// filter by name length
const lenGroup = new Set();
populations.map(person => lenGroup.add(person.lenName));

// console.log(lenGroup);

console.log('\n filter : ------------ \n');

const filteredByLength = [];

for (const len of lenGroup) {
    const filtered = populations.filter(person => person.lenName === len);
    // filteredByLength.push([len, filtered]); 
    filteredByLength.push(len, filtered); 
}
console.log(filteredByLength);

// with map
const group = [...lenGroup].map(lenName => populations.filter(person => person.lenName === lenName));
// console.log(group);

// with a Map 
const filteredByLength2 = [];

const mapPopulation = new Map(filteredByLength2);
console.log(mapPopulation);