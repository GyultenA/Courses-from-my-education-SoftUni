function suppliesSchool (input){
    let penPacketCount = Number (input [0]);
    let markerPacketCount = Number (input[1]);
    let detergentLiters = Number (input [2]);
    let discountPercent = Number (input[3]) /100;

    let totalPenPrice = penPacketCount * 5.80;
    let totalMarkersPrice = markerPacketCount * 7.20;
    let totalDetergentPrice = detergentLiters * 1.20;

    let totalPrice = totalPenPrice + totalMarkersPrice + totalDetergentPrice;
    let discount = discountPercent * totalPrice;

    let priceAfterDiscount = totalPrice - discount;
    console.log (priceAfterDiscount)

}

suppliesSchool (["2", "3", "4", "25"]);

