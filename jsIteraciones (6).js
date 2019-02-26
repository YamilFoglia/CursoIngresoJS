function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var cantidad;

	contador=0;
	acumulador=0;
	numero=0;

	while(contador<5)
	{
		cantidad=contador+1;

		numero=prompt("Ingrese el numero "+cantidad+" :");
		numero=parseInt(numero);

		acumulador+=numero;

		contador++;

	}

	suma.value=acumulador;

	promedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN