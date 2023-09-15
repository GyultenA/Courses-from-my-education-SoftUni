function echoType (param){
    let typeParam = typeof (param);
    console.log (typeParam)

    if (typeParam === "string" || typeParam=== "number"){
        console.log (param);
    } else {
        console.log ('Parameter is not suitable for printing');
    }

}
echoType(null)
