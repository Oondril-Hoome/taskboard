/**
 * Creation of the server Node.js which is connected to a MongoDb database.
 * The Mongo database is connected on an mLab url.
 */
let mongodb = require('mongodb');
let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
let url = 'mongodb://localhost:27017/hoome';

app.use(cors());

app.use(bodyParser.json());

let data = '';

// TO DO TASKS
app.get('/api/:username/taskboard/todotasks', async (req, res) => {
  let username = req.params.username;
  console.log('Requested list of todotasks for '+username);
  data = req.body;
  let MongoClient = mongodb.MongoClient;
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    let dbo = db.db('hoome');
    if (err) {
      console.log('Impossible de récupérer les infos', err);
    } else {
      console.log('Connection established');
      var collection = dbo.collection('users');
      collection.find({"userAuth.userName":username},{"userData.taskboardData.toDoTasks":1})
        .toArray(function (err, results) {
          if (err) {
            res.send('Error detected', err);
            console.log('Error detected', err);
          } else {
            res.json(results);
            console.log('Succcess fully fetch report', results);
          }
        });
    }
  });
});

app.post("/api/:username/taskboard/todotasks", async (request, response) => {
  let username = req.params.username;
  console.log('Requested add a todotask to '+username);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    let dbo = db.db('hoome');
    if (err) {
      console.log('Unable to connect to the server', err);
    } else {
      console.log('Connection established');
      var collection = dbo.collection('users');
      var task = {
        title: req.body.title,
        longitude: req.body.position.long,
        latitude: req.body.position.lat,
        date: req.body.dateTime
      };
      console.log(task);

      collection.insertMany([task], null, function (err, result) {
        if (err) {
          console.log('Unable to add this to the collection', err);
        } else {
          console.log('Added to the collection');
        }
        db.close();
      });
    }
  });
  res.send({ message: 'Successfully posted data' });
});

app.get("/api/:username/taskboard/todotasks/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested get the task '+ id +' of '+username);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.put("/api/:username/taskboard/todotasks/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested to update the task '+ id +' of '+username);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.delete("/api/:username/taskboard/todotasks/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested delete the task '+ id +' of '+username)

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.get("/api/:username/taskboard/todotasks/:day", async (request, response) => {
  let username = req.params.username;
  let day = req.params.day;
  console.log('Requested get the todotasks'+ id +' of '+username +' of the day '+day);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});
app.get("/api/:username/taskboard/todotasks/:week", async (request, response) => {
  let username = req.params.username;
  let week = req.params.week;
  console.log('Requested get the task '+ id +' of '+username+' of the week '+week);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});
app.get("/api/:username/taskboard/todotasks/:month", async (request, response) => {
  let username = req.params.username;
  let month = req.params.month;
  console.log('Requested get the task '+ id +' of '+username+' of the month '+month);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});
app.get("/api/:username/taskboard/todotasks/:year", async (request, response) => {
  let username = req.params.username;
  let year = req.params.year;
  console.log('Requested get the task '+ id +' of '+username+' of the year '+ year);

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

// TASKS HISTORY
app.get('/api/:username/taskboard/taskshistory', async (req, res) => {
  let username = req.params.username;
  console.log('Requested list of todotasks for '+username);
  data = req.body;
  let MongoClient = mongodb.MongoClient;
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    let dbo = db.db('hoome');
    if (err) {
      console.log('Impossible de récupérer les infos', err);
    } else {
      console.log('Connection established');
      var collection = dbo.collection('users');
      collection.find({"userAuth.userName":username},{"userData.taskboardData.tasksHistory":1})
        .toArray(function (err, results) {
          if (err) {
            res.send('Error detected', err);
            console.log('Error detected', err);
          } else {
            res.json(results);
            console.log('Succcess fully fetch report', results);
          }
        });
    }
  });
});

app.post("/api/:username/taskboard/taskshistory", async (request, response) => {
  let username = req.params.username;
  console.log('Requested add a task to '+username +' tasksHistory');

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.get("/api/:username/taskboard/taskshistory/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested get the task '+ id +' of '+username+' tasksHistory');

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.put("/api/:username/taskboard/taskshistory/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested to update the task '+ id +' of '+username+' tasksHistory');

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.delete("/api/:username/taskboard/taskshistory/:id", async (request, response) => {
  let username = req.params.username;
  let id = req.params.id;
  console.log('Requested delete the task '+ id +' of '+username+' tasksHistory');

  data = req.body;
  let MongoClient = mongodb.MongoClient;
});

app.listen(process.env.PORT || 5000, () => console.log('Sucessfully started app on port ', process.env.PORT || 5000));
