//Gnarini Celina Ejercicio 4
function mostrar()
{
	var mesElegido;

	mesElegido=txtIdMes.value;

	switch(mesElegido)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("si tiene 31 días.");
			break;
		case "Febrero":
			alert("si tiene 28 días.");
			break;
		default:
			alert("si tiene 30 días.");
			break;
	}
}//FIN DE LA FUNCIÓN