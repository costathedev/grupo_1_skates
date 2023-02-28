/*Creación y modificación de productos
- Nombre
* Obligatorio.
* Deberá tener al menos 5 caracteres.
-Descripción
*Deberá tener al menos 20 caracteres.
-Imagen
*Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).*/

window.addEventListener('load',function(){

    //Capturar el formulario 
    let formulario = document.querySelector('.altaProducto-form');
    //console.log(formulario.elements.email.value);
    
    formulario.addEventListener('submit',function(evento){
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    
 
     })
 
     function validaciones(evento){
         //Destructuring  
         let {name, description, image } = formulario.elements;
         let errores = [];
         //Validar Nombre
         if(name.value == ''){
             errores.push('El campo nombre no puede estar vacio...');
             name.classList.add('is-invalid');   
             //errores['first_name'] = 'El campo nombre no puede estar vacio...';
         }else{
             name.classList.add('is-invalid');
             name.classList.remove('is-invalid');
         }
 
         //Validar Descripción
         if(description.value == ''){
             errores.push('El campo descripción no puede estar vacio...');
             description.classList.add('is-invalid');   
             //errores['last_name'] = 'El campo nombre no puede estar vacio...';
         }else{
             description.classList.add('is-invalid');
             description.classList.remove('is-invalid');
         }
 
         //Aquí valido que el usuario coloque su avatar (Yo en mi caso lo considero como un dato obligatorio, ustedes si quieren lo validan como deseen)
         if(image.value == ''){
             errores.push('Debe seleccionar su avatar en formato JPG - PNG ó JPEG');
             image.classList.add('is-invalid');   
             //errores['last_name'] = 'El campo nombre no puede estar vacio...';
         }else{
             image.classList.add('is-invalid');
             image.classList.remove('is-invalid');
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
 
