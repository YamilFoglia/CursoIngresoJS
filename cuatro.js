function mostrar()
{	
	var cantidad;
	var metodoDePago;
	var descuento1;
	var descuento2;
	var recargo;
	var montoFinal;
	var montoFinal2;
	var montoFinal3;


	alert("Al realizar una compra, si compra es de mas de dos productos se realiza un descuento del 10% y si supera los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo");
	
	cantidad=prompt("Si esta comprando mas de dos productos, colocar la suma de los precios, para que se le realize el correspondiente descuento");
	cantidad=parseInt(cantidad);

	metodoDePago=prompt("Va a abonar con tarjeta (colorar numero 1) o con efectivo (colocar numero 2)");

	if(metodoDePago==2) 
	{
		if (cantidad<2000) 
		{
			descuento1=cantidad*10/100;
			montoFinal=cantidad-descuento1;
		
			alert("Gracias por su compra, llevando $"+cantidad+" termina pagando $"+montoFinal);
		}	

		if (cantidad>1999) 
		{
			descuento2=cantidad*25/100;
			montoFinal2=cantidad-descuento2;
		
			alert("Gracias por su compra, llevando $"+cantidad+" termina pagando $"+montoFinal2);
		}

	}

	if (metodoDePago==1) 
	{
		recargo=cantidad*10/100;
		montoFinal3=cantidad+recargo;
		
		alert("Gracias por su compra, llevando $"+cantidad+" termina pagando $"+montoFinal3);
	}





}
