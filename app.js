
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var myPost = require('./routes/myPost');
var newPost = require('./routes/newPost');
var history = require('./routes/history');
var browse = require('./routes/browse');
var match = require('./routes/match');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var logininfo = require('./routes/logininfo');
var login = require('./routes/login');
var browselist = require('./routes/browselist');



// var match = require('./routes/match');
// Example route
// var user = require('./routes/user');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/browse', browse.view);
app.get('/login', login.view);
app.get('/match', match.view);
app.get('/history', history.view);
app.get('/myPost', myPost.view);
app.get('/newPost', newPost.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/login/logininfo', logininfo.getLoginData);
app.get('/browse/browselist', browselist.getItemData);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
