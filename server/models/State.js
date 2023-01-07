const mongoose = require('mongoose');
const Joi = require('joi');

const StateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
StateSchema.virtual('cities', {
  ref: 'City',
  localField: '_id',
  foreignField: 'state',
  justOne: false,
});
 
StateSchema.statics.schemaValidator = function(state) {
  const schema = Joi.object({
      name: Joi.string().min(3).max(25).required(),
 
  })

  return schema.validate(state);
}
module.exports = mongoose.model('State', StateSchema);
