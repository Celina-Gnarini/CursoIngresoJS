/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var ingreseTemperatura;
	var FahrenheitCentigrados;

	ingreseTemperatura=txtIdTemperatura.value;
	ingreseTemperatura=parseInt(ingreseTemperatura);

	FahrenheitCentigrados=(ingreseTemperatura-32)*5/9;

	alert(ingreseTemperatura+" Fahrenheit son "+FahrenheitCentigrados+" Centígrados");


}

function CentigradosFahrenheit () 
{
	var ingreseTemperatura;
	var CentigradosFahrenheit;

	ingreseTemperatura=txtIdTemperatura.value;
	ingreseTemperatura=parseInt(ingreseTemperatura);

	CentigradosFahrenheit=(ingreseTemperatura*9/5)+32;

	alert(ingreseTemperatura+" Centígrados son "+CentigradosFahrenheit+" Fahrenheit");
}
