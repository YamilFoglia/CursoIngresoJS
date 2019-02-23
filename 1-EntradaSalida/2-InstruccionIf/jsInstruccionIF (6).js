function mostrar()
{
//tomo la edad  

	var años;

	años=edad.value;

	if (años>17) 
	{
		mensaje="Usted es mayor de edad";

	}else
	{
		if (años<18 && años>12) 
		{
			mensaje="Usted es adolecente";

		}else
		{
			if (años<13) 
			{
				mensaje="Usted es niño/a"
			}

		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN