const Joi = require('joi')

const reviewSchema = Joi.object({
  rating: Joi.number().precision(2).required(),
  comment: Joi.string().min(1).max(255).required(),
})

const updateReviewSchema = Joi.object({
  rating: Joi.number().precision(2).not().empty(),
  comment: Joi.string().min(1).max(255).not().empty(),
})

module.exports = {
  reviewSchema, 
  updateReviewSchema
};
