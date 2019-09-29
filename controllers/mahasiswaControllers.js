const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const DiktiModel = mongoose.model('mahasiswa');
const BakModel = mongoose.model('mails');
const DiktiUpdate = mongoose.model('diktiupdates');

router.get('/', (req, res) => {
    // var update = new DiktiUpdate();
    // update.No = 1;
    // update.namaMahasiswa = "Ihznaul"
    // update.save();

    DiktiModel.find((err, resdikti) => {
        if (!err) {
            const query = {"NIM": ""}
            res.render("kkn/list", {
                daftar: resdikti
            });
            resdikti.forEach((index, key) => {
                BakModel.findOne({ 'NIM': index.nim }, (err, resbak) => {
                    if (resbak !== null) {
                        // console.log('index ke-'+key+' pada dataDikti ditemukan pada dataBak, status dikti: '+index.statusMahasiswa+' dan status BAK: '+resbak.STATUS)
                        DiktiUpdate.update({ 'nim': resbak.NIM}, {$set: {'statusMahasiswa': resbak.STATUS, 'noIjazah': resbak.NO_IJAZAH, 'ipk': resbak.IPK}}, (err, resbar) => {
                            console.log(resbar)
                        })
                        // console.log(resbak.IPK)
                    }
                    // console.log(resbak)
                })
            })
        } else {
            console.log('Error in retriving list : ' + err);
        }
    }).limit(20)

    // DiktiModel.find().limit(20).forEach(function(index ) {
    //     console.log(index)
    // })
});

module.exports = router;