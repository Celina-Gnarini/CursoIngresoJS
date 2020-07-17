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
	
	//PORCENTAJE VARIABLE:
	
	var porcentaje;

	porcentaje= prompt("Ingrese porcentaje");
	porcentaje=parseInt(porcentaje);
	

	importe=txtIdImporte.value;
	importe=parseInt(importe);

	descuento=importe*25/100;
	mostrarDescuento=importe-descuento;


	txtIdResultado.value=mostrarDescuento;
}


/*
//Se pide un importe y un porcentaje descuento por prompt,
// y se muestra el importe con el descuento por alert con el mensaje 
 //" el importe es $ xxxx el total de descuento es $xxx y el precio final 
 //es $xxx, gracias por su compra"
 //Celina Gnarini
}
//function mostrarAumento()
/*{
	var importe;
	var descuento;
	var porcentaje;
	var precioFinal;
	
	//PORCENTAJE VARIABLE:

	importe=prompt("Ingrese su importe");
	importe=parseInt(importe);

	porcentaje= prompt("Ingrese porcentaje de descuento");
	porcentaje=parseInt(porcentaje);

	descuento=(importe*porcentaje)/100;

	precioFinal=importe-descuento;

	alert("el importe es $"+importe+" el total del decuento es $"+descuento+" y el precio final es $"+precioFinal);

//}