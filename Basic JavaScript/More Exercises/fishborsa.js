function fishland (input) {
   let priceSkrumia = Number (input[0]);
   let priceCaca = Number (input[1]); 
   let pricePalamud = Number (input[2]);
   let priceSafrid = Number (input[3]);
   let priceMidi = Number (input[4]);

   let palamud = priceSkrumia + (priceSkrumia * 0.60);
   let sumPalamud = palamud * pricePalamud;

   let safrid = priceCaca + (priceCaca*0.80);
   let sumSafrid = safrid * priceSafrid;

   let sumMidi = 7.5 * priceMidi

   let sumTotal = sumSafrid + sumPalamud + sumMidi;

   console.log (sumTotal.toFixed(2));

}

fishland (["6.90", "4.20", "1.5", "2.5", "1"]);


