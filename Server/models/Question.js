const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.sequelize.define(
    'question',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idBankQuestion: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        idTest: {
            type: Sequelize.INTEGER,
        },
        content: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.INTEGER
        },
        answer: {
            type: Sequelize.STRING
        },
        correct: {
            type: Sequelize.STRING
        },
        level: {
            type: Sequelize.INTEGER,
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
)