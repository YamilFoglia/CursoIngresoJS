function mostrar()
{

var sexo;

	sexo=prompt("ingrese f ó m .");

	while(sexo!="f" && sexo!="m")
	{

		alert("sexo erroneo, intentelo nuevamente");

		sexo=prompt("ingrese un sexo correcto");

	}

	Sexo.value=sexo;

}//FIN DE LA FUNCIÓN