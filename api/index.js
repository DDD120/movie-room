const Review = require("../mongoose/schema/review");
const model = require("./../mongoose/model");

const getReview = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  res.send(review);
};

module.exports = {
  getReview,
};
