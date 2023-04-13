const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const { v4: uuidv4 } = require('uuid');

router.post('/createpost', async (req, res) => {
    const userData = req.session.user;

    try {
        const blogPost = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            content: req.body.description,
            id: uuidv4(),
            author: userData.id,
        });

        res.status(200).json(blogPost);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/createcomment', async (req, res) => {
    const userData = req.session.user;

    try {
        const newComment = await Comment.create({
            id: uuidv4(),
            content: req.body.content,
            blog_id: req.body.blog_id,
            user_id: userData.id,
        });

        res.status(200).json(newComment);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;