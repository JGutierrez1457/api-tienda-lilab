module.exports = (sequelize, Sequelize)=>{
    const Item = sequelize.define('item',{//Define el modelo con nombre item
        id : { type : Sequelize.INTEGER(11), allowNull : false, primaryKey : true, autoIncrement : true },
        name : { type : Sequelize.STRING, allowNull : false},
        description : { type : Sequelize.STRING},
        stock : { type : Sequelize.INTEGER.UNSIGNED, allowNull : false},
        category : { type : Sequelize.ENUM, values : ['frutas','verduras'], allowNull : false},
        price : { type : Sequelize.FLOAT.UNSIGNED, allowNull : false},
        image : { type : Sequelize.STRING}
    },
    {
        timestamps : false// No agrega campos de timestamps como updated y created
    });
    return Item;
}