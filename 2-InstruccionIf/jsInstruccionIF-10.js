//Gnarini Celina Ejercicio 10
function mostrar()
{
	var resultadoExamen;

	resultadoExamen=Math.floor(Math.random()*10)+1;

	if(resultadoExamen<4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if(resultadoExamen>8)
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("APROBÓ");
		}
	}

}//FIN DE LA FUNCIÓN