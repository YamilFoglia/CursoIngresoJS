function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroRandom;

	numeroRandom=Math.floor((Math.random() * 10) + 1);

	if (numeroRandom<11 && numeroRandom>8) 
	{	
		alert("Su nota es "+numeroRandom+", Excelente");
	}else
	{	
		if (numeroRandom<9 && numeroRandom>3) 
			{	
				alert("Su nota es "+numeroRandom+", Aprobo");
			}else
			{
				if (numeroRandom<4) 
				{
					alert("Su nota es "+numeroRandom+", Vamos, la proxima se puede");
				}
			}
					


	}
			

}//FIN DE LA FUNCIÓN