function mostrar()
{

	var mesDelAño; 
	var mensaje;

	mesDelAño=mes.value;

 	switch(mesDelAño)
 	{

 		case"Febrero":

 		mensaje="Este mes no tiene mas de 29 días";

 			break;

 		case"Enero":
 		case"Marzo":
 		case"Abril":
 		case"Mayo":
 		case"Junio":
 		case"Julio":
 		case"Agosto":
 		case"Septiembre":
 		case"Octubre":
 		case"Noviembre":
 		case"Diciembre":

 		mensaje="Este mes tiene 30 o mas días";

 			break;

 	}

 	alert(mensaje);



}//FIN DE LA FUNCIÓN