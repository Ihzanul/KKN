const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DataBAK', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succesed.')
    }
    else {
        console.log('Error in DB connection : ' + err)
    }
});

require('./mahasiswa.model')