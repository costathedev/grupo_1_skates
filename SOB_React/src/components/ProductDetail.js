import React, {Component} from 'react';

// import imagenFondo from '../assets/images/mandalorian.jpg';
class ProductDetail extends Component  {
    constructor(props) {
        super(props);
        this.state = {image: ''};
    }

    componentDidUpdate(){

        if (this.state.image == '' ){

            console.log('SOURCE: ' + this.props.img_src);

            // Obtener la imagen de la API
            fetch('http://localhost:3050/api/product/' + this.props.img_src + '/image')
            .then(response => {
                // Crear un objeto URL a partir de la respuesta
                return response.blob();
            })
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                this.setState({image: imageUrl});
         
            })
            .catch(error => {
            console.error('Error al obtener la imagen:', error);
            }); 
        }

    }
    
    render() {
       return (
        <div className="card-body">
            <h3>{this.props.name}</h3>
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={this.state.image} style={{width: 40 +'rem'}}  alt={this.props.name}/>
            </div>
            <p className='sob-price'>${this.props.price}</p>
            <p>{this.props.description}</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
        </div>
    ) 
    }
    
}

export default ProductDetail;