module.exports = (sequelize, DataTypes) => {
    const alias = "Category";

    //Columnas si la relación es con categorías.
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING(100),
            field: 'name'
        }, 
        parent_category_id: {
            type: DataTypes.INTEGER.UNSIGNED, 
        }
        //UNSIGNED - Es para que inicie a partir del 0, si sabes que no vas a usar negativos se recomienda usar esto para dejar todo el espacio de almacenamiento para numeros positivos.
        //ALLOWNULL - Sirve definirlo cuando realmente es un dato importante (contraseña, mail, dni, etc) 

    };

    //Columnas si la relación es con productos.
    /*const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING(100),
            field: 'name'
        }, 
    };*/

    const config = {
        // Nombre de tabla y si tiene timestamps
        tableName: "categories", 
        timeStamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    const Category = sequelize.define(alias, cols, config);

    /*Asociación de tabla categorias con categorias
    Category.associate = function(models){
        Category.belongsTo(models.Category, {
            as: 'categories', 
            foreignKey: 'parent_category_id', 
            timestamps: false
        }),
        
        Category.hasMany(models.Category, {
            as: 'categories',
            //foreignKey: 'category_id',
            foreignKey: 'id',
            timestamps: false
        })
    }*/

    //Asociación de tabla categorias con productos

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'categoryId' 
            //Debería crear en la tabla de productos en la DB el campo categoryId
        })
    }

    return Category;
}