const mongoose = require('mongoose');
const Joi = require('joi');

const MapAreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
});
MapAreaSchema.statics.schemaValidator = function(mapArea) {
  const schema = Joi.object({
      name: Joi.string().required(),
 
  })

  return schema.validate(mapArea);
}
module.exports = mongoose.model('MapArea', MapAreaSchema);
