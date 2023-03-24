const router = require('express').Router();


router.get('/', async (req, res) => {
    res.status(200).render('home');
});

router.get('/dashboard', async (req, res) => {
    res.status(200).render('dashboard');
});

router.get('/login', async (req, res) => {
    res.status(200). render('login');
});

module.exports = router;