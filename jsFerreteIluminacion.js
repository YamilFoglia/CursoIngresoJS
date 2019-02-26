
function CalcularPrecio () 
{
 	
	var lamparitas;
	var precio;
	var precioFinal;
	var marca;
	var precioConDescuento;
	var precioConAumento;
	var descunto;
	var aumento; 

	lamparitas=Cantidad.value;
 	lamparitas=parseInt(lamparitas);
 	
 	marca=Marca.value;

 	precio=lamparitas*35;

 	if (lamparitas>=6) 
 	{
 		descuento=50;
 	}
 	else if (lamparitas==5) 
 	{
 			if (marca=="ArgentinaLuz") 
 			{
 				descuento=40;
 			}
 			else if (marca=="FelipeLamparas") 
 			{
 				descuento=30;
			}	
 	}
 	else if (lamparitas==4) 
 	{
 			if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") 
 			{
 				descuento=25;
 			}
 			else 
 			{
 				descuento=20;
			}
	}	
 	else if (lamparitas==3)
 	{
 			if (marca=="ArgentinaLuz") 
 			{
 				descuento=15;
 			}
 			else if (marca=="FelipeLamparas") 
 			{
 				descuento=10;
 			}
 			else 
 			{
 				descuento=5;
 			}
 	}

 	precioConDescuento=precio*descuento/100;
 	
 	precioFinal=precio-precioConDescuento;
 						
 							
 	if (precioFinal>120) 
 	{
 		aumento=10;
 	}
				
	precioConAumento=precioFinal*aumento/100;

	precioFinal=precioFinal+precioConAumento;

 	precioDescuento.value=precioFinal;
 	
}


 	/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */




