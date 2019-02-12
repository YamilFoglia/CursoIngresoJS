function mostrar()
{
//tomo la edad  

	var años;

	años=edad.value;
	años=parseInt(años);
/*
if(años<13)
{
	alert("Usted no es un/a adolescente");
}

if(años>17)	
{
	alert("Usted no es un/a adolescente");
}*/


/*
if(años<13  || años>17)	
{
	alert("Usted no es un/a adolescente");
}

*/
/*
if(años<18 && años>12)
{


}else
{
	alert("Usted no es un/a adolescente");
}
*/

if (!(años<18 && años>12))
{
	alert("Usted no es un/a adolescente");

}
}//FIN DE LA FUNCIÓN