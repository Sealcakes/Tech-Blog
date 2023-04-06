const router = require('express').Router();


router.get('/', async (req, res) => {
    res.status(200).render('home', {
        title: 'Tech Blog',
        style: 'home.css',
    });
});

router.get('/dashboard', async (req, res) => {
    res.status(200).render('dashboard', {
        title: 'Dashboard',
        style: 'dashboard.css',
    });
});

router.get('/login', async (req, res) => {
    res.status(200).render('login', {
        title: 'Login',
        style: 'login.css',
    });
});

module.exports = router;