/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var total;

	largo=Largo.value;
	largo=parseInt(largo);
	
	ancho=Ancho.value;
	ancho=parseInt(ancho);

	perimetro=(largo+ancho)*2;

	total=perimetro*3;

	alert("La cantidad de alambre que tiene que comprar es "+total+" metros");

}
function Circulo () 
{
	var radio;
	var perimetro;
	var total;

	radio=Radio.value;
	radio=parseInt(radio);

	perimetro=(radio*2)*3.14;

	total=perimetro*3;

	alert("La cantidad de alambre que tiene que comprar es "+total+" metros");

}
function Materiales () 
{

	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	largo=Largo.value;
	largo=parseInt(largo);
	ancho=Ancho.value;
	ancho=parseInt(ancho);

	area=largo*ancho;

	cemento=2*area;
	cal=3*area;

	alert("Se tendria que comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
	
}