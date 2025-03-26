const express = require('express'); 
const passport = require('passport'); 
const app = express('express'); 
const http = require('http'); 
const server = http.createServer(app); 
const logger = require('morgan'); 
const cors = require('cors'); 

const usersRoutes = require('./routes/userRoutes'); 

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());

require('./config/passport')(passport);

app.disable('x-powered-by');
app.set('port', port);

usersRoutes(app);

server.listen(port, '192.168.0.33' || 'localhost', function () {
    console.log('App Node.js ' + process.pid + ' ejecutando en ' + server.address().address + ':' + server.address().port);
});

app.get('/', (req, res) => {
    res.send('Estas en la ruta raiz del backend.');
});
app.get('/test', (req, res) => {
    res.send('Estas en la ruta TEST');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.stack);
});
