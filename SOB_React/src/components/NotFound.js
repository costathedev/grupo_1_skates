import React from 'react';
import imagenFondo from '../assets/images/broken_skate.jpg';

function NotFound(){
    return(
        // <div className="text-center">
        //     <h1 class='sob-not-found-text'>Lo sentimos! no encontramos tu página</h1>
        //     <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        // </div>
        <div class="sob-not-found-container">
            <h1 class="sob-not-found-text">Lo sentimos! no encontramos tu página</h1>
            <img class="sob-not-found-img" src={imagenFondo} alt="No se encontro." />
        </div>
        
    )
}


export default NotFound;