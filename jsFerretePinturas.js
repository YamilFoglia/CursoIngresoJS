/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var gradoFahrenheit;
    var gradosCelsius;
    var temperatura;

    temperatura=Temperatura.value;
    temperatura=parseInt(temperatura);

    gradoFahrenheit=temperatura;

    gradosCelsius=(gradoFahrenheit-32)*5/9; 


    alert(gradoFahrenheit+ " grados fahrenheit son " +gradosCelsius+ " grados centígrados ");
}

function CentigradosFahrenheit () 
{
    var gradoFahrenheit;
    var gradosCelsius;
    var temperatura;

    temperatura=Temperatura.value;
    temperatura=parseInt(temperatura);

    gradosCelsius=temperatura;

    gradoFahrenheit=(gradosCelsius*9/5)+32;


    alert(gradosCelsius+ " grados celsius son " +gradoFahrenheit+ " grados fahrenheit ");
}
