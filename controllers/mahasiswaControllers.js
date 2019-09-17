const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MahasiswaModel = mongoose.model('mahasiswa');
const MailsModel = mongoose.model('mails');

router.get('/', (req, res) => {
    // var Mahasiswa = new MahasiswaModel();
    // Mahasiswa.No = 1;
    // Mahasiswa.namaMahasiswa = "Ihznaul"
    // Mahasiswa.save();

    MailsModel.find((err, resbak) => {
        if (!err) {
                MahasiswaModel.find(null, { '_id': false, 'nim': true}, function(err, resdikti) {
                    if (err) {
                        console.log('Error during find mails ' + err);
                    } else {
                        for (var i = 0; i < resdikti.length; i++) {
                            MailsModel.findOne({'nim': resdikti[i].nim}, function(err, rescur) {
                                if (err) {
                                    console.log('error during matching ' + err)
                                } else if (rescur == null){
                                    console.log(`tidak sama ${i}`)
                                } else {
                                    console.log(`stambuk bak ${rescur.nim} sama dengan dikti ${resdikti.nim} pada index ${i}`)
                                }
                            })
                        }
                    }
                }).limit(11);
            res.render("kkn/list", {
                daftar: resbak
            });
            // console.log(docs[1].nim);
        } else {
            console.log('Error in retriving list : ' + err);
        }
    }).limit(20)
});

module.exports = router;