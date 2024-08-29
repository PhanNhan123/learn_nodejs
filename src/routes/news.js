const express = require('express');
const router = express.Router();
const newsController  = require('../app/controllers/NewsController');

// tuyen duong dua / xuong duoi cung

router.use('/:slug',newsController.show);

router.use('/',newsController.index);


module.exports = router;