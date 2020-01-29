const express = require('express')
const app = express()

const mongo = require('mongodb').MongoClient

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

let url = "mongodb://localhost:27017/rubberDB";

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//login
app.post('/api/get/login', (req, res) => {
    mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
        if (err) throw err
        else {
            let username = String(req.body.username);
            let password = String(req.body.password);
            let infoma = {
                username: username,
                password: password
            }
            console.log(infoma);
            let db = data.db("rubberDB");
            db.collection('users').findOne({ username: username, password: password }, function(err, doc) {
                if (err) throw err;
                console.log(doc);
                res.json({ result: "success", data: doc });
            });
        }
    })
});
//register
app.post('/api/get/register', (req, res) => {
    mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
        if (err) throw err
        else {
            console.log(req.body);
            let username = req.body.username;
            let password = req.body.password;
            let name = req.body.name;
            let address = req.body.address;
            let phone = req.body.phone;
            let statusUser = req.body.statusUser;
            let statusConfirm = req.body.statusConfirm;
            let infoma = {
                username: username,
                password: password,
                name: name,
                address: address,
                statusUser: statusUser,
                statusConfirm: statusConfirm,
                phone: phone
            }
            let db = data.db("rubberDB");
            db.collection("users").insertOne(infoma, function(err, res) {
                if (err) throw err;
                return { result: "success" };
            });
        }
    })
});
//getUser
app.post('/api/get/user', (req, res) => {
    mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
        if (err) throw err
        else {
            let id = String(req.body.id);
            console.log("id");
            console.log(id);
            let db = data.db("rubberDB");
            db.collection('users').findOne({ _id: id }, function(err, doc) {
                if (err) throw err;
                console.log(doc);
                res.json({ data: doc });
            });
        }
    })
});
app.listen(3000, (err, data) => {
    if (err) throw err
    console.log("------------------Server starting----------------")
});