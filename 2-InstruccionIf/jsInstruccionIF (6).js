function mostrar()
{
//tomo la edad  
	var años;

	años=edad.value;
	años=parseInt(años);


if(años>18)
{
	alert("Usted es mayor de edad");
}

if(años<18 && años>12)
{
	alert("Usted es un/a adolescente");

}
if(años<13)	
{
	alert("Usted es un/a niña");
}



}//FIN DE LA FUNCIÓN