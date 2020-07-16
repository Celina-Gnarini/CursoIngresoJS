/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{

	var importe;
	var descuento;
	var importeconDescuento;
	var porcentaje;

	porcentaje= prompt("ingrese porcentaje");
	porcentaje=parseInt(porcentaje);


	importe=txtIdImporte.value;
	importe=parseInt(importe); 

	descuento=importeIngresado*25/100;

	importeconDescuento=importeIngresado-descuento;

	txtIdResultado.value=importeconDescuento;



}
