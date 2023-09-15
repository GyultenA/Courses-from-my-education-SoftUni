function cone (radius, height){
 let volumeCone = (1/3) * Math.PI * (radius * radius)* height;
 let areaCone = Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height))
   
 console.log (`volume = ${volumeCone.toFixed(4)}`);
 console.log (`area = ${areaCone.toFixed(4)}`);

}
cone (3,5)