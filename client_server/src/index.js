/**
 * Simple website hosting setup
 */

const express = require('express');
const cors = require('cors');

// Not using helmet because it breaks things
// const helmet = require('helmet');

const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// To serve static files
app.use(express.static('./public/'));

// Make sure that the app runs on port 6942 otherwise frontend will not be able to access it
let PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`App is running in ${process.env.NODE_ENV} mode!`);
    console.log(`Listening on port: ${PORT}`);
});