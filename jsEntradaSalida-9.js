/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var ingresos;
	var aumento;
	var ingresoaumentado;


	ingresos=sueldo.value;
	ingresos=parseInt(ingresos);

	aumento= ingresos*10/100;

	ingresoaumentado=ingresos+aumento;


	resultado.value=ingresoaumentado




	
}
