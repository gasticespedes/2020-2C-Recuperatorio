/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var peso;
	var sexo;
	var edad;
	var contador;
	var contadorMujeres;
	var acumuladorEdad;
	var promedioEdad;
	var flagHombreMasPesado;
	var hombreMasPesado;
	var mayorPeso;
	flagHombreMasPesado = true;
	acumuladorEdad = 0;
	contadorMujeres = 0;
	contador = 0;
	
	while(contador < 5 ){
		
		do{
			nombre = prompt("Ingrese su nombre");

		}while(!(isNaN(nombre)));

		do{
			peso = prompt("Ingrese su peso en KG");
			peso = parseInt(peso);

		}while (peso < 0 || isNaN(peso));

		do{
			sexo = prompt("Ingrese su sexo m/f");

		}while(sexo != "m" && sexo != "f");

		do{
			edad = prompt ("Ingrese su edad");
			edad = parseInt(edad);

		}while(edad < 0 || isNaN(edad));
		
		//PUNTO A 
		if (sexo == "f"){
			contadorMujeres++;
		} else if ( flagHombreMasPesado == true){

			flagHombreMasPesado = false;
			mayorPeso = peso;
			hombreMasPesado = nombre;

		}else if(mayorPeso < peso ){
			mayorPeso = peso;
			hombreMasPesado = nombre;
		}
		
		//PUNTO B 
		acumuladorEdad = acumuladorEdad + edad;




		contador ++;


	}
	//PUNTO A
	console.log ("Hay " + contadorMujeres + " Mujeres");

	//PUNTO B 
	promedioEdad = acumuladorEdad / contador;
	console.log("El promedio de edad es de " + promedioEdad);

	//PUNTO C
	if(sexo == "m"){
	console.log("El hombre mas pesado es " + hombreMasPesado);

	}	
		else { 
		console.log("No se ingresaron hombres");
	}
}
