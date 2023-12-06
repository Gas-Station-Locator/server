const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
    },
)

const StationModel = mongoose.model('testPrices', StationSchema);
module.exports = StationModel;