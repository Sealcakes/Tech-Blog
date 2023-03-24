const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

// assign routes, /api are backend routes and / are home routes for webpage rendering
// router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;