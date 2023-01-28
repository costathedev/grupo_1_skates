module.exports = (sequelize, DataTypes) => {

    const alias = "User";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: DataTypes.STRING,
        last_name:  DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birt_date:  DataTypes.STRING,
        address:  DataTypes.STRING,
        phone:  DataTypes.STRING,
        avatar:  DataTypes.STRING,
        created_at:  DataTypes.DATETIME,
        updated_at:  DataTypes.DATETIME,
    };
    const config =  {
        // nombre de tabla, si lleva timestamps, etc
        tableName: 'users',
        timestamps: true,
    };

    const User = sequelize.define(alias, cols, config );

    // Luego de "define", asociar con otras tablas
    User.associate = function (models) {
        User.belongsToMany(models.Role, {
            as: 'user_roles',
            through: 'user_roles',
            foreignKey: 'user_id',
            otherKey: 'role_id',
            timestamps: false,
        })

        // pueden ir otras relaciones: belongsTo, belongsToMany, hasMany
    };


    return User;
}