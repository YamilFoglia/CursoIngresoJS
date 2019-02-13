function mostrar()
{
//tomo la edad  

	var años;

	años=edad.value;
	años=parseInt(años);

	if(años>17)
	{
		alert("Usted es mayor de edad");
	}

	if(años<13)

	{
		alert("Usted es un/a niño/a");
	}

	if(años>12 && años<18)
	{
		alert("Usted es un/a adolecente");
	}

}//FIN DE LA FUNCIÓN