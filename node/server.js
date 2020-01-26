// const express = require('express')
// const app = express()

// const mongo = require('mongodb').MongoClient

// let url = "mongodb://localhost:27017/rubberDB";

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// app.get('/api/get', (req, res) => {
//     mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
//         if (err) throw err
//         else {
//             let db = data.db("rubberDB")
//             let infoma = {
//                 SerialNumber: 3,
//                 id: 4
//             }
//             console.log(infoma);
//             db.collection("rfid").insertOne(infoma, function(err, res) {
//                 if (err) throw err;
//                 data.close();
//             });
//         }
//         res.end()
//     })
// });
// app.get('/api/get/rfid', (req, res) => {
//     mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
//         if (err) throw err
//         else {
//             let db = data.db("rubberDB")
//             db.collection("rfid").findOne({}, function(err, doc) {
//                 if (err) throw err;
//                 console.log(doc);
//                 res.json({ result: "success", data: doc });
//             });
//         }
//     })
// });
// app.get('/api/get/rfidAll', (req, res) => {
//     mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
//         if (err) throw err
//         else {
//             let db = data.db("rubberDB")
//             db.collection("rfid").find({}).toArray(function(err, doc) {
//                 if (err) throw err;
//                 console.log(doc);
//                 res.json({ result: "success", data: doc });
//             });
//         }
//     })
// });
// app.get('/api/get/rfid/id', (req, res) => {
//     mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
//         if (err) throw err
//         else {
//             let db = data.db("rubberDB");
//             let xid = 2;
//             db.collection("rfid").findOne({ id: xid }, function(err, doc) {
//                 if (err) throw err;
//                 console.log(doc);
//                 res.json({ result: "success", data: doc });
//             });
//         }
//     })
// });
// app.get('/api/get/rfid/idName', (req, res) => {
//     mongo.connect(url, { useUnifiedTopology: true }, function(err, data) {
//         if (err) throw err
//         else {
//             let db = data.db("rubberDB");
//             let xid = 2;
//             let SerialNumber = 4;
//             db.collection("rfid").find({ id: xid, SerialNumber: SerialNumber }).toArray(function(err, doc) {
//                 if (err) throw err;
//                 console.log(doc);
//                 res.json({ result: "success", data: doc });
//             });
//         }
//     })
// });
// app.listen(3000, (err, data) => {
//     if (err) throw err
//     console.log("------------------Server starting----------------")
// });