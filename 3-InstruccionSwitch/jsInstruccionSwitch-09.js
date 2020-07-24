//Gnarini Celina Ejercicio 9
function mostrar()
{
	var estacionElegida;
	var destinoElegido;
	var precioBase;
	var precioFinalA;
	var precioFinalD;
	var precioDescuento1;
	var precioDescuento2;
	var precioAumento1;
	var precioAumento2;

	estacionElegida=txtIdEstacion.value;

	destinoElegido=txtIdDestino.value;

	precioBase=15000;
	precioAumento1=(precioBase*10/100)+precioBase;
	precioAumento2=(precioBase*20/100)+precioBase;
	precioDescuento1=precioBase-(precioBase*10/100);
	precioDescuento2=precioBase-(precioBase*20/100);
	
	switch(destinoElegido)
	{
		case "Bariloche":
			switch(estacionElegida)
			{
				case "Invierno":
					precioFinalA=precioAumento2;
					alert(precioFinalA);
					break;
				case "Verano":
					precioFinalD=precioDescuento2;
					alert(precioFinalD);
					break;
				default:
					precioFinalA=precioAumento1;
					alert(precioFinalA);
					break;
			}
			break;
		case "Cataratas":
			switch(estacionElegida)
			{
				case "Invierno":
					precioFinalD=precioDescuento1;
					alert(precioFinalD);
					break;
				default:
					precioFinalA=precioAumento1;
					alert(precioFinalA);
					break;
			}
			break;
		case "Cordoba":
			switch(estacionElegida)
			{
				case "Invierno":
					precioFinalD=precioDescuento1;
					alert(precioFinalD);
					break;
				case "Verano":
					precioFinalA=precioAumento1;
					alert(precioFinalA);
					break;
				default:
					alert(precioBase);
			}
			break;
		case "Mar del plata":
			switch(estacionElegida)
			{
				case "Invierno":
					precioFinalD=precioDescuento2;
					alert(precioFinalD);
					break;
				case "Verano":
					precioFinalA=precioAumento2;
					alert(precioFinalA);
					break;
				default:
					precioFinalA=precioAumento1;
					alert(precioFinalA);
					break;
			}
			break;
	}
}//FIN FUNCION