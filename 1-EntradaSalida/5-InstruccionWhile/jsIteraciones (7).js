function mostrar()
{
	var contador;
	var respuesta;
	var acumulador;
	var numero;
	
	contador=1	
	acumulador=0;
	numero=0;

	respuesta=prompt("Si quiere ingresar un numero ponga si, de lo contrario poner no");

	while(respuesta=="si")
	{
		numero=prompt("el numero "+contador+": ");
		numero=parseInt(numero);

		respuesta=prompt("¿ Quiere ingresar otro numero ?. Ingreser si o no");
		acumulador=acumulador+numero;

		contador=contador+1

	}

	suma.value=acumulador;

	promedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN