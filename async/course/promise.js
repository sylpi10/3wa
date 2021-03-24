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

const p = checkNb("hi");
console.log(p); // promise in bending state 

p.then(res => {
    console.log(res); // res
    console.log(p); // promise in resolved state 
}).catch(err => console.log(`ERROR: ${err.message}`));

