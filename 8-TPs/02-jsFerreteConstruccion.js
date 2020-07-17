/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroRectangulo;
	var rectanguloAlambre;

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	perimetroRectangulo=(largoTerreno+anchoTerreno)*2;

	rectanguloAlambre=perimetroRectangulo*3;

	alert("Se necesitan "+rectanguloAlambre+"m de alambre");

}
function Circulo () 
{
	var radioTerreno;
	var perimetroCirculo;
	var circuloAlambre;

	radioTerreno=txtIdRadio.value;
	radioTerreno=parseInt(radioTerreno);

	perimetroCirculo=radioTerreno*3,14;

	circuloAlambre=perimetroCirculo*2;

	alert("Se necesitan "+circuloAlambre+"m de alambre");
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var bolsasCemento;
	var bolsasCal;
	var superficieRectangulo;

	largoTerreno=txtIdLargo.value;
	largoTerreno=parseInt(largoTerreno);

	anchoTerreno=txtIdAncho.value;
	anchoTerreno=parseInt(anchoTerreno);

	superficieRectangulo=largoTerreno*anchoTerreno;

	bolsasCemento=superficieRectangulo*2;

	bolsasCal=superficieRectangulo*3;

	alert("Se necesitan "+bolsasCemento+" bolsas de cemento, y "+bolsasCal+" bolsas de cal");

}