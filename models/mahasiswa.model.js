const monggose = require('mongoose');

var mahasiswaSchema = new monggose.Schema({
    no: {
        type: Number
    },
    nim: {
        type: String
    },
    namaMahasiswa: {
        type: String
    },
    prodi: {
        type: String
    },
    jenjang: {
        type: String
    },
    statusMahasiswa: {
        type: String
    }
});

var mailsSchema = new monggose.Schema({
    NIM: {
        type: String
    },
    NAMA: {
        type: String
    },
    STATUS: {
        type: String
    },
    IPK: {
        type: Number
    }
});

var diktiUpdate = new monggose.Schema({
    no: {
        type: Number
    },
    nim: {
        type: String
    },
    namaMahasiswa: {
        type: String
    },
    prodi: {
        type: String
    },
    jenjang: {
        type: String
    },
    statusMahasiswa: {
        type: String
    },
    noIjazah: {
        type: String
    },
    ipk: {
        type: String
    }
});

monggose.model('mahasiswa', mahasiswaSchema);
monggose.model('mails', mailsSchema);
monggose.model('diktiupdates', diktiUpdate);