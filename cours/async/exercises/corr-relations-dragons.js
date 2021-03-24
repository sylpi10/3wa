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

		const namedRelationships = [];

        for (const rel of relationships) {
            const drag = dragons.find((drag) => drag.id === rel.id).name;
			const friendsNames = [];
			
            for (const id of rel.relation) {
				const friends = dragons.find((friend) => friend.id === id).name
				friendsNames.push(friends);
            }
			namedRelationships.push({name: drag, friendsNames: friendsNames});

			// const friendNames = rel.relation.map(
			// 	(friendId) => dragons.find(d => d.id == friendId) 
			// )
        }
		console.log(namedRelationships);
	})


	.catch((err) => console.log(err.message));