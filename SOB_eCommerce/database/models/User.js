module.exports = (sequelize, DataTypes) => {

    const alias = "User";
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoincrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
            field: 'first_name',
        },
        lastName: {
            type: DataTypes.STRING(50),
            field: 'last_name',
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        birthDate:  {
            type: DataTypes.DATEONLY,
            field: 'birth_date',
        },
        address:  DataTypes.STRING(100),
        phone:  DataTypes.STRING(15),
        avatar:  DataTypes.STRING,
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    };
    const config =  {
        // nombre de tabla, si lleva timestamps, etc
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };

    const User = sequelize.define(alias, cols, config );

    // Luego de "define", asociar con otras tablas
    User.associate = function (models) {
        User.belongsToMany(models.Role, {
            as: 'roles',
            through: 'user_roles',
            foreignKey: 'user_id',
            otherKey: 'role_id',
            timestamps: false,
        })

        // pueden ir otras relaciones: belongsTo, belongsToMany, hasMany
    };


    return User;
}