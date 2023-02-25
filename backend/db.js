const MongoClient = require('mongodb').MongoClient;
var db;
const DB_URL = "mongodb+srv://admin:qwer1234@cluster0.zcxdyj2.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(DB_URL, function (err, client) {
    if (err)
        return console.log(err);
    db = client.db('socket');
});