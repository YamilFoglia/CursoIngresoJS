function mostrar()
{
	var notas;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedioDeNotas;
	var bandera=false;
	var notaMasBaja;
	var sexoDeNotaMasBaja;
	var contadorDeVaronesMasDe6=0;

	while(contador<5)
	{
		contador=contador+1;

		nota=prompt(contador+"- ingrese su nota, entre 0 y 10");
		nota=parseInt(nota);

		while(isNaN(nota)==true || nota<0 || nota>10)
		{
			nota=prompt(contador+"- Error - Ingrese nuevamente su nota, entre 0 y 10");
			nota=parseInt(nota);
		}

		sexo=prompt(contador+"- Ingrese su sexo, sea f o m")

		while(isNaN(sexo)==false || sexo!="f" && sexo!="m")
		{
			sexo=prompt(contador+"- Error - Ingrese nuevamente se sexo, sea f o m");
		}

		acumulador=acumulador+nota;
		promedioDeNotas=acumulador/contador;

		if (bandera==false) 
		{
			notaMasBaja=nota;
			sexoDeNotaMasBaja=sexo;

			bandera=true;
		}

		if (notaMasBaja>nota) 
		{
			notaMasBaja=nota;
			sexoDeNotaMasBaja=sexo;
		}

		if (sexo=="m" && nota>5) 
		{
			contadorDeVaronesMasDe6=contadorDeVaronesMasDe6+1;
		}

	}

	alert("EL promedio de las notas totales es : "+promedioDeNotas);
	alert("La nota mas baja es : "+notaMasBaja+" y el sexo de esta persona es : "+sexoDeNotaMasBaja);
	alert("La cantidad de varones que su nota es mayor o igual a 6 son : "+contadorDeVaronesMasDe6);
}

/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita 
el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/