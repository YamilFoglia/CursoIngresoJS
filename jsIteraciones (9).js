function mostrar()
{

	var contador;
	var rta;
	var numero;
	var nMaximo;
	var nMinimo;
	var cantidad;
	var bandera;

	contador=0;	
	numero=0;
	rta=true;
	bandera=true;
	
	while(rta==true)
	{
		cantidad=contador+1;

		numero=prompt("el numero "+cantidad+": ");
		numero=parseInt(numero);

		contador++;

		rta=confirm("¿ Quiere ingresar otro numero ?");

		if (bandera==true) 
		{
			nMaximo=numero;
			nMinimo=numero;

			bandera=false;

		}
		else
		{
			if(numero>nMaximo) 
			{
				nMaximo=numero;
			}

			if (numero<nMinimo) 
			{
				nMinimo=numero;
			}
		} 
		
	}

	maximo.value=nMaximo;

	minimo.value=nMinimo;


}//FIN DE LA FUNCIÓN