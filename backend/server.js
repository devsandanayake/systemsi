const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const port = 3001;
 

// Middleware to parse JSON and URL-encoded form bodies
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const routeRoutes = require('./Routes/route');
const aisecurenetRoutes = require('./Routes/AISecurenet');
const userRoutes = require('./Routes/User');
const AINetGMonRoutes = require('./Routes/AINetG');
const TrAINetGMonRoutes = require('./Routes/TrAINetG');


app.use('/route', routeRoutes);
app.use('/aisecurenet', aisecurenetRoutes);
app.use('/user', userRoutes);
app.use('/AINetG', AINetGMonRoutes);
app.use('/TrAINetG', TrAINetGMonRoutes);


 

// Connect to MongoDB
mongoose.connect('mongodb://enterpriseUser:enterpriseUser%40SLT24@124.43.179.18:27017/enterpriseDB')
.then(() => {
    console.log('Connected to the database!');
})
.catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});


 
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
  });
