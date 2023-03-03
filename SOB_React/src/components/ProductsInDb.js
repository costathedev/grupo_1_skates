import React, { Component } from "react";
import Product from './Product';

class ProductsInDb extends Component {

  constructor() {
    super();

    this.state = {
      productList: []
    }
  }

  componentDidMount() {

    fetch('/api/products')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(products => {
        this.setState({ productList: products.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4" >
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Productos de la Base de Datos
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Acción</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Animación</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Aventura</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Ciencia Ficción</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Comedia</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Documental</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Drama</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Fantasia</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Infantiles</div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">Musical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body fondoCaja">
          <div className="row">

            {this.state.productList.map( (product, index) => {
              return <Product {...product} key={index} />
            })}

          </div>
        </div>


      </React.Fragment >
    )
  }


}

export default ProductsInDb;
