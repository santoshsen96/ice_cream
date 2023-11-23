const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  date:Number
});


const iceCreamModel = mongoose.model('iceCream', productSchema);

module.exports = {
    iceCreamModel
};
