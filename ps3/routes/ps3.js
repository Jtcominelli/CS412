/*
Joshua Cominelli
CS412
PS3 Routes
*/

var express = require('express');
var router = express.Router();

// Part A
router.get('/part-a', function(req, res, next) {
    res.send('respond with a resource');
});

// Part B
router.get('/part-b', function (req, res, next) {
    res.render('part-b-pug.pug', {title: 'this is a title'});
});

// Part C
router.post('/part-c', function (req, res, next) {
    const tit = req.body;
    res.render('part-b-pug.pug', tit);
})

// Part D
router.post('/part-d/:tagID', function (req, res, next) {
    res.render('part-b-pug.pug', {title: req.params.tagID});
})

module.exports = router;