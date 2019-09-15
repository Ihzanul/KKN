const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Mahasiswa = mongoose.model('Mahasiswa');

var Mahasiswas = new Mahasiswa();

router.get('/', (req, res) => {
    Mahasiswa.find((err, docs) => {
        if (!err) {
            res.render("kkn/list", {
                daftar: docs
            });
            console.log(docs.length)
        } else {
            console.log('Error in retriving list : ' + err);
        }
    });
});

module.exports = router;