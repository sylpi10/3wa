const p = (number) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(parseInt(number))) {
				reject(new Error("not a number ..."));

				return;
			}
			resolve(number);
		}, 100);
	});

Promise.all([p(10), p(12), p(34)])
	.then((numbers) => {
		console.log(numbers.reduce((acc, curr) => acc + curr));
	})
	.catch((err) => console.error(err));