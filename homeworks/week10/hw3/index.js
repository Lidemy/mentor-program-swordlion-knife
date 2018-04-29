var list = [];

$(document).ready( ()=> {
	
	$('.submit').click( function() {
		if($('.todo').val()!==''){

			list.unshift({ 
		      	text: $('.todo').val(),
		      	isCompleted: false
		    });

		    render();

		    $('.todo').val('');

		}
	})

	$('.container').on('click','.delete', function (e) {
		
		var index = $('.todo-item').index( $(e.target).parents('.todo-item') )-1;

	    list = list.filter( (item, i) => i !== index );

	    render();
		
	})

	$('.container').on('click', '.complete', function(e){
    
	    var index = $('.todo-item').index( $(e.target).parents('.todo-item'))-1;
	    console.log($('.todo-list:first'));

	    list[index]['isCompleted'] = list[index]['isCompleted'] ? false : true;

	    render();

	});
})

function render(){
	
	$('.todo-item:gt(0)').remove();

  	for(var i=0; i<list.length; i++){

  		var [checkSign, isCompletedClass] = list[i]['isCompleted'] ? ['完成', '--completed'] : ['未完成',''];
    
	    $('.todo-item:last').after(`
	      <div class="todo-item">
		        <button class="complete">${checkSign}</button>
		        <div class="content${isCompletedClass}">${list[i]['text']}</div>
		        <button class='delete btn btn-primary'>delete</button>
	      </div>
	    `)
	}
}