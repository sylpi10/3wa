class Animal {
	constructor(name) {
		this._name = name;
	}

	set name(name) {
		this._name = name;
	}

	speak() {
		return `My Name is : ${this._name}`;
	}
}

class Lion extends Animal {
	constructor(name) {
		super(name);
		// les this s'écriront après le mot clé super. JS vous
		// empêchera syntaxiquement de l'écrire avant super
		this.force = 100;
	}
}

let lion = new Lion("Shere");
lion.name = "Shere Khan";

console.log(lion.speak());