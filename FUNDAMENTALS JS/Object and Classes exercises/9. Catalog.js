function catalog(input){

   let productObj = {};

   for (let line of input){
    let [productName, productPrice] = line.split(" : ");
    productObj[productName] = Number(productPrice);
    
   }

   let sortedProduct = Object.keys(productObj).sort((a, b) => a.localeCompare(b));
   
   let startLetter = "";
   let result = "";

   sortedProduct.forEach(element => {
    let firstLetter = element.substring(0,1);
         if (firstLetter !== startLetter){
            startLetter = firstLetter;
            result += `${startLetter}\n`;
         }
         result += ` ${element}: ${productObj[element]}\n`;
   } );

   console.log(result)


}

catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])