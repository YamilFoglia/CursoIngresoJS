/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var ingreso;
	var Descuento;
	var SueldoFinal;


	ingreso=importe.value;
	ingreso=parseInt(ingreso);

	Descuento=ingreso*10/100;

	SueldoFinal=ingreso-Descuento;

	resultado.value= SueldoFinal;



}
