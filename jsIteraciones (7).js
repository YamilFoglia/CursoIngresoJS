function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var respuesta;

	contador=1;
	acumulador=0;
	numero=0;
	respuesta="si"

	while(respuesta=="si")
	{
		numero=prompt("el numero "+contador+": ");
		numero=parseInt(numero);

		respuesta=prompt("Quiere ingresar otro numero ? si/no");

		acumulador+=numero;

		contador++;
	}

	suma.value=acumulador;

	promedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN