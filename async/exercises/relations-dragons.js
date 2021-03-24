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


// TODO Faire une promesse globale qui est résolue quand on obtient les contenus désérialisés des 2 fichiers
// Après résolution, créer une structure de données contenant des relations nommées

/* Exemple de structure souhaitée */
/*
  [
		{
			name: "Common Welsh Green",
			friendNames: ["Hebridean Black", "Kayda"]
		},
		{
      name : ....,
      friendNames: [......]
		},
    .......
	]
*/
 Promise.all([getJsonFromFile('./data/dragons.json'), getJsonFromFile('./data/relationships.json')])
            // destructuring to the array of objs
 .then(( [ {dragons}, {relationships} ] ) => {

        // console.log(dragons);
        // console.log(relationships);

        // console.log(res[0]);
        // console.log(res[1]);

        for (const rel of relationships) {
            const drag = dragons.find(drag => drag.id == rel.id);
            console.log(`${drag.name}`);

            for (const id of rel.relation) {
                let friends = dragons.find(drag => drag.id == id)
                console.log(` friendName: ${friends.name}`);
            }
        }
	})

	.catch((err) => console.log(err.message));