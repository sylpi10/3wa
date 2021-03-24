const fs = require("fs");

const getJsonFromFile = (path) => 
	new Promise((resolve, reject) => {
		setTimeout(() => {
			
		fs.readFile(path, { encoding: "utf8" }, (err, data) => {
				// impossible de lire le fichier
				if (err) {
					reject(err)
					return;
				}
				// success
				// JSON.parse permet de transformer un fichier JSON en un objet JSON JS
				resolve(JSON.parse(data));
			});

		}, 1000);
});

getJsonFromFile('./data/dragons.json')

 .then(({dragons}) => {
	 dragons.sort( (a,b) => b.age - a.age);
 console.log(dragons);
 console.log(dragons[0]);
 })

//  .then(res => console.log(res))
 .catch(err=> console.log(`error: ${err.message}`));

