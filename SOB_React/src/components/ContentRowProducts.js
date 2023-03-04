import React, {Component} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

// let moviesInDB = {
//     title: 'Productos en la Base de Datos',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }

// /* <!-- Total awards --> */

// let totalAwards = {
//     title:' Total awards', 
//     color:'success', 
//     cuantity: '79',
//     icon:'fa-award'
// }

// /* <!-- Actors quantity --> */

// let actorsQuantity = {
//     title:'Actors quantity' ,
//     color:'warning',
//     cuantity:'49',
//     icon:'fa-user-check'
// }

// let cartProps = [moviesInDB, totalAwards, actorsQuantity];

class ContentRowProducts extends Component{
    
    constructor() {
        super();
        this.state ={totales: []};
    }

    componentDidMount() {
        console.log('se montó!');

        let totalizadores=[];
      
        fetch('http://localhost:3050/api/product')
          .then(response => {
            console.log('primer then.');
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            console.log('segundo then!');
                let prodsInDB = {
                title: 'Productos registrados',
                color: 'primary', 
                cuantity: data.total,
                icon: 'fa-clipboard-list'
            }

            totalizadores.push(prodsInDB);


           fetch('http://localhost:3050/api/user')
          .then(response => {
            console.log('primer then user');
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            console.log('segundo then user!');
                let usersInDB = {
                title: 'Usuarios registrados',
                color: 'success', 
                cuantity: data.total,
                icon: 'fa-user-check'
            }

            totalizadores.push(usersInDB);

            fetch('http://localhost:3050/api/user')
          .then(response => {
            console.log('primer then user');
            return response.json(); // se agrega un return para retornar la promesa
          })
          .then(data => {
            console.log('segundo then user!');
                let categoriesInDB = {
                title: 'Categorías registradas',
                color: 'warning', 
                cuantity: data.total,
                icon: 'fa-award'
            }

            totalizadores.push(categoriesInDB);

            this.setState( {totales: totalizadores})


          })
          .catch(err => {
            console.log('Error en api categories: ' + err);
          });



          })
          .catch(err => {
            console.log('Error en api users: ' + err);
          });



          })
          .catch(err => {
            console.log('Error en api products: ' + err);
          });
      }

    render() {
        return (
    
            <div className="row">

                {this.state.totales.map( (obj, i) => {
    
                    return <SmallCard {...obj} key={i}/>
                
                })}
    
            </div>
        )
    }

    
}

export default ContentRowProducts;