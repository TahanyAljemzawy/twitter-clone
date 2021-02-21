//the authontication route for regester page (login)
const router = require('express').Router();
//import the usermodel o use the schema to insert the data 
const User = require('../DBmodels/User')
// use joi to validate the data inputs from user 
const Joi = require('@hapi/joi');
//for hashing the password
const bcrypt = require('bcrypt');
//for the token
const JWT = require('jsonwebtoken');
//the user model schema
const { schema } = require('../DBmodels/User');
require('dotenv').config()
const verifyToken = require('../middleware/verifyToken')
/******************************************/

//the validation schema using joi :)
const querySchema = Joi.object({

    name         : Joi.string().required(),
    email        : Joi.string().required().lowercase().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password     : Joi.string().min(8).required(),
    passwordAgain: Joi.ref('password'),//to equal password
    avatarImg    : Joi.string(),
    coverImg     : Joi.string(),
    pio          : Joi.required(),
  })

  router.post('/register', async(req, res)=> {
    //take the values from the req
    const { name, email, password, passwordAgain, avatarImg, coverImg, pio } = req.body;
    console.log(req.body);
    //check if the email is not alredy exist at the db
    const doesExist = await User.findOne({ email })
    if(doesExist)
    return res.status(402).json({msg :"the email is used"})
    //check the validation schema
    const{error} = querySchema.validate(req.body);
    if(error){
    console.log(error)
    return res.status(403).json({msg :error.details[0].message})}
    //create the salt to encrybt it
    const salt = await bcrypt.genSalt();
    //encrybt it
    const hashedPassword = await bcrypt.hash(password,salt);
    //make the new user schema
    const user = new User({

      name         : name,
      email        : email,
      password     : hashedPassword,
      avatarImg    : avatarImg,
      coverImg     : coverImg,
      pio          : pio,
    })
    //store it at the database
    try {
      const savedUser = await user.save();//if there is no error save the user at db
      res.json(savedUser);//go to signin
    } catch (error) {
      res.status(500).send(error);
    }
  })

  router.get('/test',verifyToken, (req, res)=>{
    res.json('it works')
  })
  
  router.post('/signin',async(req, res)=> {
    try {
        const { email, password } = req.body;

        if(!email || !password)
        return res.status(401).json({msg :"password and email are required"})

        //3-find the user email at the db by email since it is uonic and it will return boolean so..
        const retrevdUser = await User.findOne({ email:email }) ;
        if( !retrevdUser ){
        return res.status(402).json({msg:"Sorry you don't have acount on the webpage please login... 3eeeb 3aleek"})     
        }
        //4-You need to compare the encripted pass with the pass entered from the user by using bcrypt.compare
        //it will return boolean so 
        const comparePass = await bcrypt.compare( password, retrevdUser.password )
        if( !comparePass )
        return res.status(403).json({msg:"Invalid Credentials, 3eeeeb 3aleeek U_U "})
        const token = JWT.sign({ retrevdUser : retrevdUser._id }, process.env.SECRET_TOKEN)
        res.header('theToken',token);// put the token in the header so we send it 
        res.status(200).json({ token, retrevdUser :{id:retrevdUser._id , name: retrevdUser.name} }) //send the token to the local storge
        } catch (error) {
        return res.status(500).json({err : error.message})
    }
})

module.exports = router;



  
