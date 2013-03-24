$(document).ready(function(){

	if(app.comments.replies.length ===0) {
		//Build fake data
		app.addFauxComments.call(app.comments.replies,1);
		app.addFauxComments.call(app.comments.replies[0].replies,2);
		app.addFauxComments.call(app.comments.replies[0].replies[0].replies,1);
	}

	console.log(app.comments);

	//Compile templates
	var commentsTemplate  = Handlebars.compile($('#comments-template').html());

	Handlebars.registerPartial("reply", $("#reply-template").html());
	Handlebars.registerPartial("replyForm", $("#reply-form-template").html());
	Handlebars.registerPartial("comments", $("#comments-template").html());

	$('#comments').html(commentsTemplate(app.comments));

});
