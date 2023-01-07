const mongoose = require('mongoose');
const Joi = require('joi');

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },

  state: {
    type: mongoose.Types.ObjectId,
    ref: 'State',
    required:true
  },
});

CitySchema.statics.schemaValidator = function(city) {
  const schema = Joi.object({
      name: Joi.string().min(3).max(25).required(),
      state:Joi.required()
  })

  return schema.validate(city);
}

module.exports = mongoose.model('City', CitySchema);
