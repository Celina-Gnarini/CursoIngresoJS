/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

*/
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
		}
	}
	
	if(estadoCivilIngresado=="Divorciado")
	{
		alert("a intentarlo nuevamente");
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
