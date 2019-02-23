function mostrar()
{
//tomo la edad  

	var años;
	var eleccion;

	años=edad.value;
	eleccion=estadoCivil.value;

	if (años<18 && eleccion!="Soltero") 
	{
		alert("Usted es muy pequeño para NO ser Soltero");
	}


}//FIN DE LA FUNCIÓN