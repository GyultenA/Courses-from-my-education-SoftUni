function extensibleObject(){
    let parentObj = {};
    let chiledObj = Object.create(parentObj);

    chiledObj.extend = function(obj){
        let objArray = Object.entries(obj);

        for(let [key, value] of objArray){
            if(typeof (value) === "function"){
                parentObj[key] = value
            } else {
                chiledObj[key] = value
            }
        }
    }
    return chiledObj
}

const myObj = extensibleObject(); 
const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
  } 
  myObj.extend(template); 
  

