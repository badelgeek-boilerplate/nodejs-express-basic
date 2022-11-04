const express = require('express');
const router = express.Router();

// EJS View route
router.use((req, res) => {
   res.render('404');
});

// Router export
module.exports = router; 

