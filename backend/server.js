const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/userAuth')

const app = express();

app.use(express.json())
//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api',authRoutes);


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

  const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server is running on port ${port}`));