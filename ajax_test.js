var http = require('http'),
    fs = require('fs');
//    path = require('path');

var server = http.createServer(function(request, response) {
    //var filePath = path.join('ajax_test.html');

//   console.log(request.headers)

    var filePath = './index.html';

//    var stat = fs.statSync(filePath,"utf8");

var stat = fs.readFileSync(filePath);

    response.writeHead(200, {
       // 'Content-Type': 'application/json',
'Content-Type': 'text/html',
'Access-Control-Allow-Origin': '*'
//        'Content-Length': stat.length
        });
response.write(stat);

response.end();

//    var readStream = fs.createReadStream(filePath);

// We replaced all the event handlers with a simple call to readS$
//    console.log(response.headers);
//    readStream.pipe(response);
});

server.listen(80, function(){
    //Callback triggered when server is successfully listening. H$
    console.log("Server listening on: http://localhost:%s", 80);
    console.log();
});

