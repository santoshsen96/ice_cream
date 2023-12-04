const express = require("express");

const { auth } = require("../middleware/auth.middleware");
const { iceCreamHistoryModel } = require("../model/iceCreamHistory.model");

const iceCreamHistoryRouter = express.Router();
//iceCreamRouter.use(auth)

iceCreamHistoryRouter.post("/post", async (req, res) => {
  try {
    const history = new iceCreamHistoryModel(req.body);
    await history.save();
    res.json({ msg: "new history added", history: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

iceCreamHistoryRouter.get("/", async (req, res) => {
  try {
    let query = {};

    if (req.query.startDate) {
      const startDate = new Date(req.query.startDate);

      query.saleDate = { $gte: startDate };
    }

    if (req.query.endDate) {
      const endDate = new Date(req.query.endDate);

      query.saleDate = { ...query.saleDate, $lte: endDate } || {
        $lte: endDate,
      };
    }

    const iceCream = await iceCreamHistoryModel.find(query);

    res.send(iceCream);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// iceCreamRouter.patch("/update/:ID", async (req, res) => {
//     const { ID } = req.params;
//     console.log(ID)
//     try {
//         // Remove the unnecessary findOne operation
//         await iceCreamModel.findByIdAndUpdate({ _id: ID }, req.body);
//         res.json({ msg: `${ID} has been updated` });
//     } catch (err) {

//         res.json({ error: err.message });
//     }
// });

module.exports = {
  iceCreamHistoryRouter,
};
