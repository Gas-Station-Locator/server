const express = require("express")
const mongoose = require("mongoose");
const StationModel = require("./models/stations");
const dbURL = "mongodb+srv://dbUser:dbUser@atlascluster.4ji6rcf.mongodb.net/test?retryWrites=true&w=majority"


const app = express();
app.use(express.json());

/**
app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
})
 */

mongoose.connect(dbURL)

/**
 * 
var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', async function () {

  const collection  = connection.db.collection("testPrices");
  collection.find({}).toArray(function(err, data){
      console.log(data); // it will print your collection data
  });

});
 */

// coll = StationModel.db['testPrices'];
/**
 */
app.get('/getStations', (req, res) =>{
  StationModel.find()
  .then(stations => res.json(stations))
  .catch(err => res.json(err))
})

app.listen(4000, () => {
  console.log("Server started on port 4000")
})