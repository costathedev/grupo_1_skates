module.exports = function(sequelize, dataTypes){

    const alias= "Cart";

    const cols= {

        id: {

            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        user_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    };


    const config = {
        tableName: "carts",
        timestamps: false, 
        underscored: true
    };
  
  
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.belongsTo(models.User, {
            as: "users",
            foreingKey: "user_id"
        })
    }
        

    
    //   Cart.belongsToMany(models.Product, {




    //         through: models.CartProduct,




    //         as: "products",




    //         foreingKey: "cart_id",



    //         otherKey: "product_id"




    //     })
       
    return Cart;

    }



   
