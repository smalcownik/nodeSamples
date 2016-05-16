function contentType(ext) {
    var ct;

    switch (ext) {
    case '.html':
        ct = 'text/html';
        break;
    case '.css':
        ct = 'text/css';
        break;
    case '.js':
        ct = 'text/javascript';
        break;
    default:
        ct = 'text/plain';
        break;
    }

    return {'Content-Type': ct};
}

var http = require('http'),
    fs = require('fs'),
    path = require('path');

var HTTP_OK = 200,
    HTTP_ERR_UNKNOWN = 500,
    HTTP_ERR_NOT_FOUND = 404;

var server =http.createServer(function (req, res) {
    var filepath = '.' + (req.url == '/' ? '/index.html' : req.url),
        fileext = path.extname(filepath); 

    fs.exists(filepath, function (f) {
        if (f) {
            fs.readFile(filepath, function (err, content) {
                if (err) {
                    res.writeHead(HTTP_ERR_UNKNOWN);
                    res.end();
                } else {

                    res.writeHead(HTTP_OK, contentType(fileext));
		   // res.writeHead(HTTP_OK,{'Access-Control-Allow-Origin': '*'
		   //		} );
                    res.end(content);
                }
            });
        } else {
            res.writeHead(HTTP_ERR_NOT_FOUND);
            res.end();
        }
    });
});


server.listen(80, function(){
    //Callback triggered when server is successfully listening. H$
    console.log("Server listening on: http://localhost:%s", 80);
    console.log("bla!!");
});
