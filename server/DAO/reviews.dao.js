const { Agent } = require("../models/agent");
const Review = require("../models/review");

function findAgent(agentId) {
  return Agent.findOne({
    where: { id: agentId },
  });
}

function createReview(rating, comment, agent) {
  return Review.create({
    rating: rating,
    comment: comment,
    AgentId: agent.id,
  });
}

function editReview(newReview, reviewId) {
  return Review.update(newReview, {
    where: { id: reviewId },
  });
}

function destroyReview(reviewId) {
  return  Review.destroy({
    where: { id: reviewId },
  });
}

module.exports = {
  findAgent,
  createReview,
  editReview,
  destroyReview
}