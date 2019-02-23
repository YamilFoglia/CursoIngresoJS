function mostrar()
{
//tomo la edad  

	var años;
	var eleccion;

	años=edad.value;
	eleccion=estadoCivil.value;

	if (años>17 && eleccion=="Soltero") 
	{
		alert("Usted es soltero y no se menor");
	}


}//FIN DE LA FUNCIÓN