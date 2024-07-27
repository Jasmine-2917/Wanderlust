const express = require("express");
const router = express.Router({mergeParams:true});
const WrapAsync = require("../utils/WrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,validateReview,isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js")

//Review Route - post request
router.post("/",isLoggedIn,validateReview,WrapAsync(reviewController.createReview));

//delete review post route 
router.delete("/:reviewId",isLoggedIn,isAuthor,WrapAsync(reviewController.destroyReview));

module.exports = router;