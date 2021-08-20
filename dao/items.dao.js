const {items} = require('../config/db');
const itemsDAO = {}
itemsDAO.getAllItems = async()=>{//Método para consultar todos los items
    const itemsRows = await items.findAll();
    return itemsRows;
}
itemsDAO.getItemById = async(id)=>{
    const itemRow = await items.findAll({ where : { id }});//Método para consultar un item por su id
    return itemRow;
}
itemsDAO.updateItemById = async(query, id)=>{
    const itemRow = await items.update(query,{ where : { id }});//Método para editar item por su id
    return itemRow
}
module.exports = itemsDAO;