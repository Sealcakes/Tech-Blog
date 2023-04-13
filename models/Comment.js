const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const { v4: uuidv4 } = require('uuid');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
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
        modelName: 'comment',
    },
);

module.exports = Comment;