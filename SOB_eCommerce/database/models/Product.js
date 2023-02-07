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
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
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

    //Product.belongto()

    //Agrego la asociación de Productos con Categorías
    Product.associate = function(models){
        Product.belongsTo(models.Product, {
            as : 'categories',
            foreignKey : 'category_id',
            //Debería crear en la tabla de categorias en la DB el campo product_id
        })
    }

    return Product;

};