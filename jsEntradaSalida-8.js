/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	var Dividendo;
	var Divisor;
	var resultado;

	Dividendo=numeroDividendo.value;
	Dividendo=parseInt(Dividendo);

	Divisor=numeroDivisor.value;
	Divisor=parseInt(Divisor);

	resultado= Dividendo%Divisor;


	alert("El resto es: "+resultado);

	
}
