
var data = require("../data.json");

exports.addItem = function(req, res) {
	var userid = req.query.userid;
	var postid = 0010;
	var image = null;
	var newItem = {
		''
	}

	for(var i = 0; i < items.length; i ++){

	}
	data.items.push(newItem);
	for(var i = 0; i < data.accounts.length; i ++){  
        if(data.accounts[i].userid == userid){
        	data.accounts[i].posts.add(postid);
        }       
    }  
    res.render('myPost', data);
}