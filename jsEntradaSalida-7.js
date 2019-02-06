/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	uno=numeroUno.value;
	dos=numeroDos.value;

		var sumar=parseInt(uno)+parseInt(dos);

		alert("La suma es "+sumar);

}

function restar()
{

	uno=numeroUno.value;
	dos=numeroDos.value;
	
		var restar=parseInt(uno)-parseInt(dos);

		alert("La resta es "+restar);

}

function multiplicar()
{ 
	
	uno=numeroUno.value;
	dos=numeroDos.value;
	
		var multiplicar=parseInt(uno)*parseInt(dos);

		alert("La multiplicacion es "+multiplicar);

}

function dividir()
{
	
	uno=numeroUno.value;
	dos=numeroDos.value;
	
		var dividir=parseInt(uno)/parseInt(dos);

		alert("La divicion es "+dividir);

}

