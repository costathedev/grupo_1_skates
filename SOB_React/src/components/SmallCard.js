import React  from 'react';
import PropTypes from 'prop-types';


function SmallCard (props) {
    // constructor(props){
    //     super(props);
    //     this.state = {total: 0};
    // }

    // componentDidMount() {

    //     fetch('/api/products')
    //     .then(respuesta => {
    //       return respuesta.json()
    //     })
    //     .then(products => {
    //       this.setState({ total: products.total });
    //         console.log('total de productos: ' + products.total); 
    //     })
    //     .catch(error => console.log(error))

    //     // fetch('http://localhost:3050/api/product')
    //     // .then( response => { return response.json() 
    //     // .then( data => {
    //     //     this.setState( {total: data.total})
    //     // }) })
    //     // .catch( err => { console.log(err) })
    // }

    // render() {
        return(
            <div className="col-md-4 mb-4">
                {/* <div className={`card border-left-green shadow h-100 py-2`}> */}
                <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                {/* <div className={`text-xs font-weight-bold text-green text-uppercase mb-1`}> TITULO</div> */}
                                {/* <div className={`text-xs font-weight-bold text-green text-uppercase mb-1`}> {props.title}</div> */}
                                {/* <div className="h5 mb-0 font-weight-bold text-gray-800">5</div> */}
                                <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
                            </div>
                            <div className="col-auto">
                                {/* <i className={`fas aa fa-2x text-gray-300`}></i> */}
                                <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    // }
    
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;