function renderMovie(movie){
    document.getElementById("movietitle").innerText =movie.title;
    document.getElementById("synopsis").innerText = movie.synopsis;

}
renderMovie(movieData);