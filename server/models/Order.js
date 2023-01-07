const mongoose = require('mongoose');
const Joi = require('joi');

const OrderSchema = new mongoose.Schema({
  organization: {
    type: mongoose.Types.ObjectId,
    ref: 'Organization',
    required: [true, 'Please provide organization'],
  },
  status:{
    type: String,
    enum:['منتهي','مكتمل','مرحلة الدفع','قيد الإنتظار','قيد التنفيذ'],
  },
},
{ timestamps: true }
);

OrderSchema.statics.schemaValidator = function (order) {
  const schema = Joi.object({
    organization:Joi.required(),
  
  });
  return schema.validate(order);
};



module.exports = mongoose.model('Order', OrderSchema);
