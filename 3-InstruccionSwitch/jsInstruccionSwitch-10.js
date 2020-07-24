//Gnarini Celina Ejercicio 10
function mostrar()
{
	var estacionElegida;
	var destinoElegido;

	estacionElegida=txtIdEstacion.value;

	destinoElegido=txtIdDestino.value;

	switch(estacionElegida)
	{
		case "Invierno":
			switch(destinoElegido)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;

		case "Verano":
			switch(destinoElegido)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			switch(destinoElegido)
			{
				case "Bariloche":
				alert("No se viaja");
				break;
				default:
				alert("Se viaja");
				break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN