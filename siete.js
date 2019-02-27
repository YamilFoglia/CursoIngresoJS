function mostrar()
{

	var notas;
	var sexo;
	var alumnos;
	var contador=0;
	var acumulador=0;
	var bandera=true;
	var minimo;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	var buenasNotasHombres=0;
	

	while(contador<5)
	{
		contador++;

		notas=prompt("Ingrese la nota del alumno numero "+contador);
		notas=parseInt(notas);

		sexo=prompt("Ingrese el sexo, del dicho alumno, siendo las opciones f o m");

		acumulador+=notas;

		if (sexo=="m" && notas>=6) 
		{
			buenasNotasHombres++;
			mensaje3="la cantidad de varones que sus notas fueron igual o mayor a 6 son "+buenasNotasHombres;
		}	
		else if (bandera==true) 
		{
			minimo=notas;
			bandera=false;
		}
		else if (notas<minimo) 
		{
			if (sexo=="f") 
			{
				minimo=notas;
				mensaje1="la nota mas baja es "+minimo+" y es de una mujer";
			}
			else if (sexo=="m") 
			{
				minimo=notas;
				mensaje1="La nota mas baja es "+minimo+" y es de un hombre";
			}
		}
		 	mensaje2="El promedio de las notas ingresadas es "+acumulador/5;	 	
	}

 	alert(mensaje1);
 	alert(mensaje2);
 	alert(mensaje3);
}

/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de 
las notas (validar entre 0 y 10)
el sexo (validar el sexo “f” o “m”) de 5 alumnos
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/