const checkNb = (number) => {

    return new Promise((resolve, reject) => {
         setTimeout(() => {
                 if (isNaN(number)) {
                         reject(new Error(` --- ${number} is not a nb ---`));
                    }
                 resolve(number);
         }, 1000);
    });
};

// const p = checkNb("hi");
// console.log(p); // promise in bending state 

// p.then(res => {
//     console.log(res); // res
//     console.log(p); // promise in resolved state 
// }).catch(err => console.log(`ERROR: ${err.message}`));

Promise.all([checkNb(4), checkNb(14), checkNb(78)])
    .then(res => console.log(res))
    .catch( err => (`ERROR ${err.message}`));
