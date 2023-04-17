const router = require('express').Router();
const { User, Blog, Comment } = require('../models')


router.get('/', async (req, res) => {
    
    const userData = req.session.user;
    const allBlogPosts = await Blog.findAll({
        order: [['createdAt', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    });
    
    res.status(200).render('home', {
        title: 'Tech Blog',
        style: 'home.css',
        user: userData,
        blogs: allBlogPosts,
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
        messages: req.flash('message'),
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