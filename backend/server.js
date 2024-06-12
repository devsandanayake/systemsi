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


app.use('/route', routeRoutes);
app.use('/aisecurenet', aisecurenetRoutes);
app.use('/user', userRoutes);


 

// Connect to MongoDB
mongoose.connect('mongodb+srv://dev:dev1234@mernapp.zwstxds.mongodb.net/systemsi')
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
