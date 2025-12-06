const express = require('express');
const router = express.Router();

let comments = [];

router.get('/', (req, res) => {
    res.render('comments', { comments });
});

router.post('/', (req, res) => {
    comments.push(req.body.comment);
    res.redirect('/comments');
});

module.exports = router;
