
var moviePosters = [
    
    "img/pulpfiction.jpg",
    "img/fightclub.jpg",
    "img/theShawshankRedemption.jpg",
    "img/goodWillHunting.jpg",
    "img/spidermanAcrossTheSpiderVerse.jpeg",
    "img/spidermanIntoTheSpiderVerse.jpg",
    "img/theGodFather.jpg",
    "img/interstellar.jpg",
    "img/inception.png",
    
    "img/seven.jpg",
    "img/memento.png",
    "img/everythingEverywhere.jpg",
    "img/coco.jpg",
    "img/superbad.webp",
    "img/shutterIsland.jpg"

   
];


function generateMoviePoster() {
    var randomIndex = Math.floor(Math.random() * moviePosters.length);
    var randomMoviePoster = moviePosters[randomIndex];
    document.getElementById("moviePoster").src = randomMoviePoster;
}

document.getElementById("generateBtn").addEventListener("click", generateMoviePoster);
