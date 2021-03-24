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
      
        const newArr = [];
         const nums = array.filter(m => typeof(m) === 'number');
        //  let average = array.filter(m => typeof(m) !== 'number');

         average = parseFloat(nums.reduce((total, curr) => total + curr)/ nums.length);
      
        // generate new tabs where NONE = average
        // console.log(array);
        array.map( val => typeof(val) == "number" ? newArr.push(nums) : newArr.push(average));

         console.log(newArr);
     }


 })