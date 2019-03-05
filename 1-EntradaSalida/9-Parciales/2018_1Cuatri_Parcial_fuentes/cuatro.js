function mostrar()
{

	var uno;
	var dos;
	var resultado;

	uno=prompt("Ingrese el primer numero");
	
	dos=prompt("Ingreso el segundo numero");

	if (uno==dos) 
	{
		resultado=uno+dos;
	}
	
	uno=parseInt(uno);
	dos=parseInt(dos);

	resta=uno-dos;
	suma=uno+dos;

	if (uno>dos) 
	{
		resultado=resta;
	}
	else
	{	
		resultado=suma;		
	}

	alert(resultado);

	if (suma>10) 
	{
		alert("la suma es "+suma+" y supero el 10");
	}
}
