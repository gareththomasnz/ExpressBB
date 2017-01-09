$(function(){

	//Make a get request to our express backend, it should return a list of blocks in JSON format
	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		var list = [];
                var content, block;
                for(var i in blocks){
                        block = blocks[i];
                        content = '<a href="/blocks/' +block+'">'+block+'</a>';
                        list.push($('<li>', { html: content }));
                }
		//for(var i in blocks){
			//Adds block names to the new list
			//list.push($('<li>', { text: blocks[i]}));
		//}
		//Add our list to the HTML page
		$('.block-list').append(list);
	}
        
        $('form').on('submit', function(event){
                event.preventDefault();
                var form = $(this);
                var blockData = form.serialize();
                
                $.ajax({
                        type: 'POST', url: '/blocks', data: blockData
                        }).done(function(blockName){
                        appendToList([blockName]);
                        form.trigger('reset');
                        });
                
                });
});