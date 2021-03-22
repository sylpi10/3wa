const litteralObject = {
    firstname: "John",
    lastname: "Wayne",
};

class Model {
	constructor(name) {
		this.name = name;
	}

	get() {
		return this.name;
	}
}

const myModel = new Model();
myModel.firstname = "John";
myModel.lastname = "Lennon";

const fullname = `${myModel.firstname} ${myModel.lastname}`;

function modelFunc(n) {
	let name = n;

	return name;
}

console.log(modelFunc('Michael Jordan'));
console.log(modelFunc(myModel.firstname));
console.log(modelFunc(fullname));

let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4);

newNotes.push(14, 15);

console.log(newNotes);

// création d'un Map
const store = new Map();

store.set("A1", 10.6);
store.set("A2", 8.9);

console.log(store);
// {"A1" => 10.6, "A2" => 8.9}

const ensemble = new Set([1, 2, 3, 4, 5, 5]);
console.log(ensemble);
// [1, 2, 3, 4, 5] il n'y a pas de doublon