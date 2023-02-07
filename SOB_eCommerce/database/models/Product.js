module.exports = (Sequelize, DataTypes) => {

    const alias = "Product";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        name:{
            type: DataTypes.VARCHAR
        },
        price: {
            type: DataTypes.DECIMAL
        },
        name:{
            type: DataTypes.INTEGER
        },
        id: {
            type: DataTypes.INTEGER
        },
        name:{
            type: DataTypes.INTEGER
        },
        //columnas
    };

    const config = {
        //nombre de tabla, si lleva stamptimes o no 
        tableName: 'Product',
        timestamps: false,
    };

    const Product = Sequelize.define(alias, cols, config);

    Product.belongto()

    return product;

};