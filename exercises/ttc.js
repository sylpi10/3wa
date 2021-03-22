function calcTTC(priceHt,tva = 20) {
    
    console.log(priceHt * (1 + tva / 100));

}

calcTTC(200);
calcTTC(200, 5.5);