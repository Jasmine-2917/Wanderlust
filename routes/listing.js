const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//Index Route
//Create Route
router.route("/")
.get(WrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing, WrapAsync (listingController.createListing));



//new form route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//show route 
//update route
//delete listing route
router.route("/:id")
.get(WrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,WrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,WrapAsync(listingController.destroyListing));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,WrapAsync(listingController.renderEditForm));


module.exports = router;