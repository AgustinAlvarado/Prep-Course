// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    
  let resultado = [];
  let llaves = Object.keys(objeto);
  let valores = Object.values(objeto);

  for (let i = 0; i < llaves.length; i++){
      resultado.push([llaves[i], valores[i]]);
  }

    return resultado;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  let respuesta = {};
  let letras = [];

  for (let i = 0; i <string.length; i++){
   if (!letras.includes(string[i])){
    letras.push(string[i]);
   }
  }

  for (let j = 0; j < letras.length; j++){
    respuesta[letras[j]] = 0;

  }

  for (let k = 0; k < string.length; k++){
    respuesta[string[k]]++;
  }
  
  return respuesta;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let minusculas = "";

  let mayusculas = "";

  for (let i = 0; i < s.length; i++){
    if (s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i];
    }else{
      minusculas = minusculas + s[i];
    }
  }


  let nuevoString = mayusculas + minusculas;

  return nuevoString;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let palabras = [];
  let palabraInvertida = "";

  for (let i = 0; i < str.length; i++){
    if (i === (str.length - 1)){
      palabraInvertida = str[i] + palabraInvertida;
      palabras.push(palabraInvertida);
    } else if (str[i] != " "){
      palabraInvertida = str[i] + palabraInvertida;
    } else  {
      palabras.push(palabraInvertida);
      palabraInvertida = "";
    }
  }

  
  let frase = "";

  for (let l = 0; l < palabras.length; l++){
    if (l === 0){
      frase = palabras[l];    
    } else {
      frase = frase + " " + palabras[l]; 
    }
  }

  return frase;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  let numString = numero.toString()

  let primeros = "";
  let ultimos = "";

  if (numString.length % 2 === 0){
    for (let i = 0; i < (numString.length / 2); i++){
      primeros = primeros + numString[i];
    }
    for (let j = numString.length - 1; j >= (numString.length / 2); j--){
      ultimos = ultimos + numString[j];
    }

  } else {
    for (let i = 0; i <= ((numString.length - 1)/ 2); i++){
      primeros = primeros + numString[i];
    }
    for (let j = numString.length - 1; j >= ((numString.length - 1)/ 2); j--){
      ultimos = ultimos + numString[j];
    }

  }

  if (primeros === ultimos){
    
    return "Es capicua";

  } else {
    
    return "No es capicua";
  }


}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let nuevaString = "";

  for (let i = 0; i < cadena.length; i++){
    if (cadena[i] != "a" && cadena[i] != "b" && cadena[i] != "c"){
      nuevaString = nuevaString + cadena[i];
    }
  }

  return nuevaString;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

 
  let ordenada = arr.sort(function(a, b) {
    return a.length - b.length;
  })

  return ordenada;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let resultado = [];

  for(let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] === arreglo2[j]){
        resultado.push(arreglo1[i]);
      }
    }
  }

  return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

