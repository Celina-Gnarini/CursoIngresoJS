/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;

	edadIngresada=txtIdEdad.value;

	alert("Usted es "+nombreIngresado+ " y tiene "+edadIngresada+" años");








	/* 
	var nombreIngresado;
	var edadIngresada;
	
	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	//testing
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");
	/*
	alert("Usted se llama "+nombreIngresado);
	alert("y tiene "+edadIngresada+" años");
	*/
	
	//alert("Usted se llama José y tiene 66 años");
}

