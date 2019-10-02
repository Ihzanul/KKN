const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// const DiktiModel = mongoose.model('mahasiswa');
// const BakModel = mongoose.model('bak_1');
const BakClean = mongoose.model('bak_cleans');
const Dikti = mongoose.model('dikti')
const DiktiUpdate = mongoose.model('dikti_updates')
const WisudaApp = mongoose.model('wisudaapps')
const WisudaDatabase = mongoose.model('wisudadatabases')
// const DiktiUpdate = mongoose.model('diktiupdates');

router.get('/', (req, res) => {
    // CODE UNTUK UPDATE STATUS
    DiktiUpdate.find((err, resdikti) => {
        if (!err) {
            // const query = {"NIM": ""}
            // res.render("kkn/list", {
            //     daftar: resdikti
            // });
            var a = 1
            resdikti.forEach((index, key) => {
                WisudaDatabase.findOne({ 'nim': index.nim }, (err, reswisuda) => {
                    if (reswisuda !== null) {
                        // console.log(resbak.tglLulus)
                        // console.log('stambuk: '+index.nim+' index ke-'+key+' pada dataDikti ditemukan pada dataBak, status dikti: '+index.status+' dan status BAK: '+resbak.status)
                        a += 1
                        DiktiUpdate.updateMany({ 'nim': reswisuda.nim}, {$set: {'status': 'L','tglLulus': reswisuda.tgl_yudisium, 'noIjazah': reswisuda.noIjazah, 'NSBlkIjazah': reswisuda.NSBlkIjazah}}, (err, reswis) => {
                            console.log('stambuk: '+index.nim+' index ke-'+key+' pada dataDikti ditemukan pada datawisudaApp, status dikti: '+index.status+' dan status Wisuda: L'+' log: '+reswis)
                        })
                        // console.log(resbak.IPK)
                    }
                    console.log(a)
                })
            })

        } else {
            console.log('Error in retriving list : ' + err);
        }
    }).limit(12122)


    // data wisuda yang sama dengan dikti sebanyak 103

    // WisudaDatabase.find((err, reswis) => {
    //     reswis.forEach(index => {
    //         console.log(index.nama)
    //     })
    // }).limit(20)


    // KODE UTK MANIPULASI ;
    // BakModel.find((err, resBAK) => {
    //     resBAK.forEach(index => {
    //         // console.log(index.namaMahasiswa)
    //         if ((index) && (index.ipk)) {
    //                 BakClean.updateMany({ 'nim': index.nim }, { $set: {'ipk': index.ipk.replace(';', '')} }, (resclean => {
    //                     console.log(resclean)
    //                 }))
    //                 // console.log('ipk: '+index.ipk+' telah diganti menjadi: '+index.ipk.replace(';', ''))
    //         }
    //     })
    // }).limit(93298)

    // WisudaApp.find((err, reswis) => {
    //     reswis.forEach(index => {
    //         console.log(index.nama)
    //     })
    // }).limit(20)

});

module.exports = router;