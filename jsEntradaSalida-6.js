/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

	alert("La suma es: "+resultado);

}

