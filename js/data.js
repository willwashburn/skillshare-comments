// This is our model for the comments

var app = app || {};

app.comments = {
	idCount:0,
	"replies":[]
}

//This is the model for all of our comments
//When run, adds to the idCount for all comments for uniqueIDs
//returns comment object with default data 

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
app.addComment = function(text) {

	var comment = defaultComment();

	//for this example, make some default user stuff
	
   var imgSrc    = 'user-img-2.png',
   commenterName = 'Danya',
   shortBio      = 'Does awesome stuff at Skillshare';

	comment.imgSrc        = imgSrc;
	comment.commenterName = commenterName;
	comment.shortBio      = shortBio;
	comment.comment       = text;

	this.replies.push(comment);

}

//Search for a comment by id 
function getObject(theObject, x) {
    var result = null;
    if(theObject instanceof Array) {
        for(var i = 0; i < theObject.length; i++) {
            result = getObject(theObject[i],x);
        }
    }
    else
    {
        for(var prop in theObject) {
            if(prop == 'id') {
                if(theObject[prop] == x) {
                    return theObject;
                }
            }
            if(theObject[prop] instanceof Object || theObject[prop] instanceof Array)
                result = getObject(theObject[prop],x);
        }
    }
    return result;
}
//This is the view model
app.makeComment = function(parentID) {

	var parentComment = getObject(app.comments,parentID);
	app.addComment.call(parentComment, 'a new comment');
	app.updateView();

}

app.updateView = function(){

	var commentsTemplate  = Handlebars.compile($('#comments-template').html());

	Handlebars.registerPartial("reply", $("#reply-template").html());
	Handlebars.registerPartial("replyForm", $("#reply-form-template").html());
	Handlebars.registerPartial("comments", $("#comments-template").html());

	$('#comments').html(commentsTemplate(app.comments));

}

//quick and dirty function to add fake comments
app.addFauxComments = function(number) {

	for (i=0; i<number; i++) {
		var comment = defaultComment();
		this.push(comment);
	}

}
