// Define the movie poster image URLs
var moviePosters = [
    
    "img/pulpfiction.jpg",
    "img/fightclub.jpg",
    "img/theShawshankRedemption.jpg",
    "img/theGodFather.jpg",
    "img/goodWillHunting.jpg",
    "img/spidermanAcrossTheSpiderVerse.jpeg",
    "img/spidermanIntoTheSpiderVerse.jpg",
    "img/theGodFather2.jpg",
    "img/interstellar.jpg",
    "img/inception.jpg",
    "img/inception2.png",
    "img/prideAndPrejudice2.jpg",
    "img/seven.jpg",
    "img/memento.png"

   
    // Add more movie poster URLs here
];

// Function to generate a random movie poster
function generateMoviePoster() {
    var randomIndex = Math.floor(Math.random() * moviePosters.length);
    var randomMoviePoster = moviePosters[randomIndex];
    document.getElementById("moviePoster").src = randomMoviePoster;
}

// Event listener for the generate button
document.getElementById("generateBtn").addEventListener("click", generateMoviePoster);
