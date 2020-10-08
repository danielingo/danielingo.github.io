//Daniel Ingo

let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    "use strict";
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie(movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
	console.log("Printing all movies...");
	var total = allMovies.length;
    for(var i = 0; i < total; i++) {
        console.log(allMovies[i].title + ", rating of "+ allMovies[i].rating
         			+ ", havewatched: " + allMovies[i].havewatched);
    }
    console.log("\n");
    console.log("You have " + total +" movies in total");
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
	console.log("Printing movie that has a rating higher than " + rating);
	var count = 0;
    for(var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].title + " has a rating of "+ allMovies[i].rating);
            count++;
        }
    }
    console.log("\n");
    console.log("In total, there are " + count +" matches");
}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    for(var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            if (allMovies[i].havewatched == "true") {
                allMovies[i].havewatched = "false";
            }
            else {
                allMovies[i].havewatched = "true";
            }  
        }
    }
    console.log("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
