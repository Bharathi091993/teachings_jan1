const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: "String"}
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel; 