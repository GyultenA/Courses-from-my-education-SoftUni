function streamOfLettters(input) {
    // прочитаме входните данни (масив от стрингове)
    let str = input
      .filter(line => line.match(/^[a-z]$/i)) 
      .join("");
      // оставяме само тези, които са еднобуквени (a-z, A-Z)
       // сливаме ги в един стринг, напр. "Hnellooctchoerene"
  
    // функция, намираща първият индекс, на който се намира всеки от тези символи 'n', 'o' и 'c'
    // ако някой го няма, вместо индекс ще има -1
    // връща масив от индекси, напр. [1, 5, 7] за "Hnellooctchoerene"
    const getIndexes = (text) => [text.search(/n/), text.search(/o/), text.search(/c/)];
    
    let message = '';
  
    let indexes;
    while (Math.min(...(indexes = getIndexes(str))) >= 0) { // Math.min връща най-малкото число, 
                                        // ако е по-голямо от -1, значи и трите символа са намерени
      let chars = Math.max(...indexes) + 1; // вземаме най-големия индекс и го увеличаваме с 1 
                                            // за да получим броя символи, които да отрежем от началото
                                            // напр. Math.min(1, 5, 7) -> 7; 7 + 1 = 8 символа;
   
      let word = str.substring(0, chars) // отрязваме думата - напр. "Hnellooc"
        .replace(/n/, "") // заменяме първото срещане на 'n' с '' -> "Hellooc"
        .replace(/o/, "") // заменяме първото срещане на 'o' с '' -> "Helloc"
        .replace(/c/, "");// заменяме първото срещане на 'c' с '' -> "Hello"
                          // и получаваме декриптираната дуma
  
      message += word + ' '; // добавяме я към message + спейс -> message = "Hello "
  
      str = str.substring(chars); // премахваме вече обработените символи от str
                                  // "Hnellooctchoerene" -> "tchoerene"
    }
  
    console.log(message); // принтираме резултата, след като сме приключили с извличането на всички думи
  }

  streamOfLettters (["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e"]);