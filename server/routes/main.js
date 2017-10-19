const router = require('express').Router();
const apiRouter = require('./api');

// router.use('/', (res, req, next) => {
//     res.json("home page");
// });

router.use('/api', apiRouter);


module.exports = router;