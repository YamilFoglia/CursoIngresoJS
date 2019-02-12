function mostrar()
{
//tomo la edad  

	var años;
	var estado;
	


	años=edad.value;
	años=parseInt(años);
	estado=estadoCivil.value;
	estado=parseInt(estado);


	if(años>18)
		if(estado=="Soltero")

		{
			alert("Es soltero y no es menor");
		}

}//FIN DE LA FUNCIÓN