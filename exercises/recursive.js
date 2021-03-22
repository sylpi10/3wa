let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduce
console.log("\nreduce:");
function reduce(numbers) {
    return numbers.reduce((a, b) => a+b);
}

console.log(reduce(numbers));

// retourne la première valeur du tableau en la supprimant du tableau
console.log("\nacc 1:");
function accumulator(numbers, acc = 0) {
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        acc += element;
    }
    return acc;
}
console.log(accumulator(numbers)); // doit retourner 55

console.log("\nacc 2:");
function accumulator2(numbers, acc = 0) {
    // Une condition d'arrêt et retourner la somme des valeurs du tableau
    acc += numbers.shift();
    // dans la fonction on ré-appelle la fonction elle-même
    if (numbers.length > 0) {
        return accumulator2(numbers, acc);
    }else{
        return acc;
    }
}

console.log(accumulator2(numbers)); // doit retourner 55

