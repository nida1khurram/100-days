//Question 40: Album: Create objects for music albums.
        function music(artist_name:string,song:string,album_title?:string){
            let music_album:{
                artist_name:string,
                song:string,
                album_title?:string,
            };
            music_album={
                artist_name,
                song,
                album_title,
            };    
            return `${artist_name}, ${song}, ${album_title}`
        }
       console.log(music("Atif Aslam", "jai", "jal pari"));
       console.log(music("Noor Jahan","har lahza momin"));
       