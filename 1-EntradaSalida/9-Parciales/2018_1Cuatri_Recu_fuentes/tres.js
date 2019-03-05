function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var total;

	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);

	porcentaje=prompt("Ingrese el porcentaje de descuento");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;

	total=precio-descuento;

	elPrecioFinal.value=total;

}
/*Enunciado:
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
