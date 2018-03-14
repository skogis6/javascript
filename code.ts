// let movieData = require("./data")
// let $ = require("jquery")
import * as $ from "jquery";
import {movieData} from "./data";
import {Review} from "./interfaces";

// function renderMovie(movie) {
function renderMovie(data: Review) {
// document.getElementById("movietitle").innerText =movie.title;
// document.getElementById("synopsis").innerText = movie.synopsis;
// document.getElementById("director").innerText = movie.director;
// document.getElementById("poster").setAttribute("src",movie.imgUrl);

/*--------------------------------*/
// Här kommer JQuerry
$(".titelinfo h1").text(data.title);
$(".titelinfo p").text(data.synopsis);
$(".container img").attr("src", data.imgUrl);

// let actorList ="";
//     for(let i=0; i< movie.actors.length;i++){
//         actorList += "<li>"+movie.actors[i]+"</li>";
//     }
//  document.getElementById("actors").innerHTML = actorList;
/*--------------------------------*/
// Här kommer JQuerry
$(".titelinfo ul").empty();

/*--------------------------------*/
// Här kommer en vanlig for loop
// for (let i = 0; i < data.actors.length; i++) {
// $(".titelinfo ul").append("<li>" + data.actors[i] + "</li>");
// }

/*--------------------------------*/
// Forloopen kan ersättas med denna kod
for (const actor of data.actors) {
    $(".titelinfo ul").append("<li>" + actor + "</li>");
    }
}

// function changeStarRating(rating){
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
function changeStarRating(rating) {
    // console.log("CHANGE", rating)
    $(".filled").removeClass("filled");
    for (let i = 1 ; i <= rating; i++) {
    $("#" + i).addClass("filled");
    // $(".stars :nth-child (-n+"+rating+")").addClass("filled");<!-- denna har fel i sig-->
    }
}

// -------------------------------------------------

// for(let i=1;i<=5;i++){
//     let star = document.getElementById("star"+i);
//         star.addEventListener("click",function(){
//             changeStarRating(i);
//         });
// }

/*--------------------------------*/
// Här kommer JQuerry
$(".stars").on("click", "span", (e) => {
const star = $(e.target);
const rating = parseInt(star.attr("id"));
// let rating = Array.from(e.target.parentElement.children).indexOf(e.target)+1;<!-- denna har fel i sig-->
// console.log("wth", rating)
changeStarRating(rating);
});
// alert("Hej")
renderMovie(movieData);
