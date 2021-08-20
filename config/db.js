const { Sequelize } = require('sequelize');
    
    const db = {}
    const DB_NAME = process.env.DB_NAME;
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    
    try {
        const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {//Configura instancia de conexión a la BBDD
            dialect : 'mysql',
            host : DB_HOST
        });
        db.sequelize = sequelize;//Agrega instancia de sequelize con los datos de la BBDD
        
    } catch (error) {
        console.log(error)
    }

module.exports = db;

