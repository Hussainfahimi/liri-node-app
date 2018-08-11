require("dotenv").config();
var request = require("request");

//Add the code required to import the keys.js file and store it in a variable.?????
var command = process.argv[2];
var name = process.argv[3];
if (command == 'movie-this') {
  console.log(command);
  moviethis(name);
}
else if (command == "spotify-this-song") {
  spotifythissong(name);
}

//gitting data for movie

function moviethis(movie_name) {

  request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {


      console.log("The movie's rating is: " + JSON.parse(response.body).imdbRating);
    }

  });

}//this is the end of the movie-this function


function spotifythissong(name) {

  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
    id: 'c316d9b4c744448f99c1c6fc62f834c4',
    secret: 'f760a72b20734d50a9b76ba29889c553'
  });

  spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    console.log(data);
  });

}// end of the function spotifythissong

