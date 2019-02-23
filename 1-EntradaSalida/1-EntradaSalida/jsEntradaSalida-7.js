/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;
	var resultado;

	uno=numeroUno.value; 
	uno=parseInt(uno);

	dos=numeroDos.value;
	dos=parseInt(dos);

	resultado=uno+dos;

	alert("La suma es "+resultado);
	
}

function restar()
{
	var uno;
	var dos;
	var resultado;

	uno=numeroUno.value; 
	uno=parseInt(uno);

	dos=numeroDos.value;
	dos=parseInt(dos);

	resultado=uno-dos;

	alert("La resta es "+resultado);	
	
}

function multiplicar()
{ 
	var uno;
	var dos;
	var resultado;

	uno=numeroUno.value; 
	uno=parseInt(uno);

	dos=numeroDos.value;
	dos=parseInt(dos);

	resultado=uno*dos;

	alert("La multiplicacion es "+resultado);	

}

function dividir()
{
	var uno;
	var dos;
	var resultado;

	uno=numeroUno.value; 
	uno=parseInt(uno);

	dos=numeroDos.value;
	dos=parseInt(dos);

	resultado=uno/dos;

	alert("La divicion es "+resultado);	
	
}

