const fs = require("fs");

const getJsonFromFile = (path) =>
	new Promise((resolve, reject) => {

		fs.readFile(path, { encoding: "utf8" }, (err, data) => {
				if (err) {
					reject(err)
					return;
				}
				// success
				resolve(JSON.parse(data));
			});

});

getJsonFromFile('./data/matrix.json')

 .then(({matrix}) => {
    const newMatrix = [];
    //for each sub array
     for (const array of matrix) {
         // filter nums
        const nums = array.filter(n => typeof(n) === 'number');
        // calc average
        const average = nums.reduce((acc, curr) => acc + curr) / nums.length;
        // generate new tabs where NONE = average
        const newArr = array.map( val => typeof(val) === "number" ? val : average);

        newMatrix.push(newArr);
    };
    console.log(newMatrix);
 });