const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

router.route("/signup")
.get(userController.renderSignUpForm)
.post(WrapAsync(userController.signUp));

router.route("/login")
.get(userController.renderLoginForm)
.post(savedRedirectUrl,passport.authenticate("local",{failureRedirect : "/login", failureFlash : true,}),userController.login);


router.get("/logout",userController.logout)

module.exports = router;