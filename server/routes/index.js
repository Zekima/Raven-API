const express = require('express');
const chirprdb = require('../db');
const db = require('../db');

const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.get('/:name', async (req, res, next) => {
    try {
        let results = await db.one(req.params.name);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});




module.exports = router;