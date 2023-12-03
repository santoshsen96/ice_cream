const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    totalProfit: {
        type: Number,
        required: true,
      },
      totalBuyAmount: {
        type: Number,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      saleDate: {
        type: Date,
        default: Date.now,
      },
      itemsSold: [
        {
          productId: {
            type: String
          },
          productName: {
            type: String,
            required: true,
          },
          buyPrice: {
            type: Number,
            required: true,
          },
          sellingPrice: {
            type: Number,
            required: true,
          },
          quantitySold: {
            type: Number,
            required: true,
          },
          totalAmount: {
            type: Number,
            required: true,
          },
        },
      ],
});

const iceCreamHistoryModel = mongoose.model("iceCreamHistory", productSchema);

module.exports = {
  iceCreamHistoryModel,
};
