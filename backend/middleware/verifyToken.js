const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const User = mongoose.model('User')
/***************************************************/
//this is the middle ware functtion that will make the varify on the routs so the user cann't use the rout if 
//he don't have theToken 
//next === callback function 
module.exports = function(req,res,next){
    //authorization = Bearer kjgkjgjkgkjgkjgkjg
    const {authorization} = req.headers;
  console.log(authorization);

    if(!authorization)
        return res.status(401).json({errore:"you must login first"});

    const token = authorization.replace('Bearer ','');
    
    jwt.verify(token, process.env.SECRET_TOKEN,(err, playload)=>{
       if(err)
        return res.status(401).json({errore:"you myst login first"});
     //   console.log(playload);
        const {retrevdUser} = playload;
        User.findById(retrevdUser)
        .populate('postedBy','_id name createdAt avatarImg')
        .then(userData=>{
            req.user = userData
          //  console.log(userData);
            next();
        })
    });
}