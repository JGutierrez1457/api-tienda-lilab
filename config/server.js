const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV!=='production'){
    const dotenv = require('dotenv'); //Para utilizar variables de entorno en .env
    dotenv.config();

    const morgan = require('morgan'); //Para mostrar el log de requests http
    app.use(morgan('dev'));

    app.use(cors()); //Configura y habilita CORS para el cliente
}

app.use('/api/items', require('../routers/items.router')) //Agrega middleware enrutador de items a /api/items/

module.exports = app;