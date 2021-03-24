let cpt = 0;

function increment() {
    cpt++;
    console.log(cpt);
}

setInterval( increment ,1000);

setInterval(function () {
    cpt++;
    console.log(cpt + " from second");
}, 1200);

let timer3 = setInterval(() => {
    cpt++;
    console.log(cpt + " from third");
}, 1200);


setTimeout(() => {
    console.log("5 sec");
    clearInterval(timer3);
}, 5000);