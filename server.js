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

app.get('/getStations', (req, res) =>{
  StationModel.find()
  .then(stations => res.json(stations))
  .catch(err => res.json(err))
})

app.listen(4000, () => {
  console.log("Server started on port 4000")
})