const checkNb = (number) => {

    return new Promise((resolve, reject) => {
         setTimeout(() => {
                 if (isNaN(number)) {
                         reject(new Error(` --- ${number} is not a nb ---`));
                         return;
                    }
                 resolve(number);
         }, 1000);
    });
};

checkNb(1)
    .then(res => {
        // return promise 1 sec later
        console.log(res);
        return checkNb(res + 2) 
    })
    .then((res2) => checkNb(res2 + 3))
    .then((res3) => checkNb(res3 + 4))
    // .then((res3) => checkNb(res3 + "yes"))
    .then((res4) => checkNb(res4 + 5))
    .then(res5 => console.log(res5))
    .catch((err) => console.log(`ERROR: ${err.message}`));