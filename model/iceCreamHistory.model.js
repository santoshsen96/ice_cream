const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  mrp: {
    type: Number,
  },
  price: {
    type: Number,
  },
  selling_price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  date: Number,
});

const iceCreamHistoryModel = mongoose.model("iceCreamHistory", productSchema);

module.exports = {
  iceCreamHistoryModel,
};
