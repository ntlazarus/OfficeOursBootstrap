var express = require('express');
var userRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

userRouter.route('/')
	.get(function(req, res){
		var url = 'mongodb://localhost:27017/OfficeOurs';
		mongodb.connect(url, function(err,client){
			var db = client.db('OfficeOurs');
			db.collection('testUsers3').find({}).toArray(function(err, results){
				res.render('users', { 
					list: ['first user', '2nd val', '3rd val'],
						nav: [		
						{ Link : 'Services', Text: 'Services'},
						{ Link : 'Portfolio', Text: 'Portfolio'},
						{ Link : 'About', Text: 'About'},
						{ Link : 'Team', Text: 'Team'}, 
						{ Link : 'Contact', Text: 'Contact'},
						{ Link : 'Users', Text: 'Users'}
						],
					users: results
			});

		});

		
	});
});


userRouter.route('/:id')
	.get(function(req, res){
		var id = req.params.id;
		res.render('user', { 
		list: ['first user', '2nd val', '3rd val'],
		nav: [		
			{ Link : 'Services', Text: 'Services'},
			{ Link : 'Portfolio', Text: 'Portfolio'},
			{ Link : 'About', Text: 'About'},
			{ Link : 'Team', Text: 'Team'}, 
			{ Link : 'Contact', Text: 'Contact'},
			{ Link : 'Users', Text: 'Users'}
		],
		users: usersData[id]
	});
	});


module.exports = userRouter;


