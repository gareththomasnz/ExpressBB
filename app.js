var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

//app.get ('/', function(request, response){
//        response.write('Hello World');
//        response.end();
//        response.sendFile( + '/public/index.html');
//        });
        
app.use(express.static('public'));

var blocks = {
        'Fixed': 'Fastened securely in position',
        'Movable': 'Capable of being moved',
        'Rotating': 'Moving in a circle'
};

var locations = {
        'Fixed' : 'First Floor', 'Movable': 'Second Floor', 'Rotating': 'Penthouse'
};

app.param('name', function(request, response, next){
        var name = request.params.name;
        var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
        
        request.blockName = block;
        next();
        });

app.get ('/blocks/:name', function(request, response){
        //var name = request.params.name;
        //var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
        var description = blocks[request.blockName];
        if(!description){
                response.status(404).json('No description found for ' + request.params.none);
        }else{
                response.json(description);
        }

        });

app.get('/locations/:name', function(request, response){
        var location = locations[request.blockName];
                if(!location){
                response.status(404).json('No description found for ' + request.params.none);
        }else{
                response.json(location);
        }
        });

app.get ('/blocks', function(request, response){
        //var blocks = ['Fixed', 'Movable', 'Rotating'];
        //if(request.query.limit >= 0){
        //        response.json(blocks.slice(0, request.query.limit));
        //}else{
                       response.json(Object.keys(blocks));
        //response.redirect(301, '/parts'); 
        //}
//
        });

app.listen(3000, function(){
        console.log('Listening on port 3000');
        });