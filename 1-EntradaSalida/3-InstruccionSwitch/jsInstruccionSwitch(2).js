function mostrar()
{
//tomo la edad  

	var mesDelAño; 
	var mensaje;

	mesDelAño=mes.value;

 	switch(mesDelAño)
 	{

 		case"Agosto":
 		case"Julio":

 		mensaje="Abrigate que hace frio";

 			break;

 		case"Enero":
 		case"Febrero":
 		case"Marzo":
 		case"Abril":
 		case"Mayo":
 		case"Junio":

 		mensaje="Falta para el invierno";

 			break;

 		case"Septiembre":
 		case"Octubre":
 		case"Noviembre":
 		case"Diciembre":

 		mensaje="Ya pasamos el frio ahora el calor";

 			break;
 	}

 	alert(mensaje);


}//FIN DE LA FUNCIÓN