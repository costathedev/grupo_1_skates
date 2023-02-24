window.onload = function () {


	//  capturo el formulario



	let form = document.querySelector(".reg-form");
	let nameError = document.getElementById("firstName");
	let surnameError = document.getElementById("lastName");
	let emailError = document.getElementById("email");
	let passwordError = document.getElementById("password");
	let imageError = document.getElementById("avatar");


	// submit datos

	form.addEventListener("submit", (evento) => {
		
		let name = document.getElementById("firstName");		
		let surname = document.getElementById("lastName");		
		let email = document.getElementById("email");	
		let password = document.getElementById("password");		
		let confirmPassword = document.getElementById("password_repeated");

		let errores = [];

		//valido el nombre
	
		nameError.innerText = name.value
		
		? name.value.length <= 2
		
		? "El nombre introducido debe tener un mínimo de dos caracteres"
		
		: ""
		
		: "Introduzca su nombre";

		//valido el apellido
	
		surnameError.innerText = !surname.value
		
		? "Introduzca su apellido"
	
		: surname.value.length <= 2
	
		? "El apellido introducido debe tener un mínimo de dos caracteres"
	
		: "";

		//valido el mail
	
		emailError.innerText = !email.value ? "Introduzca su email" : "";

		//validaciones contraseña
	
		if (!!password.value) {
		
			if (
		
				!password.value.matches(

					/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
		
					"i"
		
					)
		
					) {
				passwordError.innerText =
			
				"Su contraseña debe debe contar con al menos una letra mínuscula , mayúscula y un número. Además , su longitud debe tener un mínimo de 6 caracteres.";
		
			} else if (password.value !== confirmPassword.value) {
		
				passwordError.innerText = "Las contraseñas no coinciden";
		
			}
	
		} else {
	
			passwordError.innerText = "Introduzca su contraseña";
	
		}

		//validacion foto de perfil

		var imageValidation = /[\/.](gif|jpg|jpeg|tiff|png)$/i.test(imagen.value);
	
		if (!imageValidation) {
		
			errores.push(
		
				"Se permiten archivos de formato [PNG, JPG, JPEG, GIF] únicamente."
		
				);
	
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
	
	});

};


