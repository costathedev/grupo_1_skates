module.exports = (sequelize, DataTypes) => {

    const alias = "Role";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: DataTypes.STRING,
        created_at:  DataTypes.DATE,
        updated_at:  DataTypes.DATE,
    };
    const config =  {
        // nombre de tabla, si lleva timestamps, etc
        tableName: 'roles',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        // deletedAt: false
    };

    const Role = sequelize.define(alias, cols, config );

    // Luego de "define", asociar con otras tablas: belongsTo, belongsToMany, hasMany
    Role.associate = function (models) {
        Role.belongsToMany(models.User, {
            as: 'users',
            through: 'user_roles',
            foreignKey: 'role_id',
            otherKey: 'user_id',
            timestamps: false,
        })

    };


    return Role;
}