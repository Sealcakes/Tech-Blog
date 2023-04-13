const sequelize = require('../config/connections');
const User = require('../models/User');
const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false });

    await User.bulkCreate(userData.users, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();