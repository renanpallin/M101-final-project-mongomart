var MongoClient = require('mongodb').MongoClient;
var ItemDAO = require('../items.js').ItemDAO;

MongoClient.connect("mongodb://localhost:27017/mongomart", (err, db) => {
	if (err) return console.error(err);

	var dao = new ItemDAO(db);
	db.collection(dao.COLLECTION_NAME).createIndex({
	    title: "text",
	    slogan: "text",
	    description: "text"
	}).then(msg => console.log(`Index ${msg} criado com sucesso`))
	  .catch(err =>  console.error('Um erro ocorreu: ', err))
	  .then(() => db.close());	
})
