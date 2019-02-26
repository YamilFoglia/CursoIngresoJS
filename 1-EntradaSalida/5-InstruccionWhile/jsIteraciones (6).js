function mostrar()
{

	var contador;
	var acumulador;
	var numero;

	contador=1;
	acumulador=0;
	numero=0;

	while(contador<6)
	{
		numero=prompt("el numero "+contador+": ");
		numero=parseInt(numero);

		acumulador=acumulador+numero;

		contador=contador+1

	}

	suma.value=acumulador;

	promedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN