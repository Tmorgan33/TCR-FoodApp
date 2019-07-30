var http = require('http');
var url = require('url');
var db = require ('./db.js') 



var server = http.createServer(function (request, response) {
        response.setHeader('Access-Control-Allow-Origin', '*');
       
        // var filePath = '.' + parseUrl.pathname;
        var parseUrl = url.parse(request.url, true);
        if (url.parse === ('/index')); {
            response.writeHead(200, {'nodContent-Type': "text/plain"});
            response.write = ("you are requesting the index page");
            response.end();
         } 
        console.log('parseUrl');
        console.log('Get_All_Inventory');
            
       console.log('db.item');
              // request = url.parse;
            

                
       

        
                
        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.write("Ta Da we're done! ");
        // response.end();
        // console.log(parseUrl.pathname);
        
    }); 

            

server.listen(8080, function () {
 console.log('server is listening');
});
