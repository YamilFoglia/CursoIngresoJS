function mostrar()
{
	var precio;
	var porsentaje;
	var descuento;
	var resultado;

	precio=prompt("Ingreso el precio");
	precio=parseInt(precio);

	porsentaje=prompt("Ingrese el porsentaje de descuento");
	porsentaje=parseInt(porsentaje);

	descuento=precio*porsentaje/100;

	resultado=precio-descuento;

	elPrecioFinal.value="El precio Final es "+resultado;

}
