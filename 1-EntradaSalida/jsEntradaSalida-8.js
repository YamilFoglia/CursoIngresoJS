/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	

	dividendo=numeroDividendo.value;
	divisor=numeroDivisor.value;

		var resto=parseInt(dividendo)%parseInt(divisor);		

		alert("El resto es "+resto);

	
	
}
