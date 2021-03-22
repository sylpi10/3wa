const priceHt = [100, 200, 55];

function sumTtcPrices(price1, price2, price3, tva = 20){
    return (price1 + price2 + price3) * (1 + tva / 100)
}

console.log(sumTtcPrices(...priceHt, 5.5));
console.log(sumTtcPrices(...priceHt));