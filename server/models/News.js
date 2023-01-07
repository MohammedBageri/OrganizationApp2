const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  subject: {
    type: String,
  },
  image: {
    type: String,
    required: [true],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model('New', NewsSchema);
