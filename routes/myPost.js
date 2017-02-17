
var data = require("../data.json");

exports.view = function(req, res) {
//	var userid = req.query.userid;
	console.log("mypost called!");
	var userid = 1;
	var myposts;
	var accounts = data.accounts;
	var items = data.items;
	console.log("posts");
	for(var i = 0; i < accounts.length; i ++){  
        if(accounts[i].userid == userid){
        	myposts = accounts[i].posts;
        }       
    } 
    var posts = [];
	for(var i = 0; i < items.length; i ++){
		for(var j = 0; j < myposts.length; j ++){
			if(myposts[j] == items[i].itemid){
				posts.push(items[i]);
			}
		}
	}
	console.log(posts);
    res.render('myPost', {'posts': posts});
}