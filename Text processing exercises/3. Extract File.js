function extractFile(input){

    let start = input.lastIndexOf('\\') + 1;
    let end = input.lastIndexOf('.');
    
    let fileName = input.substring(start, end);
    let fileExtention = input.substring(end + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}




extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log("----");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs' );