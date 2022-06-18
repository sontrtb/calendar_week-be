const Schema = require('../connectDB');
const mongoose = require('mongoose');

const accountSchema = new Schema({
    userName: String,
    password: String,
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', accountSchema);

module.exports = AccountModel;