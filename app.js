var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

//app.get ('/', function(request, response){
        //response.write('Hello World');
        //response.end();
        //response.sendFile( + '/public/index.html');
        //});
        
app.use(express.static('public'));

app.get ('/blocks', function(request, response){
        var blocks = ['Fixed', 'Movable', 'Rotating'];
        response.json(blocks);
        //response.redirect(301, '/parts');
        });

app.listen(3000, function(){
        console.log('Listening on port 3000');
        });