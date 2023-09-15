class Laptop {
 
    info = {};
    isOn = false
    
    constructor(info, quality){
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        };
        this.quality = quality;
    }
 
    turnOn(){
        this.isOn = true;
        this.quality -= 1;
        return this.isOn;
    }
    turnOff(){
        this.isOn = false;
        this.quality -= 1;
        return this.isOn;
        
    }
    showInfo(){
        let obj = JSON.stringify(this.info);
        return obj;
    }
 
    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    };
 
}