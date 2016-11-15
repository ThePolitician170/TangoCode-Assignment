const express = require('express');
const fs = require('fs');
const app = express();
const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://127.0.0.1:27017/mytestdb', (err, database) => {
  if(err) return console.log(err);
  db = database;
});

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/cars', (req, res) => {
  const param = req.query.id;

  if (!param) {
      res.json({
        error: 'Missing required parameter `id`',
      });
      return;
  }
  var query = {};
  query['carId'] = param;
  var result = db.cars.find(query).toArray();
  console.log(result[0].name);


})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
