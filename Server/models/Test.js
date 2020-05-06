const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.sequelize.define(
    'test',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING,
        },
        code: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
        },
        datePublic: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        time: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.STRING
        },
        isPublic: {
            type: Sequelize.BOOLEAN,
        },
        idChannel : {
            type: Sequelize.INTEGER
        },
        idTitle: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
)