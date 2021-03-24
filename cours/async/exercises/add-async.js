// es5 syntax
const checkNb = (number, callback) => {
	setTimeout(() => {
        if (isNaN(number)) {
            throw new Error(`ERROR ${number} is not a nb`);
        }
        callback(number)
	}, 1000);
};

checkNb(1, function (nbA) {
    checkNb(nbA + 4, function (sum) {
        console.log(sum);
        checkNb(sum + 2, function (sum2) {
            console.log(sum2);
        });
    });
});

