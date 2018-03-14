let movieData = require("./data")
let $ = require("jquery")


function renderMovie(movie){

    
    // document.getElementById("movietitle").innerText =movie.title;
    // document.getElementById("synopsis").innerText = movie.synopsis;
    // document.getElementById("director").innerText = movie.director;
    // document.getElementById("poster").setAttribute("src",movie.imgUrl);

    /*--------------------------------*/
    // Här kommer JQuerry
    $(".titelinfo h1").text(movie.title);
    $(".titelinfo p").text(movie.synopsis);
    $(".container img").attr("src",movie.imgUrl)
    
    //let actorList ="";
    //     for(let i=0; i< movie.actors.length;i++){
    //         actorList += "<li>"+movie.actors[i]+"</li>";
    //     } 
    //  document.getElementById("actors").innerHTML = actorList;

    /*--------------------------------*/
    // Här kommer JQuerry
    $(".titelinfo ul").empty();
    for(let i=0; i<movie.actors.length; i++){
    $(".titelinfo ul").append("<li>"+movie.actors[i]+"</li>");
    }
}

    //function changeStarRating(rating){
    // for(let i =1; i <=5;i++){
    //     let star = document.getElementById("star"+i);
    //     if(i<=rating){
    //         star.classList.add("filled");
    //     }
    //     else{
    //         star.classList.remove("filled");
    //     }
    // }

    /*--------------------------------*/
    // Här kommer JQuerry
    function changeStarRating(rating){
        //console.log("CHANGE", rating)
     $(".filled").removeClass("filled");
        for(let i=1;i<=rating;i++){
        $("#"+i).addClass("filled")
        //$(".stars :nth-child (-n+"+rating+")").addClass("filled");<!-- denna har fel i sig-->
     }
    }

    //-------------------------------------------------

    // for(let i=1;i<=5;i++){
    //     let star = document.getElementById("star"+i);
    //         star.addEventListener("click",function(){
    //             changeStarRating(i);
    //         });  
    // }

    /*--------------------------------*/
    // Här kommer JQuerry
    $(".stars").on("click","span",function(e){
        let star = $(e.target);
        let rating = parseInt(star.attr("id"));
        //let rating = Array.from(e.target.parentElement.children).indexOf(e.target)+1;<!-- denna har fel i sig-->
        //console.log("wth", rating)
        changeStarRating(rating);
    });
// alert("Hej")
renderMovie(movieData);