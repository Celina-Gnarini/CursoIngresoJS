/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento(mostrarDescuento)
{

	var importe;
	var descuento;
	var mostrarDescuento;
	
	/*     //PORCENTAJE VARIABLE:
	
	var porcentaje;

	porcentaje= prompt("Ingrese porcentaje");
	porcentaje=parseInt(porcentaje);
	*/

	importe=txtIdImporte.value;
	importe=parseInt(importe);

	descuento=importe*25/100;

	mostrarDescuento=importe-descuento;


	txtIdResultado.value=mostrarDescuento;

}