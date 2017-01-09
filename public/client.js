$(function(){

	//Make a get request to our express backend, it should return a list of blocks in JSON format
	$.get('/blocks', appendToList);

	function appendToList(blocks) {
		var list = [];
                var content, block;
                for(var i in blocks){
                        block = blocks[i];
                        content =  
                        '<a href="#" data-block="'+block+'"><img src="delete.jpg"></a>'+
                        '<a href="/blocks/' +block+'">'+block+'</a>';
                        list.push($('<li>', { html: content }));
                }
		//for(var i in blocks){
			//Adds block names to the new list
			//list.push($('<li>', { text: blocks[i]}));
		//}
		//Add our list to the HTML page
		$('.block-list').append(list);
	}
        
        $('.block-list').on('click', 'a[data-block]', function(event){
                if (!confirm('Are you sure?')){
                        return false;
                }
                
                var target = $(event.currentTarget);
                
                $.ajax({
                        type: 'DELETE', url: '/blocks/' + target.data('block')
                        }).done(function(){
                        target.parents('li').remove();
                        });
                
                });
        
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