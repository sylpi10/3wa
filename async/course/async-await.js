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

// async fn always return a promise 
async function addNb() {
    try {
        let sum = await checkNb(1);
        sum += await checkNb(2);
        sum += await checkNb(3);
        // console.log(sum);
        return sum;
    } catch (error) {
        console.log(`err: ${error.message}`);        
    }
}

// addNb();
addNb().then((res)=> console.log(res));