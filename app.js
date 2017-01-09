var express = require('express');
var app = express();
app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

var logger = require('./logger');

//var blocksRoute = app.route('/blocks');

app.use(logger);

//app.get ('/', function(request, response){
//        response.write('Hello World');
//        response.end();
//        response.sendFile( + '/public/index.html');
//        });
        




var locations = {
        'Fixed' : 'First Floor', 'Movable': 'Second Floor', 'Rotating': 'Penthouse'
};



//app.route('/blocks')

//app.route('/blocks/:name')



app.get('/locations/:name', function(request, response){
        var location = locations[request.blockName];
                if(!location){
                response.status(404).json('No description found for ' + request.params.none);
        }else{
                response.json(location);
        }
        });



app.listen(3000, function(){
        console.log('Listening on port 3000');
        });