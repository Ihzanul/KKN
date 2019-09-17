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

monggose.model('mahasiswa', mahasiswaSchema);
monggose.model('mails', mailsSchema);