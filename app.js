const express = require('express');
const path = require('path');
const router = require('./routes/router');
require('dotenv').config();

// Initializing Express App
const app = express();

// register view engine + Define Views folder
app.set('view engine', 'ejs');
app.set('views', './views');

// Static Files
app.use(express.static(path.join(__dirname,'public')));

// Main Router
app.use('/', router);

// Handle 404 Errors
app.use((req,res) => {
   res.status(404).render('404');
})

app.listen(process.env.PORT, () => {
   console.log(`App running on port ${process.env.PORT} (${process.env.ENV})`);
});