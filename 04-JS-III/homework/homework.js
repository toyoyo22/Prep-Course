// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array[array.length-1];

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

   for (let index = 0; index < array.length; index++) { // index++ --> index = index + 2;
     array[index] = array[index]+1;
    }
    return array;

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
  var palabranueva = palabras[0];
  for (var i = 1; i < palabras.length; i++){       
    palabranueva = palabranueva  +" "+ palabras[i]; // palabraNueva += " " + palabras[i]  // 
  }
  return palabranueva;
}




function arrayContiene(array, elemento) {  // ^[5, 2, 1] 1
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    for (let index = 0; index < array.length; index++) {
      if (array[index] == elemento) {
        return true
      }
      
    }
      return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    resultado = resultado + numeros[i];
    
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    resultado = resultado + resultadosTest[i];
      }
      return resultado/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var otroNumero = 0;
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > otroNumero){
      otroNumero = numeros[i];
    }    
  }
    return otroNumero;
  
}


function multiplicarArgumentos() {   // {nombre: "Carlos", apellido: "Marquez"}
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var a = 1;
  if (arguments.length < 1) return 0;
  if (arguments) {
    
    for (let i = 0; i < arguments.length; i++) {
      a = a * arguments[i];      
    }  
  }  
  return a;

}


function cuentoElementos(arreglo){ // [1, 15, 18, 25]
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var nuevoArreglo = arreglo.filter(function (elemento){
    return  elemento > 18;
  })
  
  
    return nuevoArreglo.length;
}

  
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
    switch (numeroDeDia) {
      case 7:
      case 1:
      return "Es fin de semana";
        break;    
        
      default:
        return "Es dia Laboral"
        break;
    }



  
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n.toString()[0] == 9 ){
    return true;
  }else{
    return false; 
  }
}
//      [2, 2, 2, 8, 5, 8]    i + 1     if (arreglo[i] !== arreglo[j]) return false;
//var                i
//var                   j
function todosIguales(arreglo) {   
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  for (let i = 0; i < arreglo.length; i++){ {
    if( arreglo[i] == arreglo[i+1])
      return true
    
  } }
  return false; 


} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  nuevoArray=[];
  for (let i = 0; i < array.length; i++) {
    if(array[i] == "Enero" || array[i] == "Marzo"|| array[i] == "Noviembre"){
      nuevoArray.push(array[i]);
    }
  }
  if (nuevoArray.length < 3) {
      return "No se encontraron los meses pedidos";
  }
  return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoArray=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
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
    contador = 0;
    array= [];
    while (contador < 10) {
      contador++;
      numero = numero + 2;
      array.push(numero);
      if (numero == contador) {
        return "Se interrumpió la ejecución";
        break
        
      }
      
    }
      return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  contador = 0;
    array= [];
    while (contador < 10) {
      contador++;
    if (contador == 5) {
       continue;        
      }
      numero = numero + 2;
      array.push(numero);
      
      
    }
      return array;
  
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
