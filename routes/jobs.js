const express = require('express');
const router = express.Router();

const job = require('../models/jobs');

router.get('/', (req, res) => {
    job.findAll()
        .then((data) => {
            console.log(data);
            res.sendStatus(200);
        })
        .catch((err) => console.log(err));

});

module.exports = router;
