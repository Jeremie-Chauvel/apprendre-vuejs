const express = require('express');
const assetServer = require('./assetServer');
const catalogServer = require('./catalogServer');
const app = express();
const port = 3000;

// Create a middleware to add CORS Headers to response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  console.log(`${req.method}: ${req.url}`);
  next();
});

// HealthCheck, request at localhost:3000/ will just return 'OK'
// useful to test that the server is correctly running
app.get('/', (request, response) => {
  response.send('OK');
});

// == Serve static files ==
// create asset server
assetServer(app);
// create catalog server
catalogServer(app);

// listen for incoming client requests
app.listen(port, (err) => {
  if (err) {
    return console.error('Something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});
