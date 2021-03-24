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
        //  console.log(array);
        //  array.filter(a => console.log(typeof(a)));
        const newArr = [];
         const nums = array.filter(m => typeof(m) === 'number');
         let average = array.filter(m => typeof(m) !== 'number');
         average = parseFloat(nums.reduce((total, curr) => total + curr)/ nums.length);
        //  console.log(average);
        //  console.log(nums);
         newArr.push(average, nums);
         console.log(newArr);
     }

     // generate new tabs where NONE = average

 })