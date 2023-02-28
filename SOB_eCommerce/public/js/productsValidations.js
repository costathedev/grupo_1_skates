window.addEventListener('load',function(){
    
    //Capturar el formulario 
    let formulario = document.querySelector('.altaProducto-form');
    console.log(formulario);
        
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
        
          //Destructuring  
        let nombreProducto = document.getElementById("name");   
        let descripcion = document.getElementById("description");   
        let imagen = document.getElementById("myfile");
        let precio = document.getElementById("price");
       

        let errores = [];

         //Validar el nombre del producto - que no esté vacío el campo
        let regNameProd = /(\s*?[\w\.]\s*?){5,}$/;
       
        if(nombreProducto.value.length > 0) {

            if(!regNameProd.test(nombreProducto.value)){
                errores.push('El nombre es inválido');  
                nombreProducto.classList.add('is-invalid'); 
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                //El email pasa la prueba de cant. de caracteres y validacion de caracteres
                nombreProducto.classList.add('is-invalid');
                nombreProducto.classList.remove('is-invalid');
            }

        } else {
                //No se ingresó ningún mail
                errores.push('Debe ingresar un nombre');       
                nombreProducto.classList.add('is-invalid');         
        }
        
        //Aquí valido el password haciendo uso de Expresiones Regulares
        //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
        //let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        if(descripcion.value.length > 20) {

            //if(!rePassword.test(password.value)){
            //    errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');  
            //    password.classList.add('is-invalid'); 
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            //}else{
                //La password fue ingresada y es válida
                descripcion.classList.add('is-invalid');
                descripcion.classList.remove('is-invalid');
        } else {
            //No se tipeó la password
            errores.push('Debe ingresar una descripcion válida mayor a 20 caracteres');
            descripcion.classList.add('is-invalid');
        }

         //valido precio

          let regPrice = /^[0-9]+(\.[0-9]+)?$/;

              if (precio.value == "") {
              
                errores.push("El campo precio no puede estar vacio");
                
                precio.classList.add("is-invalid");
                
            } else if (!regPrice.test(precio.value)) {
               
                errores.push("El campo precio solo admite numeros");
                
                precio.classList.add("is-invalid");
                    
            } else {
                     
                precio.classList.remove("is-invalid");
                   
                precio.classList.add("is-valid");
    }

               
             

        // Validacion imagen de producto
  
        var isValidImg = /[\/.](gif|jpg|jpeg|tiff|png)$/i.test(imagen.value);
       
        if (!isValidImg) {       
            errores.push("Debe seleccionar un archivo de tipo (JPG, JPEG, PNG, GIF) Únicamente.");
        }

          //Aquí enviamos los errores al usuario
          let ulErrores = document.getElementById('errores');
          ulErrores.classList.add('alert-danger')
          if(errores.length > 0){
              
              evento.preventDefault();
              ulErrores.innerHTML = "";
              for (let i = 0 ; i < errores.length; i++){
                ulErrores.innerHTML += `<li> ${errores[i]} </li> `
              }
              errores = [];
              
          }else{
                return true;
          } 
        }
    })

})
