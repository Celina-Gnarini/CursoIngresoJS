/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
//Gnarini Celina TP Ferrete Iluminacion 04
function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLamparas;
	var precioBrutro;
	var descuento;
	var descuentoCalculado;
	var precioFinal;
	var importeFinal;
	var ingresosBrutos;
	
	
	cantidadLamparas=txtIdCantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=Marca.value;

	//testing
	//console.log(marcaLamparas+" "+cantidadLamparas);
	descuento=0;
	precioBrutro=cantidadLamparas*35;
	
	if(cantidadLamparas>5)
	{
		descuento=50;
	}	
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLamparas=="ArgentinaLuz")
			{
				descuento=40;
			}
			else
			{
				descuento=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						descuento=15;
					}
					else
					{
						if(marcaLamparas=="FelipeLamparas")
						{
							descuento=10;
						}
						else
						{
							descuento=5;
						}
					}
				}
			}
		}
	}
	
	descuentoCalculado=precioBrutro*descuento/100;
	precioFinal=precioBrutro-descuentoCalculado;
	
	//IngresosBrutos
	
	if(precioFinal>119)
	{
		ingresosBrutos=precioFinal*10/100;
		importeFinal=ingresosBrutos+precioFinal;
		alert("Usted pago $"+ingresosBrutos+" de IIBB");
		txtIdprecioDescuento.value=importeFinal;
	}
	else
	{
		txtIdprecioDescuento.value=precioFinal;
	}
}//FIN FUNCION
