import React, {Component} from 'react';


// import imagenFondo from '../assets/images/mandalorian.jpg';
class ProductDetail extends Component  {
    constructor(props) {
        super(props);
        this.state = {name: props.name, description: props.description, price: props.price,img_src: props.img_src, image: null};
    }

    // componentDidMount(){

            // // Obtener la imagen de la API
            // fetch('http://localhost:3050/api/product/' + this.state.img_src + 'image')
            // .then(response => {
            //     // Crear un objeto URL a partir de la respuesta
            //     return response.blob();
            // })
            // .then(blob => {
            //     const imageUrl = URL.createObjectURL(blob);
            //     this.setState({image: imageUrl});

            //     // // Mostrar la imagen en el DOM
            //     // const img = document.createElement('img');
            //     // img.src = imageUrl;
            //     // document.body.appendChild(img);

            // })
            // .catch(error => {
            // console.error('Error al obtener la imagen:', error);
            // }); 

    // }
    
    render() {
       return (
        <div className="card-body">
            <h3>{this.state.name}</h3>
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src='/logo512.png' style={{width: 40 +'rem'}}  alt={this.state.name}/>
            </div>
            <strong>${this.state.price}</strong>
            <p>{this.state.description}</p>
            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
        </div>
    ) 
    }
    
}

export default ProductDetail;