
function mostrar()
{
	var largo;
	var ancho;
	var perímetro;

	largo=prompt("Ingrese el largo del rectángulo");
	largo=parseInt(largo);

	ancho=prompt("Ingrese el ancho del rectángulo");
	ancho=parseInt(ancho);

	perímetro=(largo+ancho)*2;

	alert("El perímetro es: "+perímetro);
}
/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/