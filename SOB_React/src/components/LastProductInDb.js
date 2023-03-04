import React, {Component} from 'react';
import ProductDetail from './ProductDetail';
// import imagenFondo from '../assets/images/mandalorian.jpg';


class LastProductInDb extends Component{
    constructor(props) {
        super(props);
        this.state = {product: {}, image: null};
    }

    componentDidMount(){

        fetch('http://localhost:3050/api/product/last')
        .then(respuesta => {
          return respuesta.json()
        })
        .then(oneProduct => {

          console.log('PRODUCTO - IMG: ' + oneProduct.data.image + ' id: ' + oneProduct.data.id)
          this.setState({ product: oneProduct.data })


        })
        .catch(error => console.log(error))

    }

    render(){
        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 titulo-sidebar font-weight-bold text-gray-800">Último producto agregado</h5>
                    </div>
                    <ProductDetail  
                        name={this.state.product.name}
                        description={this.state.product.description}
                        price={this.state.product.price} 
                        img_src={this.state.product.image}/>
                </div>
            </div>
        )
    }
    
}

export default LastProductInDb;
