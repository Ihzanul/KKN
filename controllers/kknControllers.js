const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const KKN = mongoose.model('mahasiswa');

var kkn = new KKN();

router.get('/', (req, res) => {
    KKN.find((err, docs) => {
        if (!err) {
            res.render("kkn/list", {
                list: docs
            });
        } else {
            console.log('Error in retriving list : ' + err);
        }
    });
});

module.exports = router;