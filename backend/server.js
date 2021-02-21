const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/userAuth')
const postRoutes = require('./routes/post')
const app = express();

app.use(express.json())



const dbURI =process.env.DATABASE ;
//connect to database
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true ,
    
})
.then(()=> console.log('DB connected'))
.catch(err=> console.log(err));

require('./DBmodels/Post')
require('./DBmodels/User')

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "50mb",  extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

//routes
app.use('/api',authRoutes);
app.use('/posts',postRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));

