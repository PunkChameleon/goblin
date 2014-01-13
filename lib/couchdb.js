var config = require('./config.js'),
	couchConnectUrl = config.protocol + config.couchUsername + ":" + config.couchPassword + "@" + config.couchURL + ":" +
		config.couchPort,
	nano = require('nano')(couchConnectUrl),
	utils = require('./utils.js'),
	db;

nano.request({
	db: "goblin-nano"
}, function (err) {

	if (err) {
		nano.db.create('goblin-nano', function (err) {
			if (err) {
				console.log("There has been an error finding your CouchDB. Please make sure you have it installed and properly pointed to in '/lib/config.js'.");
				console.log(err);
				process.exit();
			}
		});
	}

	nano.use('goblin-nano');

	//module.exports = nano

});
/*
//Check if DB exists
db.exists(function (err, exists) {
	if (err) {
		
		console.log(err);
		process.exit();
	} else if (!exists) {
		db.create();
		console.log("Welcome! New database created.");
	} else {
		console.log("Talking to CouchDB at " + config.couchURL + " on port " + config.couchPort);
	}
}); */

db = nano.use('goblin-nano');

module.exports = db;