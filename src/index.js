// Imports the express framework required to build the server
const express = require('express');
// Imports the setRoutes function from the routes module
const { setRoutes } = require('./routes/index');

// Creates an instance of an Express application
// This instance will be used to set up the server and define routes
// The express() function is a top-level function exported by the express module
const app = express(); // this is defining that application is an instance of express

// Sets the port for the server to listen on 
// what is port? A port is numerical identifier of a specific process or service on a computer, 
// used in networking to route data to the correct application
// when you run your server, it listens on a specific port for incoming requests
// when client s send requests to the server, they specify the port number in the request, which
// helps the request to reach to the correct application
const PORT = process.env.PORT || 3000;

// Middleware, it helps to parse incoming requests with JSON payloads
// This is important for handling JSON data sent in the request body, without
// this middleware, the server would not be able to understand JSON data sent in requests and it
// would return undefined
app.use(express.json());

// after creating application instance and setting the port, we need to set up the routes
// setRoutes is a function that takes the app instance as an argument, defines the routes for the application
// and registers them with the app instance
setRoutes(app);

// Starts the server and makes it listen for incoming requests on the specified port
// The app.listen() method binds and listens for connections on the specified host and port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});