const router = require('express').Router();
const { User } = require('../../models/User');

// creates a new account
router.post('/createaccount', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            res.redirect('/login');
        });

    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        // Clear any previous flash message
        req.flash('message', null);

        // Looks for a valid user by email
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        });

        // if the email doesn't match anything return an error and redirect back to login page
        if (!userData) {
            req.flash('message', 'Incorrect Email or Password!');
            res.redirect('/login');
            return
        }

        // compares the inputted password with the hashed password in the database
        const validPassword = userData.checkPassword(req.body.password);

        // if the password does not match, return an error and redirect back to the login page
        if (!validPassword) {
            req.flash('message', 'Incorrect Email or Password!');
            res.redirect('./login');
            return
        }

        req.session.save(() => {
            req.session.logged_in = true;
            res.redirect('/dashboard');
        })

    } catch (err) {
        res.status(500).json(err);
    }
});

// if user is logged in, log them out
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.redirect('/');
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;