module.exports = (Sequelize, DataTypes) => {

    const alias = "Product";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        name:{
            type: DataTypes.STRING(100),
        },
        price: {
            type: DataTypes.DECIMAL(10,0),
        },
        model:{
            type: DataTypes.STRING(50),
        },
        color_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            allowNull: false,
            field: 'color_id'

        },
        brand_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            allowNull: false,
            field: 'brand_id'

        },
        category_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            allowNull: false,
            field: 'category_id'

        },
        Image: {
            type: DataTypes.STRING,
        },
      
        //columnas
    };

    const config = {
        //nombre de tabla, si lleva stamptimes o no 
        tableName: 'Product',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',

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