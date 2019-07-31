// Shoes Serever


var http = require("http");
var url = require('url');
var fs = require("fs");
var db = require('./db');

// var path = require('path');

	var server = http.createServer(function (req, res) {

		var parUrl = url.parse(req.url, true);
		// var filePath = '.' + parUrl.pathname;

		// db.getInv().then(result => {console.log(result)});
		// console.log();

		// console.log(parUrl.pathname);
		


		if(parUrl.pathname === ('/index')){
			// fs.readFile("food.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/plain" });
			res.write("You are requesting the index page.");
			res.end();
		// });
		}
		if (parUrl.pathname === ('/api/show')){
			res.writeHead(200, { 'Content-Type': "application/json", "access-control-allow-origin": '*' });
			db.getInv().then( function(result){
				res.write(result);
				res.end();
			}).catch(console.log)
					// res.send (db.getInv);
		// 	// 	}
		// 	// });
			// res.write(JSON.stringify(JSON.parse(db.getInv)));
			// res.end();
		// 	console.log(JSON.stringify(result));
		}
		console.log(parUrl.pathname);
		if(/^(\/api\/add)/.test(parUrl.pathname)){
			


			// fs.readFile("food.html", function (err, content) {
			res.writeHead(200, { 'Content-Type': "text/plain" });
			res.write("You are requesting the index page.");
			res.end();
		// });
	    // else if (parUrl.pathname === ('/ajaxGET.js')){
	    // fs.readFile("ajaxGET.js", function(err, content){
	    // 	res.writeHead(200, {'content-Type': "application/javascript"});
	    	// res.end(db.getInv);
	    // });
	    // }

	    
	
	};
	});
	server.listen(8080, function () {
			console.log("Listening on Port: "+ 8080);
		});
 




