function mostrar()
{
//tomo la edad  

	var años;
	var estado;

	años=edad.value;
	años=parseInt(años);
	
	estado=estadoCivil.value;

	if(años<18)
	{
			if (!(estado=="Soltero")) 
		{
	
			alert("Usted es muy pequeño para NO ser soltero");
		}
	}

}//FIN DE LA FUNCIÓN