// require dotenv variables
require('dotenv').config();

// all dependencies needed are required
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const routes = require('./controllers');

// create app and PORT variables
const app = express();
const PORT = process.env.PORT || 3001;

// create session configuration
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialize: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// use session configuration with express-session
app.use(session(sess));

// create a new express-handlebars view engine
const hbs = exphbs.create();

// register handlebars view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(routes);

// Sync sequelize db with application and run on PORT
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now Listening on Port 3001'));
});