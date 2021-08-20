const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
require('dotenv').config()

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

(async function (){
    const db = {}
    const connection =  await mysql.createConnection({ host : DB_HOST, user : DB_USER, password : DB_PASSWORD });
    const [row, fields] = await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`);
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        dialect : 'mysql',
        host : DB_HOST
    });
    db.items = require('../models/items.model')(sequelize, Sequelize);
    await sequelize.sync();
    if(row.warningStatus === 0){
        const itemsData = require('../constants/items');
        for( let itemData of itemsData){
            await db.items.create(itemData);
        }
    }
    process.on('exit',(code)=>console.log('Población terminada'));
    process.exit();
})()