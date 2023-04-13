const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const { v4: uuidv4 } = require('uuid');

class Blog extends Model{}

Blog.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    },
);


module.exports = Blog;