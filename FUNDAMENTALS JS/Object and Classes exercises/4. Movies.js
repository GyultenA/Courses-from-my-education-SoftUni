function movies(input){

    let moviesArr = [];

    input.forEach(line => {

        if (line.includes("addMovie ")){
            let name = line.split("addMovie ")[1];
            moviesArr.push({name});

        } else if (line.includes("directedBy ")){
            let [name, director] = line.split(" directedBy ");

            let movieFind = moviesArr.find(m => m.name === name);

            if (movieFind){
                movieFind.director = director;

            }
        } else if (line.includes("onDate")){
            let [name, date] = line.split(" onDate ");

            let movieFind = moviesArr.find(m => m.name === name);

            if (movieFind){
                movieFind.date = date;
            }

        }



    });

    moviesArr.forEach(movieFind => {
        if(movieFind.name && movieFind.director && movieFind.date){
            console.log(JSON.stringify(movieFind));
        }
    });




}

movies([ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 
'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ])