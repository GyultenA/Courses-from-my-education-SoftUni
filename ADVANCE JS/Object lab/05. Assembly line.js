function createAssemblyLine() {
    function hasClima(obj) {
        const template = {
            temp: 21,
            tempSettings: 21,
            adjustTemp: function adjustTemp() {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else {
                    obj.temp--;
                }
            }
        }
        return Object.assign(obj, template);
    }
    function hasAudio(obj) {
        obj.currentTrack = { name: null, artist: null };
        obj.nowPlying = function nowPlying() {
            if (obj.currentTrack !== null) {
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
            }
        }
        return obj
    }
    function hasParktronic(obj) {
        obj.checkDistance = function checkDistance(distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!")
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            }
        }
        return obj;
    }

    return {
        hasClima,
        hasAudio,
        hasParktronic,
    }

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
