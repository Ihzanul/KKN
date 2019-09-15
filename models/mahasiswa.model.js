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

    // mailNumber: {
    //     type: Number
    // },
    // nama: {
    //     type: String,
    //     required: 'This field is required.'
    // },
    // stambuk: {
    //     type: String,
    //     required: 'This field is required'
    // },
    // sign: {
    //     type: String
    // }
});

monggose.model('Mahasiswa', mahasiswaSchema);