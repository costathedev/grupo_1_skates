window.onload = function () {

    // capturo form

    let form = document.querySelector(".altaProducto-form");
   
    form.addEventListener("submit", (evento) => {
  
        evento.preventDefault();

    let nombreProducto = document.getElementById("name");
   
    let descripcion = document.getElementById("description");
   
    let imagen = document.getElementById("myfile");
   
    let errores = [];


    //validacion nombre

    let regNameProd = /(\s*?[\w\.]\s*?){6,}$/;

    if (nombreProducto.value == "") {
  
        errores.push("Introduzca un nombre de producto.");
  
        nombreProducto.classList.add("is-invalid");
   
    } else if (!regNameProd.test(nombreProducto.value)) {
   
        errores.push(
   
            "El nombre del producto debe contar con un mínimo de 6 caracteres."
   
            );
    
      nombreProducto.classList.add("is-invalid");
   
    } else {
    
        nombreProducto.classList.remove("is-invalid");
   
        nombreProducto.classList.add("is-valid");
  
    }

       // validacion descripción


    if (descripcion.value == "") {
   
        errores.push("Introduzca una descripción valida.");
  
        descripcion.classList.add("is-invalid");
   
    } else {
   
        descripcion.classList.remove("is-invalid");
   
        descripcion.classList.add("is-valid");
    
    }
  
        // validación imagen

    var isValidImg = /[\/.](gif|jpg|jpeg|tiff|png)$/i.test(imagen.value);
  
    if (!isValidImg) {
  
        errores.push("Seleccione un archivo de imagen de tipo [GIF, PNG, JPEG, JPG]");
  
    }


    if (errores.length > 0) {
  
        evento.preventDefault();
    
        let ulErrores = document.querySelector(".errores");
     
        ulErrores.innerHTML = "";
      
        ulErrores.classList.add("alert-warning");
      
        for (let i = 0; i < errores.length; i++) {
      
            ulErrores.innerHTML += `<li>${errores[i]} </li>`;
       
        }
     
    } else {
    
        alert("Validaciones Correctas...");
   
        form.submit();
   
    }
   
});
 
};
  
