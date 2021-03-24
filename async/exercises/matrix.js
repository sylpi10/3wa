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
     // filter nums
     for (const array of matrix) {
      
         const nums = array.filter(m => typeof(m) === 'number');

         average = parseFloat(nums.reduce((total, curr) => total + curr)/ nums.length);
      
        // generate new tabs where NONE = average
        const newArr = array.map( val => typeof(val) == "number" ? val : average);

         console.log(newArr);
     }


 })