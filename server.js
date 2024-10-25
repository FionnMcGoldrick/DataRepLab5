const express = require('express'); // Importing the express module
const app = express(); // Creating an instance of an Express application
const port = 3000; // Setting the port for the server

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Responding with a welcome message
});

// Starting the server and logging the URL to the console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack); // Logging the error stack to the console
    res.status(500).send('Something went wrong!'); // Sending a 500 status code with an error message
});

// Route with URL Parameters
/* 
app.get('/hello/:name/:surname', (req, res) => {
    res.send('Hello ' + req.params.name + " " + req.params.surname);
}); 
*/

// Get API Movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Status code 
    res.status(200).json({ myMovies: movies }); // Responding with a 200 status and sending the movies as JSON
});

// Path for HTML index page
const path = require('path'); // Importing the path module

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Sending the index.html file as a response
});

// Server static assets
app.use(express.static('public')); // Serving static files from the 'public' directory

// Get Request
app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Getting the first name from query parameters
    const lastname = req.query.lastname; // Getting the last name from query parameters
    res.send(`Hello ${firstname} ${lastname}`); // Responding with a greeting message
});

// Body Parser
const bodyParser = require('body-parser'); // Importing the body-parser module
app.use(bodyParser.urlencoded({ extended: true })); // Configuring body-parser to parse URL-encoded data

// Handle Post form 
app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Getting the first name from the request body
    const lastname = req.body.lastname; // Getting the last name from the request body
    res.send(`Hello ${firstname} ${lastname}`); // Responding with a greeting message
});
