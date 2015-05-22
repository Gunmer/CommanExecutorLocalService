var http = require("http"),
    url = require("url"),
    path = require("path"),
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {
      
      var uri = url.parse(request.url).pathname;
      var filename = path.join(process.cwd(), uri);
      
      var exec = require('child_process').exec;
      exec(filename, function (error, stdout, stderr) {
            response.writeHead(200);
            response.write(filename + '\n' + stdout);
            response.end();
      });
  
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");