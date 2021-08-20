const itemsDAO = require('../dao/items.dao');

const itemsController = {}

itemsController.getAllItems = async (req, res)=>{
    try {
        const items = await itemsDAO.getAllItems();//Se obtiene todos los items de la bd
        return res.status(200).json(items);//Se responde en formato JSON
    } catch (error) {
        return res.status(500).send(error)
    }
}
itemsController.buyItem = async(req, res)=>{//Middleware para comprar #quantity por item
    const { idItem } = req.params;//Se recupera el id del item por parametro
    const { quantity } = req.body;//Se recupera la cantidad que se desea comprar
    try {
        const result = await itemsDAO.getItemById(idItem);//Consulta existencia de item por su id
        if(!result.length)return res.status(404).send('No existe el item')//Retorna error si no se encuentra un item con el id proporcionado
        const item = result[0].dataValues;//Se extrar el objeto del item
        if(quantity > item.stock)return res.status(400).send('Cantidad excede el stock');//Si la cantidad solicitada a comprar excede el stock retorna error
        await itemsDAO.updateItemById({ stock : item.stock - quantity },idItem)//Modifica el stock del item restandole la cantidad solicitada
        const itemUpdated = await itemsDAO.getItemById(idItem);//Consulta objecto modificado del item
        return res.status(200).json(itemUpdated[0].dataValues)//Se responde el objeto del item
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}
module.exports = itemsController;