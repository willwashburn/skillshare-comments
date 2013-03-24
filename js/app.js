$(document).ready(function(){

	if(app.comments.replies.length ===0) {
		//Build fake data
		app.addFauxComments.call(app.comments.replies,1);
		app.addFauxComments.call(app.comments.replies[0].replies,2);
		app.addFauxComments.call(app.comments.replies[0].replies[0].replies,1);
	}

	console.log(app.comments);

	
	app.updateView();

	$('.delete-wrapper').hover(function() {
		$(this).find('.delete').show();
	},function(){
		$(this).find('.delete').hide();
	});

     
});
