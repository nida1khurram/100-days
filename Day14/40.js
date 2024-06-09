//Question 40: Album: Create objects for music albums.
function music(artist_name, song, album_title) {
    var music_album;
    music_album = {
        artist_name: artist_name,
        song: song,
        album_title: album_title,
    };
    return "".concat(artist_name, ", ").concat(song, ", ").concat(album_title);
}
console.log(music("Atif Aslam", "jai", "jal pari"));
console.log(music("Noor Jahan", "har lahza momin"));
