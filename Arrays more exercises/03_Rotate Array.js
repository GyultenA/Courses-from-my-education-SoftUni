function rotateArray(array){
    let rotation = array[array.length - 1];
    array.pop()

    for (let i = 0; i < rotation; i++){
        let current = array.pop();
        array.unshift(current);
       
    }
    console.log (array.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])