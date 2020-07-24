//Gnarini Celina Ejercicio A
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivilIngresado=estadoCivil.value;

	if(edadIngresada<18)
	{
		alert("respeta a tus mayores");
		if(edadIngresada<13)
		{
			alert("hagan la tarea");
		}
		if(estadoCivilIngresado!="Soltero")
			{
				alert("Es muy pequeño para NO ser soltero");
			}
	}
	else
	{
		alert("se responsable");
		if(edadIngresada>59)
		{
			alert("sos persona de riesgo");
		}
		if(estadoCivilIngresado=="Casado")
		{
			alert("a disfrutar la pareja");
		}
		else
		{
			if(estadoCivilIngresado=="Soltero")
			{
				alert("a vivir la vida");
			}
			else
			{
				alert("a intentarlo nuevamente");
			}
				
		}
		
	}
}

/*
{//EJERCICIO 8
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivilIngresado=estadoCivil.value;

	if(edadIngresada>17&&estadoCivilIngresado=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


///FIN DE LA FUNCIÓN*/
