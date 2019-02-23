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
			if (años<18) 
			{
				mensaje="Usted es menor de edad"
			}
		}

	alert(mensaje);

}//FIN DE LA FUNCIÓN