const router = require('express').Router();
const itemsController = require('../controllers/items.controller');

router.get('/',itemsController.getAllItems);//Agrega middleware getAllItems a acceso / de /api/items

router.patch('/:idItem',itemsController.buyItem);//Agrega middleware buyItem a acceso / de /api/items


module.exports = router;