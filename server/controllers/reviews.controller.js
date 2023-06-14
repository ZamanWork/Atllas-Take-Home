const reviewService = require('../DAO/reviews.dao')

async function addReviewToAgent(req, res) {
  const agentId = req.params.agentId;
  const { rating, comment } = req.body;
  try {
    const agent = await reviewService.findAgent(agentId);

    if (!agent) {
      res.status(404).send({message: "Agent not found"});
    }

    const review = await reviewService.createReview(rating, comment, agent);

    return res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateReview(req, res) {
  const reviewId = req.params.id;
  const newReview = req.body;
  try {
    const [affectedRows] = await reviewService.editReview(newReview, reviewId);

    if (affectedRows > 0) {
      res.status(200).send({message: "Review Updated Successfully"});
    } else {
      res.status(404).send({message: "Review not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

async function deleteReview(req, res) {
  const reviewId = req.params.id;
  try {
    const deletedReview = await reviewService.destroyReview(reviewId);

    if (deletedReview >  0) {
      res.status(200).send({message: "Review Deleted Successfully"});
    } else {
      res.status(404).send({message: "Review not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

module.exports = {
  addReviewToAgent,
  updateReview,
  deleteReview,
};

