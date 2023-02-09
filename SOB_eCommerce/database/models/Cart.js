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

        Cart.belongsTo(models.User, {




            as: "user",



            foreingKey: "user_id"



        });
