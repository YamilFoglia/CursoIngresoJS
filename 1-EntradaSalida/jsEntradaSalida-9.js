/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreso;
	var aumento;
	var sueldoFinal;

	ingreso=sueldo.value;
	ingreso=parseInt(ingreso);

	aumento=ingreso*10/100;

	sueldoFinal=ingreso+aumento;

	resultado.value=sueldoFinal;	
}
