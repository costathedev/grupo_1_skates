window.onload = function () {


	//  capturo el formulario



	let form = document.querySelector(".form-register");

	let nameError = document.getElementById("nameError");

	let surnameError = document.getElementById("surnameError");

	let emailError = document.getElementById("emailError");

	let passwordError = document.getElementById("passwordError");

	let imageError = document.getElementById("imageError");

	let image = document.querySelector("input[type=file]");


	// submit datos

	form.addEventListener("submit", (evento) => {
		
		let name = document.getElementById("name");
		
		let surname = document.getElementById("apellido");
		
		let email = document.getElementById("email");
	
		let password = document.getElementById("password");
		
		let confirmPassword = document.getElementById("confirmPassword");


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
		
					/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		
					"i"
		
					)
		
					) {
				passwordError.innerText =
			
				"Su contraseña debe debe contar con al menos una letra mínuscula , mayúscula y un número. Además , su longitud debe tener un mínimo de 8 caracteres.";
		
			} else if (password.value !== confirmPassword.value) {
		
				passwordError.innerText = "Las contraseñas no coinciden";
		
			}
	
		} else {
	
			passwordError.innerText = "Introduzca su contraseña";
	
		}

		//validacion foto de perfil

		var imageValidation = /[\/.](gif|jpg|jpeg|tiff|png)$/i.test(imagen.value);
	
		if (!imageValidation) {
		
			error.push(
		
				"Se permiten archivos de formato [PNG, JPG, JPEG, GIF] únicamente."
		
				);
	
			}


		//se le envia al usuario los errores

		if (
		
			!!nameError.innerText ||
		
			!!surnameError.innerText ||
		
			!!emailError.innerText ||
		
			!!passwordError.innerText ||
         
			!!imageError.innerText
		) {
		
			evento.preventDefault();
		
			return;
	
		} else {
		
			form.submit();
	
		}
	
	});

};

