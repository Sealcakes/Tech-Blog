const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

router.post('/createpost', async (req, res) => {
    const userData = req.session.user;

    try {
        const blogPost = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.description,
            author: userData.id,
        });

        res.status(200).json(blogPost);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/createcomment', async (req, res) => {
    
})