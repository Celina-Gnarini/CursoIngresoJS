//Gnarini Celina Ejercicio 6
function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("niño");
	}
	else
	{
		if(edadIngresada<18)
		{
			alert("adolescente");
		}
		else
		{
			alert("es mayor de edad");
		}
	}

}//FIN DE LA FUNCIÓN