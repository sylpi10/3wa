let a = 44;

function foo() {
	let a = 10;
	console.log(a); // affiche 10
}

foo();

// erreur du type ReferenceError pas d'effet de bord
console.log(a);


console.log("\ncalcul");

let z = 1;

function calcul() {
	let b = 2 + b;

	console.log(b, "calcul");

	function sub_calcul() {
		let c = b + 1;

		console.log(c, "sub_calcul");
	}

	sub_calcul();
}

calcul();