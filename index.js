const app = require('./config/server');

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{ //Escuchar puerto asignado
    console.log('Server listening to',PORT);
})