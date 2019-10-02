const monggose = require('mongoose');

// var mahasiswaSchema = new monggose.Schema({
//     no: {
//         type: Number
//     },
//     nim: {
//         type: String
//     },
//     namaMahasiswa: {
//         type: String
//     },
//     prodi: {
//         type: String
//     },
//     jenjang: {
//         type: String
//     },
//     statusMahasiswa: {
//         type: String
//     }
// });

// var bakSchema = new monggose.Schema({
//     nim: {
//         type: String
//     },
//     namaMahasiswa: {
//         type: String
//     },
//     statusMahasiswa: {
//         type: String
//     },
//     tglLulus: {
//         type: String
//     },
//     noIjazah: {
//         type: String
//     },
//     ipk: {
//         type: String
//     }
// });

var bakClean = new monggose.Schema({
    NO: {
        type: String
    },
    nim: {
        type: String
    },
    nama: {
        type: String
    },
    status: {
        type: String
    },
    tglLulus: {
        type: String
    },
    noIjazah: {
        type: String
    },
    ipk: {
        type: String
    }
})

var dikti = new monggose.Schema({
    no: {
        type: Number
    },
    nim: {
        type: String
    },
    nama: {
        type: String
    },
    prodi: {
        type: String
    },
    jenjang: {
        type: String
    },
    status: {
        type: String
    },
    noIjazah: {
        type: String
    },
    ipk: {
        type: String
    }
});

var diktiUpdate = new monggose.Schema({
    no: {
        type: Number
    },
    nim: {
        type: String
    },
    nama: {
        type: String
    },
    prodi: {
        type: String
    },
    jenjang: {
        type: String
    },
    status: {
        type: String
    },
    noIjazah: {
        type: String
    },
    ipk: {
        type: String
    },
    tglLulus: {
        type: String
    },
    NSBlkIjazah: {
        type: String
    }
});

var aplikasiwisuda = new monggose.Schema({
    nim: {
        type: String
    },
    nama: {
        type: String
    },
    tglIjazah: {
        type: String
    },
    noIjazah: {
        type: String
    },
    status: {
        type: String
    }
})

var wisudadatabase = new monggose.Schema({
    nim: {
        type: String
    },
    nama: {
        type: String
    },
    tgl_yudisium: {
        type: String
    },
    noIjazah: {
        type: String
    },
    NSBlkIjazah: {
        type: String
    }
})

// monggose.model('mahasiswa', mahasiswaSchema);
// monggose.model('bak_1', bakSchema);
monggose.model('bak_cleans', bakClean);
monggose.model('dikti', dikti);
monggose.model('dikti_updates', diktiUpdate);
monggose.model('wisudaapps', aplikasiwisuda);
monggose.model('wisudadatabases', wisudadatabase);
// monggose.model('diktiupdates', diktiUpdate);