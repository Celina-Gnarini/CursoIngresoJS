//Gnarini Celina Ejercicio 3
function mostrar()
{
	var mesElegido;

	mesElegido=txtIdMes.value;

	switch(mesElegido)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	}
}//FIN DE LA FUNCIÓN