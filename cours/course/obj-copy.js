const students = [
    {name: "john doe", notes: [10,11,14], age: 22},
    {name: "john wayne", notes: [14,15,18], age: 22},
];

// reference copy: fist & students[0] ref same obj
const firstRef = students[0];
students[0].name = 'john wick';


// shallow copy: independant copy (with limits) 
const firstShallow = {...students[0]}


// "deep copy" : plusieurs stratégies
// 1: vous connaissez précisément la structure de l'objet, vous écrivez un script spécifique (au delà de 3 niveaux d'imbrication c'est trop compliqué...)
const firstStudentDeepCopy1 = { ...students[0], notes: [...students[0].notes] };
// 2: bricolo mais peut dépanner : sérialiser l'objet complet au format JSON, désérialiser
const firstStudentDeepCopy2 = JSON.parse(JSON.stringify(students[0]));
// 3: utiliser des librairies qui contiennent des fonctions de deep copy (ex: lodash)




firstShallow.name = "john lennon";



students[0].notes.push(20);

console.log(students[0]);
console.log(firstRef);
console.log(firstShallow);