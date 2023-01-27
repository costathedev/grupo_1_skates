module.exports = (sequelize, DataTypes) => {
    const alias = "Category";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED, 
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        }, 
        description: {
            type: DataTypes.STRING.UNSIGNED
        }, 
        parent_category_id: {
            type: DataTypes.INTEGER.UNSIGNED, 
        }
        //UNSIGNED - Es para que inicie a partir del 0, si sabes que no vas a usar negativos se recomienda usar esto para dejar todo el espacio de almacenamiento para numeros positivos.
        //ALLOWNULL - Sirve definirlo cuando realmente es un dato importante (contraseña, mail, dni, etc) 

    };
    const config = {
        // Nombre de tabla y si tiene timestamps
        tableName: "categories", 
        timeStamps: false
    }
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.belongsTo(models.Category, {
            as: 'categories', 
            foreignKey: 'parent_category_id', 
            timestamps: false
        }),
        
        Category.hasMany(models.Category, {
            as: 'categories',
            foreignKey: 'category_id',
            timestamps: false
        })
    }

    return Category;
}