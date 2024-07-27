const User = require("../models/user")

module.exports.renderSignUpForm =(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.signUp = async(req,res)=>{
try{
    let {username,email,password} = req.body;
const newUser = new User({username,email});
const registeredUser = await User.register(newUser,password); 

req.login(registeredUser,(err)=>{
    if(err){
        next(err);
    }
req.flash("success","Welcome to Wonderlust!");
res.redirect("/listings");
})
} catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async(req,res)=>{
    let{username}=req.body;
    req.flash("success",`Welcome ${username} to wonderlust!`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

    //ALTERNATIVE
    // if(res.locals.redirectUrl){
    // res.redirect(res.locals.redirectUrl);
    // }else {
    // res.redirect("/listings");
    // }
}

module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You have logged out!")
        res.redirect("/listings");
    })
}