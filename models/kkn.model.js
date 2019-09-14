const monggose = require('mongoose');

var kknSchema = new monggose.Schema({
    NIM: {
        type: String
    },
    Nama: {
        type: String
    },
    Prodi: {
        type: String
    },
    Jenjang: {
        type: String
    },
    Status_Mahasiswa: {
        type: String
    }
});

monggose.model('mahasiswa', kknSchema);