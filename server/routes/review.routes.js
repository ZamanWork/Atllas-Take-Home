const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const ReviewCtrl = require('../controllers/reviews.controller');
const {reviewSchema, updateReviewSchema} = require("../validators/review.validator");
const { validateReview } = require('../utils');


router.post('/rate-agent/:agentId', validateReview(reviewSchema), asyncHandler(ReviewCtrl.addReviewToAgent));
router.patch('/update-review/:id', validateReview(updateReviewSchema), asyncHandler(ReviewCtrl.updateReview));
router.delete('/delete-review/:id', asyncHandler(ReviewCtrl.deleteReview));

module.exports = router;
