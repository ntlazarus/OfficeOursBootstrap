var express = require('express');
var app = express();

var port = 3000;
var userRouter = require('./src/routes/userRoutes');
var dbRouter = require('./src/routes/dbRoutes')

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Users', userRouter)

app.use('/Db', dbRouter)

app.get('/', function(req, res){
	//res.send('Users');
	res.render('index', { 
		list: ['first val', '2nd val', '3rd val'],
		nav: 
		[
			{ Link : 'Services', Text: 'Services'},
			{ Link : 'Portfolio', Text: 'Portfolio'},
			{ Link : 'About', Text: 'About'},
			{ Link : 'Team', Text: 'Team'}, 
			{ Link : 'Contact', Text: 'Contact'},
			{ Link : 'Users', Text: 'Users'}
		]
	});
});

app.listen(port, function(err){
	console.log('The server is running on port: ' + port + 
		'. Navigate to http://127.0.0.1:' + port)
});