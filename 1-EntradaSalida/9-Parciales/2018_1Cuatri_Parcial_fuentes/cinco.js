function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese el planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":

		mensaje="Aca hace mas calor"

			break;

		case "tierra":

		mensaje="Aca vivimos";

			break;

		case "saturno":
		case "jupiter":
		case "marte":
		case "urano":
		case "neptuno":

		mensaje="Aca hace mas frio";

			break;

			default:

			mensaje="No es un pais";
		
	}

	alert(mensaje);

}
