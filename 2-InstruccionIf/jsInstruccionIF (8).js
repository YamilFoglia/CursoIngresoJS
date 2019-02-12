function mostrar()
{
//tomo la edad  

	var años;
	var estado;
	


	años=edad.value;
	años=parseInt(años);
	estado=estadoCivil.value;
	

	if(años>17)
	{
		if(estado=="Soltero")
		{
			alert("Es soltero y no es menor");
		}

	}
		

}//FIN DE LA FUNCIÓN