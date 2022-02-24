const mongoose = require('mongoose');

const config = require('../config/auth');

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;