const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', { title: 'Strona główna', content: 'Witaj na stronie głównej!' });
});


router.get('/student', (req, res) => {
    res.render('student', { title: 'Strona studenta', content: 'Witaj na stronie studenta!' });
});


router.post('/student', (req, res) => {

    res.redirect('/student');
});

module.exports = router;