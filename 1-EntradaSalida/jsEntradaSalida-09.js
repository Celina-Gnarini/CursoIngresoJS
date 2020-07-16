/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo
	var resultado
	var aumento
	var mostrarAumento


	sueldo=txtIdSueldo.value;
	sueldo=parseInt(sueldo);

	resultado=txtIdResultado.value;
	resultado=parseInt(10);

	aumento=sueldo*resultado;
	aumento=parseInt(aumento);

	mostrarAumento=aumento/100;
	mostrarAumento=parseInt(mostrarAumento);

	txtIdResultado.value=sueldo+mostrarAumento;


}
