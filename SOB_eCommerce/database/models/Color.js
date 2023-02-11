module.exports = (Sequelize, DataTypes) => {

    const alias = "Color";
    const cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoincrement: true,
        },
        name:{
            type: DataTypes.STRING(50),
        },
    };

        const config = {
            //nombre de tabla, si lleva stamptimes o no 
            tableName: 'colors',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
    
        };
        

        const Color = Sequelize.define(alias, cols, config);


        Color.associate = function(models){
            Color.belongsToMany(models.Product, {
                as : 'products',
                through: 'ProductColor',
                foreignKey: 'color_id',
                otherKey: 'product_id',
                timestamps: false,
                
            })
        };
    



        return Color

       
      
        //columnas
    };
