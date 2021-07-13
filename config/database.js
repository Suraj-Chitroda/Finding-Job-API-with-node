const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:Me@Postgres@localhost:5432/coding_jobs_DB');

module.exports = db;
