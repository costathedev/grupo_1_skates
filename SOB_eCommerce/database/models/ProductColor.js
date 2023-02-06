module.exports = (sequelize, dataTypes) => {


    let alias = 'ProductColor';
    
    
    let cols = {
    
    
        id: {
      
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            
        },
        
        
        id_product: {
        
        
            type: dataTypes.INTEGER,
            
        },
        
        id_color: {
        
        
            type: dataTypes.INTEGER
            
        }
        
        
    };
    
    
    let config = {
        tableName: 'productcolor',
        timestamps: false
        
        
    };
    
    
    /* REVISAR TODA ESTA PARTE PARA VER ERRORES */

    const ProductColor = sequelize.define(alias, cols, config)

    
    ProductColor.associate  = function (models){
    
    
        ProductColor.hasMany(models.Color,{
        
        
            as: 'Color',
            foreignKey:'id',
            sourceKey: 'id_color',
            timestamps: false
        })
        
        
    }   
    
    
    return ProductColor
    
    
}
