const app = require('./config/server');
require('./config/db').sequelize.sync();//Inicia instancia y conexión a mysql

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{ //Escuchar puerto asignado
    console.log('Server listening to',PORT);
})