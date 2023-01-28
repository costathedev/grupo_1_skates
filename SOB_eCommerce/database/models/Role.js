module.exports = (sequelize, DataTypes) => {

    const alias = "Role";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: DataTypes.STRING,
        created_at:  DataTypes.DATETIME,
        updated_at:  DataTypes.DATETIME,
    };
    const config =  {
        // nombre de tabla, si lleva timestamps, etc
        tableName: 'roles',
        timestamps: true,
    };

    const Role = sequelize.define(alias, cols, config );

    // Luego de "define", asociar con otras tablas: belongsTo, belongsToMany, hasMany
    Role.associate = function (models) {
        Role.belongsToMany(models.User, {
            as: 'user_roles',
            through: 'user_roles',
            foreignKey: 'role_id',
            otherKey: 'user_id',
            timestamps: false,
        })

    };


    return Role;
}