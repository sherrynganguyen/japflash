const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  eng: String,
  jap: String,
  categoryId: String
});

module.exports = mongoose.model('Word', wordSchema);