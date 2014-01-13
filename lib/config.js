module.exports = {

	// Goblin Admin user name
	goblinUsername: "admin",

	// Goblin Admin password
	goblinPassword: "admin",

	// What Port you want goblin deployed on
	desiredPort: 8000,

	// Couch Admin user name
	couchUsername: "admin",

	// Couch Admin Password
	couchPassword: "admin",

	//SSL
	ssl: false,

	// Used internally for Protocol
	protocol: this.ssl ? "https://" : "http://",

	// URL of the CouchDB instance
	couchURL: "127.0.0.1",

	// Port of the CouchDB instance
	couchPort: 5984

};