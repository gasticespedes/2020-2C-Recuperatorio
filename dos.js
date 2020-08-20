/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  var respuesta;
  var marca;
  var precio;
  var pesoEnKilogramos;
  var tipo;
  var acumuladorPeso;
  var flagLiquidoMasCaro;
  var liquidoMasCaro;
  var precioMasCaro;
  var flagMasbaratoSolido;
  var precioMasBarato;
  var solidoMasBarato;
  flagMasbaratoSolido = true;
  flagLiquidoMasCaro = true;
  acumuladorPeso = 0;
 do{

  do{

    marca = prompt("Ingrese la marca del producto");
  }while(!(isNaN(marca)));

  do{

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
  }while(precio < 0 || isNaN(precio));

  do{

    pesoEnKilogramos = prompt("Ingrese el peso en KG");
    pesoEnKilogramos = parseInt(pesoEnKilogramos);
  }while(pesoEnKilogramos < 0 || isNaN(pesoEnKilogramos));

  do{

    tipo = prompt("Ingrese el tipo de producto : sólido / líquido");
  }while( tipo != "sólido" && tipo != "líquido");


  //PUNTO A 
  acumuladorPeso = acumuladorPeso + pesoEnKilogramos;

  //PUNTO B && PUNTO C 
  switch (tipo) {
    case "líquido":
      if(flagLiquidoMasCaro == true){

        flagLiquidoMasCaro = false;
        precioMasCaro = precio;
        liquidoMasCaro = marca;

      }else if (precioMasCaro < precio){

        precioMasCaro = precio;
        liquidoMasCaro = marca;
      }
      
      break;
  
    case "sólido":
      if(flagMasbaratoSolido == true){

        flagMasbaratoSolido = false;
        precioMasBarato = precio;
        solidoMasBarato = marca;
        
      } else if (precioMasBarato > precio){
        precioMasBarato = precio;
        solidoMasBarato = marca;
      }
      break;
  }

  respuesta = confirm("Desea agregar otro producto?");

 }while (respuesta == true);
 //PUNTO A 
 console.log("El peso total es de " + acumuladorPeso + " KG");

 //PUNTO B
 console.log("El liquido mas caro es "+ liquidoMasCaro);

 //PUNTO C
 console.log("El sólido mas barato es " + solidoMasBarato);
}
