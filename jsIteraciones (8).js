function mostrar()
{

	var contador;
	var respuesta;
	var numero;
	var positivo;
	var negativo;
	var cantidad;

	contador=0;	
	positivo=0;
	negativo=1;
	numero=0;
	respuesta=true
	
	while(respuesta==true)
	{
		cantidad=contador+1;

		numero=prompt("el numero "+cantidad+": ");
		numero=parseInt(numero);

		contador++;

		respuesta=confirm("¿ Quiere ingresar otro numero ?");

		if (numero<=0) 
		{
			positivo+=numero;	
		}
		else
		{
			negativo=negativo*numero;
		}
	}

	suma.value=positivo;

	producto.value=negativo;

}//FIN DE LA FUNCIÓN