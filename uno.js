
function mostrar()
{
	var nombre1;
	var nombre2;
	var edad1;
	var edad2;
	var suma;

	nombre1=prompt("Ingrese el primer nombre");

	nombre2=prompt("Ingrese el segundo nombre");

	edad1=prompt(nombre1+" Ingrese su edad");
	edad1=parseInt(edad1);

	edad2=prompt(nombre2+" Ingrese su edad");
	edad2=parseInt(edad2);

	suma=edad1+edad2;
	
	alert("Ustedes Son "+nombre1+" y "+nombre2+" ,sus edades son "+edad1+" y "+edad2+" y la suma de las edades es "+suma);
}
