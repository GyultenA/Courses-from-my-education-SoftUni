function ladyBug(input) {
    //създаваме масив и го запълваме с 0;
    let field = new Array(input[0]).fill(0);
    let initialPositions = input[1].split(' ');
 
    //нанасяме калинките на позициите им по условие;
    for (let index = 0; index < initialPositions.length; index++) {
        let position = initialPositions[index];
        if (position >= 0 && position < field.length) {
            field[position] = 1;
        }
    }
 
    
    for (let index = 2; index < input.length; index++) {
        let commandArray = input[index].split(' ');
        let currentPosition = Number(commandArray[0]);
        let flyLength = Number(commandArray[2]);
        let direction = commandArray[1];
 
        if (direction === 'left') {
            //първо проверка дали има калинка на съответния индекс;
            if (field[currentPosition] === 1) {
                field[currentPosition] = 0;
                currentPosition -= flyLength;
                //местим я на ляво със съответната стъпка докато не намерим празно място;
                while (field[currentPosition] === 1) {
                    currentPosition -= flyLength;
                    //ако индексът излезе от масива излизаме от while цикъла, тоест за нея няма място и напуска масива
                    if (currentPosition < 0) {
                        break;
                    }
                }
                //ако сме намерили подходящ индекс, сменяме стойността от 0 на 1
                if (currentPosition >= 0) {
                    field[currentPosition] = 1;
                }
            }
        } else {
            //ако движим на дясно отново първо проверка дали има калинка на индекса;
            if (field[currentPosition] === 1) {
                field[currentPosition] = 0;
                currentPosition += flyLength;
                //по същия начим местим със стъпката flyLength докато не намерим място или не излезем от масива
                while (field[currentPosition] === 1) {
                    currentPosition += flyLength;
                    if (currentPosition > (field.length - 1)) {
                        break;
                    }
                }
                //ако сме намерили място преди да излезем от масива сменяме стойността от 0 на 1;
                if (currentPosition < field.length) {
                    field[currentPosition] = 1;
                }
            }
        }
 
 
    }
    console.log(field.join(' '))
 
}
ladyBug([3, '0 1', '0 right 1', '2 right 1'])
console.log("--------------");
ladyBug([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])