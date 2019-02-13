function mostrar()
{
	var precio;
	var recargo;
	var pagoFinal;

	
	precio=prompt("Ingrese el precio del producto que quiere llevar");
	precio=parseInt(precio);

	recargo=precio*10/100;

	pagoFinal=precio+recargo;

	alert("El precio del producto en efectivo es $"+precio+" con tarjeta tiene un recargo del 10%, que seria $"+recargo+" de recargo, costandole final $"+pagoFinal);

	

  
}
