function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero=Math.floor((Math.random()*10)+1);

	if (numero==9 || numero==10) 
	{
		mensaje="Exelente";

	}else
	{
		if (numero>3) 
		{
			mensaje="Aprobo";

		}else
		{
			if (numero<4) 
			{
				mensaje="Vamos, la proxima se puede";
			}
		}
	}

	alert(mensaje+" su nota es "+numero);

}//FIN DE LA FUNCIÓN