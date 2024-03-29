// const { localsName } = require("ejs");

// window.onload = function () {
    
    
window.addEventListener('load',function(){
 
    // capturo el form 

    let form = document.querySelector(".reg-form");
  
    form.addEventListener("submit", (evento) => {

        if(!validaciones(evento)){
            evento.preventDefault();
        }else{
            formulario.submit();
        } 

      // funciones validar
  
      function validaciones(evento) {
        
        let name = document.getElementById("firstName");
        
        let lastName = document.getElementById("lastName");
       
        let email = document.getElementById("email");
       
        let password = document.getElementById("password");
       
        let confirmPassword = document.getElementById("password_repeated");
       
        let imagen = document.getElementById("avatar");
       
        let errores = [];
  
        // nombre
  
        let regName = /^[a-z ,.'-]+$/i;
  
        if (name.value == "") {
      
            errores.push("Introduzca su nombre");
        
            name.classList.add("is-invalid");
      
        } else if (!regName.test(name.value)) {
      
            errores.push("Introduzca un nombre valido..");
       
            name.classList.add("is-invalid");
      
        } else {
       
            name.classList.add("is-valid");
       
            name.classList.remove("is-invalid");
     
        }
  
        // apellido
  
        let regLastName = /^[a-z ,.'-]+$/i;
  
        if (lastName.value == "") {
       
            errores.push("Introduzca su apellido");
      
            lastName.classList.add("is-invalid");
       
        } else if (!regName.test(lastName.value)) {
       
            errores.push("Introduzca un apellido valido..");
       
            lastName.classList.add("is-invalid");
       
        } else {
       
            lastName.classList.add("is-valid");
       
            lastName.classList.remove("is-invalid");
      
        }
  
        // mail
  
        let regEmail =
        
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
        if (email.value == "") {
     
            errores.push("Introduzca su email");
       
            email.classList.add("is-invalid");
       
        } else if (!regEmail.test(email.value)) {
       
            errores.push("El email no es valido..");
        
            email.classList.add("is-invalid");
      
        } else {
        
            email.classList.add("is-valid");
       
            email.classList.remove("is-invalid");
        }
  
        // contraseña
  
        let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
        if (password.value == "") {
      
            errores.push("Introduzca su contraseña");
        
            password.classList.add("is-invalid");
      
        } else if (!regPassword.test(password.value)) {
        
            errores.push(
       
                "Su contraseña debe tener seis caracteres, una letra mínuscula , una Mayúscula y un número"
       
                );
        
                password.classList.add("is-invalid");
      
            } else {
        
                password.classList.remove("is-invalid");
      
                password.classList.add("is-valid");
        }
  
        // confirmar contraseña
  
        if (confirmPassword.value == "") {
        
            errores.push("Confirme su Contraseña");
       
            confirmPassword.classList.add("is-invalid");
       
        } else if (confirmPassword.value !== password.value) {
       
            errores.push("Las contraseñas no coinciden");
        
            confirmPassword.classList.add("is-invalid");
     
        } else {
       
            confirmPassword.classList.remove("is-invalid");       
            confirmPassword.classList.add("is-valid");
        }
  
        // foto de perfil
  
        var isValidImg = /[\/.](gif|jpg|jpeg|tiff|png)$/i.test(imagen.value);
       
        if (!isValidImg && !locals.readOnly) {
       
            errores.push(
        
                "Debe seleccionar un archivo de tipo (JPG, JPEG, PNG, GIF) Únicamente."
          );
        }
  
        // errores enviados al user
  
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

        } else {
            return true;
    
            // form.submit();
        }
    
    }
    });
  })
