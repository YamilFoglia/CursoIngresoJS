function mostrar()
{

	var letra;
	var numero;
	var contador=0;
	var rta=true;
	var contadorImpar=0;
	var promedioPositivo;
	var contadorPositivo=0;
	var positivo=0;
	var negativo=0;
	var sumaNegativos=0;
	var contadorCeros=0;

	while(rta==true)
	{
		letra=prompt("Ingrese una letra");

		numero=prompt("Ingrese un numero, entre el numero -100 y el numero 100");
		numero=parseInt(numero);

		while(isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("ERROR, ingrese nuevamente un numero");
			numero=parseInt(numero);
		}

		while(isNaN(letra)==false)
		{
			letra=prompt("ERROR, ingrese nuevamente una letra");
		}

		contador++;

		rta=confirm(contador+"- ¿Quiere ingresar otro numero y otra letra?");
		
		if (numero>0) 
		{
			positivo=positivo+numero;
			contadorPositivo++;	
			promedioPositivo=positivo/contadorPositivo;
		}
		else
		{
			negativo=negativo+numero;
		}

		if (numero%2==0) 
		{
			contadorPar++;
		}
		else
		{	
			contadorImpar++;
		}

		if (numero==0) 
		{
			contadorCeros++;
		}
	

	
	}

	document.write("<br>Cantidad de ceros "+contadorCeros);
	document.write("<br>Cantidad de numeros pares "+contadorPar);	
	document.write("<br>Cantidad de numeros impares "+contadorImpar);
	document.write("<br>Promedio de positivos "+promedioPositivo);
	document.write("<br>La suma de los numeros negativos "+sumaNegativos);

}

/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/
