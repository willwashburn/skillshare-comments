$(document).ready(function(){

	if(app.comments.replies.length ===0) {
		//Build fake data
		app.addFauxComments.call(app.comments.replies,1);
		app.addFauxComments.call(app.comments.replies[0].replies,2);
		app.addFauxComments.call(app.comments.replies[0].replies[0].replies,1);
	}

	app.updateView();

    app.bindDelete();

	$('body').keypress(function(event){

		if (event.keyCode == 10 || event.keyCode == 13) 
			event.preventDefault();

	});
     
});
