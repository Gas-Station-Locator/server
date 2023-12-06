const mongoose = require('mongoose');

const StationSchema = new mongoose.Schema({
    gasPrices: [],
    address: String,
    title: String,
    },
)

const StationModel = mongoose.model('testPrices', StationSchema);
module.exports = StationModel;