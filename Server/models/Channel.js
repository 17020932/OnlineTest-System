const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.sequelize.define(
    'channel',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
        },
        idBankQuestion: {
            type: Sequelize.INTEGER,
        },
        idTest: {
            type: Sequelize.INTEGER,
        },
        amountLike: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        name: {
            type: Sequelize.STRING
        },
        idTitle: {
            type: Sequelize.INTEGER,
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
)