const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoLocation = mongoose.model('GeoLocation', new Schema({
    lat_long: {
        type: String,
        maxlength: 50,
        minLength: 10,
        required: true
    },
}))

module.exports = GeoLocation;