function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numerosConcatenados;
	var numerosDivididos;
	var numerosSumados;

	numeroUno=prompt("Ingrese el primer numero");
	numeroUno=parseInt(numeroUno);
	
	numeroDos=prompt("Ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);
	
	if (numeroUno==numeroDos) 
	{
		alert("numeros concatenados: "+numeroUno+numeroDos);
	}
	else if (numeroUno>numeroDos) 
	{
		numerosDivididos=numeroUno/numeroDos;
		alert("numeros divididos: "+numerosDivididos);
	}
	else
	{
		numerosSumados=numeroUno+numeroDos;

		alert("numeros sumados: "+numerosSumados);
	}

	if (numerosSumados<50) 
	{
		alert("La suma es "+numerosSumados+" y es menor a 50");
	}

}
/*Enunciado:
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/