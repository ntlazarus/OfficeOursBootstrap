var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var usersData = [ 
		{	name: 'User 1',
			college: 'College 1',
			city: 'City 1',
			phone: {
				type: 'cell',
				value: '678-111-2233'
			},
			summary: 'Math tutor'
		},
		{
			name: 'User 2',
			college: 'College 2',
			city: 'City 2',
			phone: {
				type: 'home',
				value: '404-111-2233'
			},
			summary: 'CS tutor'
		}];

dbRouter.route('/AddUserData')
	.get(function(req, res){
		// res.send('Successful route test')

		var url = 'mongodb://localhost:27017/OfficeOurs';
		mongodb.connect(url, function(err,client){
			var db = client.db('OfficeOurs');
			db.collection('testUsers3').insertMany(usersData, function(err, results){
				res.send(results);
				client.close();
			});

		});

});

module.exports = dbRouter;