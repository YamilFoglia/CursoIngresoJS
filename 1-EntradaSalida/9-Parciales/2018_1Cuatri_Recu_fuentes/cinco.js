function mostrar()
{
	var día;
	var mensaje;

	día=prompt("Ingrese un dia de la semana");

	switch(día)
	{
		case"sabado":
		case"domingo":

		mensaje="buen finde";

			break;

		case"lunes":
		case"martes":
		case"miercoles":
		case"jueves":
		case"viernes":

		mensaje="a trabajar";

			break;

			default:

			mensaje="no es un día valido";
	}

	alert(mensaje);
}

/*Enunciado:
Bienvenidos. 
(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert.*/
