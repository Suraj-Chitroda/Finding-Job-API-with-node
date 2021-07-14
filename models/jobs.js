const sequelize = require('sequelize');
const db = require('../config/database');

const jobs = db.define('job', {
    title: {
        type: sequelize.STRING
    },
    technology: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.STRING
    },
    budget: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
});

