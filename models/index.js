const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: {
        name: 'author',
        allowNull: false,
    }
});

Blog.hasMany(Comment, {
    onDelete: 'cascade',
});

Comment.belongsTo(Blog, {
    foreignKey: {
        name: 'blog_id',
        allowNull: false,
    }
});

Comment.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false,
    }
});

module.exports = { User, Blog, Comment };