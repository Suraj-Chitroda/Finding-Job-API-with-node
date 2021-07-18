const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');
const op = sequelize.Op;

const job = require('../models/jobs');

// List all jobs
router.get('/', (req, res) => job.findAll()
    .then((data) => {
        res.render('jobs', { data })
    })
    .catch((err) => {
        console.log(err);
    }));

router.get('/add', (req, res) => res.render('add'))

//add job
router.post('/add', (req, res) => {

    // get data to insert
    let { title, technology, description, budget, email } = req.body;
    let error = "";

    if (!title || !technology || !description || !email) {
        error = "Provide all values";
        res.render('add', {
            error,
            title,
            technology,
            description,
            budget,
            email,
        });
    }
    else {
        if (!budget) {
            budget = 'unknown'
        }
        else {
            budget = `$${budget}`;
        }

        technology = technology.toLowerCase();

        // add data to database
        job.create({
            title,
            technology,
            description,
            budget,
            email,
        })
            .then((job) => res.redirect('/jobs'))
            .catch(err => console.log(err));
    }
})

router.get('/search', (req, res) => {
    let { term } = req.query;
    term = term.toLowerCase();
    console.log(term);
    job.findAll({ where: { technology: { [op.like]: '%' + term + '%' } } })
        .then((job) => {
            console.log(job);
            res.render('jobs', { data: job });

        })
        .catch(err => console.log(err));
})

module.exports = router;
