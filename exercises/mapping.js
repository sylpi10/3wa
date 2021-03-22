const phones = [
	{ name: "iphone XX", priceHT: 900 },
	{ name: "iphone X", priceHT: 700 },
	{ name: "iphone B", priceHT: 200 },
];

// const priceTtc = phones.map(el => el.priceHT *= (1 + 20/100));
// console.log(priceTtc);

function computeTtc(priceHT, tva = 20) {
    return priceHT * (1 + tva/100);
}

const priceTtc2 = phones.map((phone) => computeTtc(phone.priceHT));
console.log(priceTtc2);