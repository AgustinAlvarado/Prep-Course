// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
let nuevoArray = [];

  for (let i = 0; i < array.length; i++){
    nuevoArray[i] = array[i] + 1;

  }

  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frase = "";

  for (let i = 0; i < palabras.length; i++){
      if (i === 0){
        frase = palabras[i];
      } else {
        frase = frase + " " + palabras[i];
      }
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let contiene = false;

  for (let i = 0; i < array.length; i++){
    if (array[i] === elemento){
      contiene = true;
    }
  }
  return contiene;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
let sumaEnteros = 0;

for (let i = 0; i < numeros.length; i++){
  sumaEnteros = sumaEnteros + numeros[i];
}

return sumaEnteros;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  let sumaResultados = 0;

  for (let i = 0; i < resultadosTest.length; i++){
    sumaResultados = sumaResultados + resultadosTest[i];

  }
  let promedioResultados = sumaResultados / (resultadosTest.length);

  return promedioResultados;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let numeroMayor = 0;

  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > numeroMayor){
      numeroMayor = numeros[i];
    }
  }
  return numeroMayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length === 0){
    return 0;
  } else if (arguments.length === 1){
    return arguments[0];
  }else{
    let multiplicados = 1;

    for (let i = 0; i < arguments.length; i++){
      multiplicados = multiplicados * arguments[i];
    }
    return multiplicados;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayores = 0;

  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18){
      mayores++;
    }
  }
  return mayores;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  } 
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  let convertidoStr = n.toString();

  if (convertidoStr[0] == 9){
    return true;
  } else {
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  let iguales = true;

  for (i = 0; i < arreglo.length - 1; i++){
    if (arreglo[i] != arreglo[i + 1]){
      return false;
    }
  }
  return iguales;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  if (array.length < 12){
    return "No se encontraron los meses pedidos";
  }

  let ordenados = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] === "Enero"){
      ordenados[0] = "Enero";
    } else if (array[i] === "Febrero"){
      ordenados[1] = "Febrero";
    } else if (array[i] === "Marzo"){
      ordenados[2] = "Marzo";
    } else if (array[i] === "Abril"){
      ordenados[3] = "Abril";
    } else if (array[i] === "Mayo"){
      ordenados[4] = "Mayo";
    } else if (array[i] === "Junio"){
      ordenados[5] = "Junio";
    } else if (array[i] === "Julio"){
      ordenados[6] = "Julio";
    } else if (array[i] === "Agosto"){
      ordenados[7] = "Agosto";
    } else if (array[i] === "Septiembre"){
      ordenados[8] = "Septiembre";
    } else if (array[i] === "Octubre"){
      ordenados[9] = "Octubre";
    } else if (array[i] === "Noviembre"){
      ordenados[10] = "Noviembre";
    } else if (array[i] === "Diciembre"){
      ordenados[11] = "Diciembre";
    } 
    
    return ordenados;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  let nuevoArray = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] > 100){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let arreglo = [];
  let nuevoNum = numero;
  let contador = 0;

  while (contador <= 10){
    arreglo.push(nuevoNum);
    nuevoNum = nuevoNum + 2;
      
    contador ++;
    if (nuevoNum === contador){
      return "Se interrumpió la ejecución";
      break;
    }
    
  }

  return arreglo;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let arreglo = [];
  let nuevoNum = numero;
  let contador = 0;

  while (contador <= 10){
    if (contador === 5){
      continue;
    }
    arreglo.push(nuevoNum);
    nuevoNum = nuevoNum + 2;
      
    contador ++;
    if (nuevoNum === contador){
      return "Se interrumpió la ejecución";
      break;
    }
    
  }

  return arreglo;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
