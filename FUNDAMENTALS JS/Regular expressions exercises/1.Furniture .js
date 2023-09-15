function furniture(input){

    let regex = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;

    let totalCost = 0;

    console.log("Bought furniture:");

    for (let line of input){
        let result =  line.match(regex);

        if(result){
            let items = result.groups.name;
            let price = +result.groups.price;
            let quantity = Number(result.groups.quantity);

            totalCost += price * quantity;
            console.log(items)
        }
    }

console.log(`Total money spend: ${totalCost.toFixed(2)}`);
   


}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])