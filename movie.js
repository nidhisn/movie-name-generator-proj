var movieNames = [
    "The Secret Garden",
    "Lost in Translation",
    "Eternal Sunshine of the Spotless Mind",
    "The Shawshank Redemption",
    "Inception",
    "Pulp Fiction",
    "The Matrix",
    "Interstellar",
    "The Godfather",
    "Fight Club",
    "The Dark Knight",
    "Blade Runner",
    "Back to the Future",
    "The Avengers",
    "Jurassic Park",
    "Forrest Gump",
    "La La Land",
    "The Lion King",
    "Casablanca",
    "Gone with the Wind"
];

// Function to generate a random movie name
function generateMovieName() {
    var randomIndex = Math.floor(Math.random() * movieNames.length);
    var randomMovieName = movieNames[randomIndex];
    document.getElementById("movieName").textContent = randomMovieName;
}

// Event listener for the generate button
document.getElementById("generateBtn").addEventListener("click", generateMovieName);