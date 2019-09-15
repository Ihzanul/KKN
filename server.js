require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const mahasiswaController = require('./controllers/mahasiswaControllers');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(8080, () => {
    console.log('Express server started at port : 8080');
});

app.use('/', mahasiswaController);