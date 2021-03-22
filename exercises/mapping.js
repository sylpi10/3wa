const phones = [
	{ name: "iphone XX", priceHT: 900 },
	{ name: "iphone X", priceHT: 700 },
	{ name: "iphone B", priceHT: 200 },
];

const priceTtc = phones.map(el => el.priceHT *= (1 + 20/100));
console.log(priceTtc);