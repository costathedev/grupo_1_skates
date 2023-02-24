window.addEventListener('load',function(){
    
    //Capturar el formulario 
    let formulario = document.querySelector('.login-form');
    
    //console.log(formulario.elements.email.value);
    formulario.addEventListener('submit',function(evento){
        
        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        }    

        function validaciones(evento){
        
          //Destructuring  
          let {email, password } = formulario.elements;
          let errores = [];
          //console.log(formulario.elements.email.value);

        //Validar el email - Expresiones Regulares https://www.w3schools.com/jsref/jsref_obj_regexp.asp       https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        let reEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
        //Validar el email - que no esté vacío el campo
        if(email.value.length > 0) {

            if(!reEmail.test(email.value)){
                errores.push('El email es inválido');  
                email.classList.add('is-invalid'); 
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            }else{
                //El email pasa la prueba de cant. de caracteres y validacion de caracteres
                email.classList.add('is-invalid');
                email.classList.remove('is-invalid');
            }

        } else {
                //No se ingresó ningún mail
                errores.push('Debe ingresar su email');       
                email.classList.add('is-invalid');         
        }
        
        //Aquí valido el password haciendo uso de Expresiones Regulares
        //Esta expresión regular valida como Mínimo seis caracteres, al menos una letra y un número:
        //let rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        if(password.value.length > 0) {

            //if(!rePassword.test(password.value)){
            //    errores.push('La contraseña como mínimo debe tener seis caracteres, al menos una letra y un número');  
            //    password.classList.add('is-invalid'); 
                //errores['last_name'] = 'El campo nombre no puede estar vacio...';
            //}else{
                //La password fue ingresada y es válida
                password.classList.add('is-invalid');
                password.classList.remove('is-invalid');
        } else {
            //No se tipeó la password
            errores.push('Debe ingresar una contraseña');
            password.classList.add('is-invalid');
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