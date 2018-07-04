const express = require('express');
const router  = express.Router();
const index = require('./routes/index');
const authRoutes = require('./routes/auth');

const app = express();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
