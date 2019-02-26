function mostrar()
{

	var numero;

	numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(numero<0 || numero>9)
	{

		alert("numero erroneo, intentelo nuevamente");

		numero=prompt("ingrese un numero entre 0 y 10");
		numero=parseInt(numero);

	}

	alert("numero correcto");


}//FIN DE LA FUNCIÓN