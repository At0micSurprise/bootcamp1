var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function (request, response) {
  //added pathname to get the url "listings" to work
  var parsedUrl = url.parse(request.url).pathname;
  //console.log("wantsumfuk");
  /*
    Your request handler should send listingData in the JSON format if a GET request 
    is sent to the '/listings' path. Otherwise, it should send a 404 error. 

    HINT: explore the request object and its properties 
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */

  //my code part 1 starts here


  if (request.method == "GET" && parsedUrl == '/listings') {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(listingData);
  }
  else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('Bad gateway error');
  }
};
// and part 1 ends here
fs.readFile('listings.json', 'utf8', function (err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 
   */
//my code part 2 starts here
  server = http.createServer(requestHandler);
  listingData = data;

  server.listen(port, function () {
  });
});
//part 2 ends here
console.log('Server started');
