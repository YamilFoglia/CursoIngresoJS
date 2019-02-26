/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	var uno;
	var dos;
	var tres;
	var resultado;

	uno=PrecioUno.value;
	uno=parseInt(uno);

	dos=PrecioDos.value;
	dos=parseInt(dos);

	tres=PrecioTres.value;
	tres=parseInt(tres);

	resultado=uno+dos+tres;

	alert(resultado);

}

function Promedio () 
{

	var uno;
	var dos;
	var tres;
	var resultado;

	uno=PrecioUno.value;
	uno=parseInt(uno);

	dos=PrecioDos.value;
	dos=parseInt(dos);

	tres=PrecioTres.value;
	tres=parseInt(tres);

	resultado=(uno+dos+tres)/3;

	alert(resultado);

	
}

function PrecioFinal () 
{
	
	var uno;
	var dos;
	var tres;
	var suma;
	var iva;
	var resultado;

	uno=PrecioUno.value;
	uno=parseInt(uno);

	dos=PrecioDos.value;
	dos=parseInt(dos);

	tres=PrecioTres.value;
	tres=parseInt(tres);

	suma=uno+dos+tres;

	iva=suma*21/100;

	resultado=suma+iva;

	alert(resultado);

}