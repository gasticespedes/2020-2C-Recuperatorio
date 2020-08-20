/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var sexoTitular;
	var lugar;
	var temporada;
	var cantidadDePersonasQueViajan;
	var contadorBariloche;
	var contadorSalta;
	var contadorCataratas;
	var maximoPasajeros;
	var flagMaximoPasajeros;
	var sexoTitularConMasPasajeros;
	var contadorViajesInvierno;
	var acumuladorPasajerosInvierno
	var promedioPersonasQueViajanEnInvierno;
	acumuladorPasajerosInvierno = 0;
	acumuladorViajesInvierno = 0;
	flagMaximoPasajeros = true;
	contadorBariloche = 0;
	contadorCataratas = 0;
	contadorSalta = 0;

	do{
		do{
			sexoTitular = prompt("Ingrese el sexo del titular m/f");
		
		}while( sexoTitular != "m" && sexoTitular != "f");

		do{
			lugar = prompt("Ingrese el lugar Bariloche/Cataratas/Salta");

		}while(lugar != "Bariloche" && lugar != "Cataratas "
		 && lugar != "Salta");

		do{
			temporada = prompt("Ingrese la temporada otoño/primavera/verano/invierno");

		}while(temporada != "primavera " && temporada != "verano" &&
		 temporada !="otoño" && temporada != "invierno");

		do{
			cantidadDePersonasQueViajan = prompt("Ingrese la cantidad de personas que viajan");
			cantidadDePersonasQueViajan = parseInt(cantidadDePersonasQueViajan);
			
		}while ( cantidadDePersonasQueViajan < 0 || isNaN(cantidadDePersonasQueViajan));

		//PUNTO A 
	 if(lugar == "Bariloche"){
		contadorBariloche++;

	 } else if(lugar == "Cataratas "){
		 contadorCataratas++;
	    } else {
			contadorSalta++;
		}

		//PUNTO B

		if(flagMaximoPasajeros == true){

			flagMaximoPasajeros = false;
			maximoPasajeros = cantidadDePersonasQueViajan;
			sexoTitularConMasPasajeros = sexoTitular;
		}else if (maximoPasajeros < cantidadDePersonasQueViajan){
			maximoPasajeros = cantidadDePersonasQueViajan
			sexoTitularConMasPasajeros = sexoTitular
		}
		//PUNTO C
		if (temporada == "invierno"){
			contadorViajesInvierno++;
			acumuladorPasajerosInvierno = acumuladorPasajerosInvierno + cantidadDePersonasQueViajan;

		}

	

	respuesta = confirm("Va a ingresar otra estadia ?");

	}while(respuesta == true);


	//PUNTO A 
	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		
		console.log("El lugar mas elegido es Bariloche");

	} else if (contadorCataratas > contadorSalta){

		console.log("El lugar mas elegido es Cataratas");

	} else { 
		console.log("El lugar mas elegido es Salta");
	}

	//PUNTO B
	console.log("El sexo del titular que lleva mas pasajeros es "+ sexoTitularConMasPasajeros);

	//PUNTO C
	promedioPersonasQueViajanEnInvierno = acumuladorPasajerosInvierno / contadorViajesInvierno;
	console.log("El promedio de las personas que viajan en invierno es "
	 + promedioPersonasQueViajanEnInvierno);

}
