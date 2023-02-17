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
    
        brand_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'brand_id'

        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'category_id'

        },
        section: DataTypes.STRING,
        description: DataTypes.STRING,
        Image: {
            type: DataTypes.STRING,
        },
      
        //columnas
    };

    const config = {
        //nombre de tabla, si lleva stamptimes o no 
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',

    };

    const Product = Sequelize.define(alias, cols, config);

    //Product.belongto()

    //Agrego la asociación de Productos con Categorías
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as : 'categories',
            foreignKey : 'category_id',
            //Debería crear en la tabla de categorias en la DB el campo product_id
        })
        // Product.belongsToMany(models.Color, {
        //     as : 'colors',
        //     through: 'ProductColor',
        //     foreignKey: 'product_id',
        //     otherKey: 'color_id',
        //     timestamps: false,
        //     //Debería crear en la tabla de categorias en la DB el campo product_id
        // })
    };


    return Product;

};