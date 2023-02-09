module.exports = (sequelize, DataTypes) => {

    const alias = "Brand";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        
    };
    const config =  {
        // nombre de tabla, si lleva timestamps, etc
        tableName: 'brands',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };

    const Brand = sequelize.define(alias, cols, config );

    // Luego de "define", asociar con otras tablas
    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id',
        })

        // pueden ir otras relaciones: belongsTo, belongsToMany, hasMany
    };


    return Brand;
}