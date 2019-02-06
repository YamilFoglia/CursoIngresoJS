/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var ingresos;
	var descuento;
	var ingresocondescuento;


	ingresos=sueldo.value;
	ingresos=parseInt(ingresos);

	descuento= ingresos*10/100;

	ingresocondescuento=ingresos+descuento;


	resultado.value=ingresocondescuento;
	
}
