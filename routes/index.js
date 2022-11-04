const express = require('express');
const path = require('path');
const router = express.Router();

// Main Route


// EJS View route
router.get('/', (req,res) => {
   res.render('index');
})

router.get('/text', (req, res) => {
   res.send(`
      <h1>HTML TEXT displayed by res.send()</h1>
      `);
});

// HTML File route
router.get('/html', (req,res) => {
   res.sendFile(path.join(__dirname,'../views/example.html'));
});


// Router export
module.exports = router; 