const router = require('express').Router();


router.get('/', async (req, res) => {
    res.status(200).render('home', {
        title: 'Tech Blog',
        style: 'home.css',
    });
});

router.get('/dashboard', async (req, res) => {
    if (req.session.logged_in) {
        res.status(200).render('dashboard', {
            title: 'Dashboard',
            style: 'dashboard.css',
        });
    } else {
        res.status(200).redirect('login');
    }
    
});

router.get('/login', async (req, res) => {
    res.status(200).render('login', {
        title: 'Login',
        style: 'login.css',
    });
});

router.get('/signup', async (req, res) => {
    res.status(200).render('signup', {
        title: 'Sign Up',
        style: 'signup.css',
    });
});

router.get('/createpost', async (req, res) => {
    if (req.session.logged_in) {
        res.status(200).render('createpost', {
            title: 'Create Blog Post',
            style: 'createpost.css',
        })
    } else {
        res.status(200).redirect('login');
    }
    
})

module.exports = router;