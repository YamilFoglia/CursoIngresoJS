function mostrar()
{

	var marca;
	var peso;
	var temperatura;
	var contador=0;
	var acumulador=0;
	var rta=true;
	var bandera=false;
	var contadorDePares=0;
	var contadorDeMenosDe0=0;
	var promedioDePeso;
	var pesoMaximo;
	var pesoMinimo;
	var marcaDelMasPesado;

	
	while(rta==true)
	{
		contador=contador+1;

		marca=prompt(contador+"- Ingrese la marca del producto");

		peso=prompt(contador+"- Ingrese el peso entre 1 y 100");
		peso=parseInt(peso);

		while(isNaN(peso)==true || peso<1 || peso>100)
		{
			peso=prompt("Error - Ingrese nuevamente el peso entre 1 y 100");
			peso=parseInt(peso);
		}

		temperatura=prompt(contador+"- Ingrese la temperatura de almacenamiento entre -30 y 30");
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)==true || temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("Error - Ingrese nuevamente la temperatura de almacenamiento entre -30 y 30");
			temperatura=parseInt(temperatura);
		}

		acumulador=acumulador+peso;
		promedioDePeso=acumulador/contador;

		rta=confirm("¿Quiere ingresar los datos nuevamente?");

		if (temperatura!=0 && temperatura%2==0) 
		{
			contadorDePares=contadorDePares+1;
		}

		if (temperatura<0) 
		{
			contadorDeMenosDe0=contadorDeMenosDe0+1;
		}

		if (bandera==false) 
		{
			pesoMaximo=peso;
			marcaDelMasPesado=marca;

			pesoMinimo=peso;

			bandera=true;
		}

		if (pesoMaximo<peso) 
		{
			pesoMaximo=peso;
			marcaDelMasPesado=marca;
		}

		if (pesoMinimo>peso) 
		{
			pesoMinimo=peso;
		}

	}	

	document.write("</br> Cantidad de temperaturas pares: "+contadorDePares);
	document.write("</br> Marca del producto mas pesado: "+marcaDelMasPesado);
	document.write("</br> Cantidad de productos a menos de 0 grados: "+contadorDeMenosDe0);
	document.write("</br> Promedio del peso de todos los productos: "+promedioDePeso);
	document.write("</br> Peso maximo: "+pesoMaximo);
	document.write("</br> Peso minimo: "+pesoMinimo);

}

/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. x
b) La marca del producto más pesado x
c) La cantidad de productos que se conservan a menos de 0 grados. x
d) El promedio del peso de todos los productos.	x
f) El peso máximo y el mínimo.x

Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/
