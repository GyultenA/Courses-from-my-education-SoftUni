function gramophone (band, album, song){
    let bandString = band.toString();
    let albumString = album.toString();
    let songString = song.toString();

    let durationSec = ((bandString.length * albumString.length) * songString.length) / 2;

    let rotation = durationSec / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);

}

gramophone ('Black Sabbath', 'Paranoid', 'War Pigs');