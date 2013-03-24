// This is our model for the comments

var app = app || {};

app.comments = {
	idCount:0,
	"replies":[]
}

//This is the model for all of our comments
//When run, adds to the idCount for all comments for uniqueIDs
//returns comment object with default data to be overwritten

var defaultComment = function() {

	app.comments.idCount++;

	return {
		"id"            : app.comments.idCount,
		"imgSrc"        : "user-img-1.png",
		"commenterName" : "Michael Jordan",
		"time"			: "2 hours ago",
		"shortBio"      : "Wears a lot of nike shoes",
		"comment"       : 'Mauis iaculis portitor posuere. praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a portititor letcus condimentum laoreet. Nunc eu ullamcorper orci.Quisque eget.',
		"replyForm"     : '',
		"replies"       : []
	}
}

//Use the model to make a new comment
app.addComment = function(imgSrc,commenterName,shortBio,comment) {

	var comment = defaultComment();

	comment.imgSrc        = imgSrc;
	comment.commenterName = commenterName;
	comment.shortBio      = shortBio;
	comment.comment       = comment;

	this.replies.push(comment);

}

//quick and dirty function to add fake comments
app.addFauxComments = function(number) {

	for (i=0; i<number; i++) {
		var comment = defaultComment();
		this.push(comment);
	}

}
