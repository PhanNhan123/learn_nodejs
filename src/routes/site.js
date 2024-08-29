const express = require('express');
const router = express.Router();
const siteController  = require('../app/controllers/SiteController');

// tuyen duong dua / xuong duoi cung

router.use('/search',siteController.search);

router.use('/',siteController.index);


module.exports = router;