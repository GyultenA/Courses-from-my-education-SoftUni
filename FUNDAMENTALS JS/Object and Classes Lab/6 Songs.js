function songs(input) {
    class Song {
        constructor(typeList,name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberSong = input.shift();

    let currentTypeList = input.pop();

    for (let i = 0; i < numberSong; i++) {
        let [typeList,name,time] = input.shift().split("_");

       
        let currentSong = new Song(typeList,name, time);
         if (currentTypeList === typeList || currentTypeList === "all"){
            console.log(name)
         }


    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
console.log("--------");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])