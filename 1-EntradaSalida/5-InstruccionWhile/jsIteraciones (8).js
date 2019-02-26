function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	
	contador=1	
	positivo=0;
	negativo=1;
	numero=0;

	respuesta=prompt("Si quiere ingresar un numero ponga si, de lo contrario poner no");

	while(respuesta=="si")
	{
		numero=prompt("el numero "+contador+": ");
		numero=parseInt(numero);

		if (numero<0) 
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}

		contador=contador+1;

		respuesta=prompt("¿ Quiere ingresar otro numero ?. Ingreser si o no");
	}

	suma.value=positivo;

	producto.value=negativo;

}//FIN DE LA FUNCIÓN