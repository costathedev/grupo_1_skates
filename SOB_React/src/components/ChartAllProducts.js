import React, {Component} from 'react';
import ChartRow from './ChartRow';

// let tableRowsData = [
//     {
//         Title: 'Billy Elliot ',
//         Length: '123',
//         Rating: '5',
//         Categories: ['Drama','Comedia'],
//         Awards: 2
//     },
//     {
//         Title: 'Alicia en el país de las maravillas',
//         Length: '142',
//         Rating: '4.8',
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 3
//     },
    
// ]


class ChartAllProducts extends Component{
    constructor (props) {
        super(props)
        this.state = {products: []};
    }

    componentDidMount() {
        fetch('http://localhost:3050/api/product')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(allProducts => {
        this.setState({ products: allProducts.data })
      })
      .catch(error => console.log(error))
    }

    render() {
        return (
            /* <!-- DataTales Example --> */

            <div className="card shadow mb-4">
                <div className="card-body">
                <h3 className='titulo-sidebar'>Todos los productos</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Modelo</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th>Título</th>
                                    <th>Duración</th>
                                    <th>Rating</th>
                                    <th>Género</th>
                                    <th>Premios</th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {
                                this.state.products.map( ( row , i) => {
                                    return <ChartRow { ...row} key={i}/>
                                })
                                }
    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
        )
    }
    
}

export default ChartAllProducts;