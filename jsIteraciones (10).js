function mostrar()
{
	var contador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	var diferencia;
	var cantidad;

	var promedioNegativo;
	var promedioPositivo;

	var contadorCeros;
	var contadorPares;
	var contadorNegativo;
	var contadorPositivo;


	contadorPositivo=0;
	contadorNegativo=0;
	contadorPares=0;
	contadorCeros=0;
	contador=0;

	positivo=0;
	negativo=0;

	numero=0;
	respuesta=true
	
	
	while(respuesta==true)
	{
		cantidad=contador+1;

		numero=prompt("el numero "+cantidad+": ");
		numero=parseInt(numero);

		contador++;

		respuesta=confirm("¿ Quiere ingresar otro numero ?");



		if (numero==0) 
		{
			contadorCeros++;
		}
		else
		{
			if (numero>0) 
			{
				positivo+=numero;
				contadorPositivo++;	
				promedioPositivo=positivo/contadorPositivo;
			}
			else
			{
				negativo+=numero;
				contadorNegativo++;
				promedioNegativo=negativo/contadorNegativo;
			}

		}
		
		if (numero%2==0) 
		{
			contadorPares++;
		}
		

	}

	diferencia=positivo+negativo;

	document.write("<br>Suma de negativos "+negativo);
	document.write("<br>Suma de positivos "+positivo);
	document.write("<br>Cantidad de positivos "+contadorPositivo);
	document.write("<br>Cantidad de negativos "+contadorNegativo);
	document.write("<br>Cantidad de ceros "+contadorCeros);
	document.write("<br>Cantidad de numeros pares "+contadorPares);	
	document.write("<br>Promedio de positivos "+promedioPositivo);
	document.write("<br>Promedio de negativos "+promedioNegativo);
	document.write("<br>Diferencia entre positivos y negativos "+diferencia);

}//FIN DE LA FUNCIÓN