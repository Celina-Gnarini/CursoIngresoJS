/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumar;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	sumar=precioUno+precioDos+precioTres;
	
	alert("la suma es "+sumar);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);
	
	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	promedio=(precioUno+precioDos+precioTres)/3;
	
	alert("el promedio es "+promedio);
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioFinal;
	
	precioUno=txtIdPrecioUno.value;
	productoUno=parseInt(precioUno);
	
	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);
	
	suma=(precioUno+precioDos+precioTres);//sumar precios

	iva=suma*21/100;//calculo IVA

	precioFinal=suma+iva;//agrego el IVA al precio anterior
	
	alert("el precio con IVA es "+precioFinal);


}