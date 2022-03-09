# Índice

1. [Introducción.](#id1)
2. [Desarrollo de ejercicios solicitados.](#id2) \
   a. [Ejercicio 1.](#id3) \
   b. [Ejercicio 2.](#id4) \
   c. [Ejercicio 3.](#id5) \
   d. [Ejercicio 4.](#id6) \
   e. [Ejercicio 5.](#id7) \
   f. [Ejercicio 6.](#id8) \
   g. [Ejercicio 7.](#id9) \
   h. [Ejercicio 8.](#id10) \
   i. [Ejercicio 9.](#id11) \
   j. [Ejercicio 10.](#id12)


## // Introdución <a name="id1"></a>

Para la realización de la cuarta práctica de la asignatura `Desarrollo de Sistemas Informáticos`, ha sido necesaria la lectura de documentos y la 
visualización de vídeos, necesarios para el uso de ciertas características requeridas durante el desarrollo de este cuarto proyecto programado en 
`TypeScript`.

El *primer* documento, se trata de la herramienta para documentación de desarrollos, denominada como `TypeDoc`. El uso de esta herramienta en 
concreto, ya fue empleada para la realización del tercer proyecto de la asignatura. Esta herramienta, ha permitido documentar las funciones 
desarrolladas en cada ejercicio solicitado, a través de la generación automática de código **HTML** y **CSS**, a partir de los comentarios realizados 
en cada fichero.

El *segundo* documento, se trata de la herramienta para el desarrollo dirigido por **pruebas** (TDD) o desarrollo dirigido por **comportamiento** (BDD)
. Esto se puede lograr, gracias al empleo de `Mocha` y `Chai`, la primera de ellas se trata de una herramienta que permite un marco de pruebas para 
JavaScript, mientras que el segundo, se trata de una librería que permite la realización de desarrollo dirigido por pruebas o desarrollo dirigido por 
comportamiento.

## // Desarrollo de los distintos ejercicios solicitados <a name="id2"></a>

Tras la lectura de los documentos y la visualización de los vídeos, se da paso a la realización de los distintos ejercicios solicitados en el [guión](https://ull-esit-inf-dsi-2122.github.io/prct04-arrays-tuples-enums/)
de la práctica 4 de la asignatura.

Para ello, haciendo uso de la estructura básica de proyecto TypeScript, el desarrollo de los distintos ejercicios, ha de ser introducido en el 
directorio `./src` del proyecto. Además, debe de ser creado un directorio `./doc`, conteniendo la documentación de los distintos ejercicios, y, un 
directorio `./tests`, conteniendo las distintas pruebas del código desarrollado.

### /// Ejercicio 1 - Tablas de multiplicar <a name="id3"></a>

Para este primer ejercicio, se ha de crear una función denominada como `productTable`, que recibe un número mayor que 1, que permite devolver el 
número de tablas de multiplicar, y el número de valores que va a contener cada tabla, a partir, del número introducido como parámetro para la función.

Esto anterior, se puede conseguir a partir de dos variables `i` y `j`, que permiten que, a partir de dos bucles seguidos se pueda incrementar el valor 
de i para que vaya reproduciendo cada tabla de multiplicar, es decir, la tabla del 1, del 2, del 3, etc. Mientras que, la variable j, en el otro 
bucle, se encarga de reproducir cada tabla de multiplicar. Por ejemplo, para la **tabla del 1**: `1 * 1, 1 * 2, 1 * 3` , etc. Todo esto anterior, gracias al valor de j. Por último, hay que tener en cuenta, que ambos valores, se limitan al valor **N** que ha sido introducido.

Todo esto anterior, se puede observar en el desarrollo de la siguiente función:

```
function productTable(numberN: number): number[][] {
  if (numberN < 1) {
    const error: number[][] = [[1]]; 
    console.log(`El número que ha sido introducido no está permitido`);
    return error;
  }
  const result: number[][] = []; 
  let auxiliaryResult: number[] = [];
  let i: number = 1;
  let j: number = 1;
  let auxiliaryCounter: number = numberN;
  while (auxiliaryCounter > 0) {
    let product: number;
    while (j <= numberN) {
      product = i * j;
      auxiliaryResult.push(product);
      j++;
    }
    result.push(auxiliaryResult);
    auxiliaryResult = [];
    i++;
    j = 1;
    auxiliaryCounter--;
  }
  return result;
}
```

Tras el desarrollo de la función anterior, se puede ver el testeo de dicha función, en la imagen a continuación:
![ejercicio-1-start](https://user-images.githubusercontent.com/72341631/157554793-6a1a3154-132b-4445-a47e-8a38faff5324.png)

![ejercicio-1-test](https://user-images.githubusercontent.com/72341631/157554811-aaa0da6a-3a4d-449e-9472-e04a994d529b.png)

### /// Ejercicio 2 - Compresión de números en rangos <a name="id4"></a>

En el segundo ejercicio, se ha de desarrollar la función denominada como `fromArrayToRanges`. Esta, recibe un array de números enteros, y se encarga 
de devolver una cadena, dónde, el array original ha sido comprimido de manera que aquellos valores que se encontraban próximos entre si, los ha unido, 
de manera, que ha formado un rango de valores.

En esta función, se hace uso de dos variables principales, que, para este caso, se denominan como `firstNumber` y `lastNumber`. Estas variables, se 
encargan de comprobar si, una serie de valores del vector, se encuentras de manera consecutiva, para ello, cuando el último número se encuentra con 
que, al cambiar de valor, este nuevo valor no tiene nada que ver con el conjunto de valores anterior, esta función genera un rango entre el primer 
número comprobado y el anterior al último a comprobar.

Con esto anterior, se puede genera la cadena de rangos resultante. Esto queda plasmada a continuación:

```
function fromArrayToRanges(arrayToConvert: number[]): string {
  let result: string = ``;
  let i: number = 0;
  let firstNumber: number = arrayToConvert[0];
  let lastNumber: number = arrayToConvert[0];
  let auxiliary: number = 0;
  while (i != arrayToConvert.length) {
    auxiliary = arrayToConvert[i];
    if (auxiliary === lastNumber) {
      lastNumber = lastNumber + 1;
    } else {
      if (firstNumber !== (lastNumber - 1)) {
        result = result + firstNumber;
        result = result + `_`;
        result = result + (lastNumber - 1);
        result = result + `,`;
        firstNumber = arrayToConvert[i];
        lastNumber = arrayToConvert[i];
      } else {
        result = result + firstNumber;
        result = result + `,`;
        firstNumber = arrayToConvert[i];
        lastNumber = arrayToConvert[i];
      }
      lastNumber = lastNumber + 1;
    }
    if (i === (arrayToConvert.length - 1)) {
      if (firstNumber !== (lastNumber - 1)) {
        result = result + firstNumber;
        result = result + `_`;
        result = result + (lastNumber - 1);
      } else {
        result = result + firstNumber;
      }
      lastNumber = lastNumber + 1;
    }
    i++;
  }
  return result;
}
```

Por otro lado, se debe de desarrollar otra función que permite la conversión de una cadena de rangos a un vector de valores que representan dicha 
cadena de rangos. Esta función se denomina como `fromRangesToArray`.

Para este caso, se realiza la operación contraria, la variable `firstNumber` y `lastNumber`, se encarga de generar los valores que se encuentran 
comprendidos entre dicho rango, es por ello que, al generar dichos valores, ambos son introducidos al vector resultante.

A continuación, se puede ver dicha función:

```
function fromRangesToArray(stringToConvert: string): number[] {
  const resultArray: number[] = [];
  let i: number = 0;
  let firstNumber: number = +stringToConvert[0];
  let lastNumber: number = 0;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === `_`) {
      let aux: number = i + 1;
      aux++;
      if ((stringToConvert[aux] !== `,`) && (stringToConvert[aux] !== `_`)) {
        let auxiliaryConvert: string = ``;
        aux--;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        aux++;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        lastNumber = +auxiliaryConvert;
      } else {
        aux--;
        lastNumber = +stringToConvert[aux];
      }
    } else if (stringToConvert[i] === `,`) {
      let aux: number = i + 1;
      aux++;
      if ((stringToConvert[aux] !== `,`) && (stringToConvert[aux] !== `_`)) {
        let auxiliaryConvert: string = ``;
        aux--;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        aux++;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        firstNumber = +auxiliaryConvert;
        lastNumber = +auxiliaryConvert;
      } else {
        aux--;
        firstNumber = +stringToConvert[aux];
        lastNumber = +stringToConvert[aux];
      }
    } else if (stringToConvert[i] === `-`) {
      let aux: number = i + 1;
      let auxiliaryConvert: string = ``;
      auxiliaryConvert = auxiliaryConvert + stringToConvert[i];
      auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
      aux++;
      if (stringToConvert[aux] === `,`) {
        firstNumber = +auxiliaryConvert;
        lastNumber = +auxiliaryConvert;
      } else if (stringToConvert[aux] === `_`) {
        firstNumber = +auxiliaryConvert;
      }
    }
    while (firstNumber <= lastNumber) {
      resultArray.push(firstNumber);
      firstNumber++;
    }
    i++;
  }
  return resultArray;
}
```

El testeo y ejecución de ambas funciones, se puede observar en la siguiente imagen:
![ejercicio-2-start](https://user-images.githubusercontent.com/72341631/157554858-85faef69-db77-4338-90fa-960244a25a2b.png)

![ejercicio-2-test](https://user-images.githubusercontent.com/72341631/157554874-f51bcbfb-abf5-437e-bcf4-841a7d0b20eb.png)

### /// Ejercicio 3 - Decodificar resistencias <a name="id5"></a>

En este tercer ejercicio, se realiza la función `decodeResistor`. Esta, permite decodificar el valor de cualquier resistor o resistencia, que tengan 
un estándar de bandas de colores. Como resultado, a partir del color de las bandas introducidas, se obtiene el valor en Ohmios de las resistencias.

Con todo esto anterior, la función se encarga de tomar los primeros dos valores de las bandas de colores. A partir de ello, dependiendo de los colores 
que sean, se asignará cierto valor para cada color existente.

Esto, se puede observar en el desarrollo de la función:

```
function decodeResistor(firstColour: string,
    secondColour: string, ...restColours: string[]): number {
  enum resistorColours {
    Negro = `Negro`,
    Marrón = `Marrón`,
    Rojo = `Rojo`,
    Naranja = `Naranja`,
    Amarillo = `Amarillo`,
    Verde = `Verde`,
    Azul = `Azul`,
    Violeta = `Violeta`,
    Gris = `Gris`,
    Blanco = `Blanco`
  }

  let auxiliary: string = firstColour;
  let auxiliaryResult = ``;
  let i: number = 0;
  while (i < 2) {
    switch (auxiliary) {
      case resistorColours.Negro:
        auxiliaryResult = auxiliaryResult + `0`;
        break;
      case resistorColours.Marrón:
        auxiliaryResult = auxiliaryResult + `1`;
        break;
      case resistorColours.Rojo:
        auxiliaryResult = auxiliaryResult + `2`;
        break;
      case resistorColours.Naranja:
        auxiliaryResult = auxiliaryResult + `3`;
        break;
      case resistorColours.Amarillo:
        auxiliaryResult = auxiliaryResult + `4`;
        break;
      case resistorColours.Verde:
        auxiliaryResult = auxiliaryResult + `5`;
        break;
      case resistorColours.Azul:
        auxiliaryResult = auxiliaryResult + `6`;
        break;
      case resistorColours.Violeta:
        auxiliaryResult = auxiliaryResult + `7`;
        break;
      case resistorColours.Gris:
        auxiliaryResult = auxiliaryResult + `8`;
        break;
      case resistorColours.Blanco:
        auxiliaryResult = auxiliaryResult + `9`;
        break;
    }
    auxiliary = secondColour;
    i++;
  }
  const decimalResul: number = +auxiliaryResult;
  return decimalResul;
}
```

El testeo y ejecución de dicha función se puede observar en la imagen incluida a continuación:
![ejercicio-3-start](https://user-images.githubusercontent.com/72341631/157554891-363def94-125b-4d2a-a2d3-8a87ff44e20b.png)

![ejercicio-3-test](https://user-images.githubusercontent.com/72341631/157554902-a7be4579-2c7d-455d-9d93-ccd1b8d59fe2.png)

### Ejercicio 4 - Palabras encadenadas en un array <a name="id6"></a>

En este cuarto ejercicio, se desarrolla la función `meshArray`. Esta función, permite devolver si un vector de cadenas, tiene la característica de que 
todas sus cadenas están encadenadas unas con otras, además, devuelve como resultado una cadena de aquellos caracteres que generan que todas las 
cadenas estén encadenadas entre si.

Para el desarrollo de la función, se tienen dos varibles principales, denominadas como `firstWord` y `secondWord`. La primera de ellas, se encarga de 
comprobar caracter por caracter la primera cadena, hasta encontrar que, algún caracter de la segunda cadena coindicide. Una vez se produce esto, la 
segunda variable comienza a recorrer la segunda cadena a comprobar, mientras que, la primera cadena también continua recorriendo, para comprobar si 
todos los caracteres a partir del cual se produce la primera coincidencia, son iguales. Si se produce que, en algún punto, algunos de los caracteres 
no coincide, se produce que las cadenas no están encadenadas.

Todo esto anterior, queda plasmado en la siguiente función:

```
function meshArray(meshWords: string[]): string {
  let auxiliary: number = 0;
  let result: string = ``;
  while (auxiliary < 3) {
    const firstWord: string = meshWords[auxiliary];
    auxiliary++;
    const secondWord: string = meshWords[auxiliary];
    let i: number = 0;
    let j: number = 0;
    let auxiliaryResult: string = ``;
    while (i != firstWord.length) {
      if (firstWord[i] === secondWord[j]) {
        auxiliaryResult = auxiliaryResult + firstWord[i];
        j++;
      } else {
        j--;
        if ( j === -1) {
          j = 0;
        }
        if (firstWord[i] === secondWord[j]) {
          auxiliaryResult = ``;
          auxiliaryResult = auxiliaryResult + firstWord[i];
          j++;
        // eslint-disable-next-line max-len
        } else if ((firstWord[i] !== secondWord[j]) && (i === (firstWord.length - 1))) {
          return `1`; // This identify that there is an error
        }
      }
      i++;
    }
    result = result + auxiliaryResult;
  }
  return result;
}
```

El testeo de la función y su ejecución, se puede ver en la imagen a continuación:
![ejercicio-4-start](https://user-images.githubusercontent.com/72341631/157554924-3f67294e-7596-4f0f-8f8b-3f95122b2da7.png)

![ejercicio-4-test](https://user-images.githubusercontent.com/72341631/157554930-1892fff1-3a95-484f-a8df-626bf8125c53.png)

### /// Ejercicio 5 - Calcular la media y concatenar cadenas <a name="id7"></a>

Para el quinto ejercicio, se genera la función `meanAndConcatenate`. Esta, permite agrupar los caracteres y los números de cualquier array que ha sido 
introducido de manera desordenada. Pero, hay que tener en cuenta que, el array resultante, devulve la media de todos los valores numéricos 
introducidos, junto con, la agrupación de los distintos caracteres.

En este desarrollo, la función se encarga de recorrer el array introducido, de manera que, por cada interacción determine el tipo de valor que se está 
obteniendo, con ello, se produce, la agrupación de los valores de tipo numérico, para que, finalmente se pueda realizar la media de estos, y, por otro 
lado, se está produciendo la agrupación de los distintos caracteres.

Esta función se puede observar a continuación:

```
function meanAndConcatenate(arrayToConvert: (number |
    string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  let i: number = 0;
  let auxiliaryNumber: number = 0;
  let decimalResult: number = 0;
  let counter: number = 0;
  let auxiliaryString: string = ``;
  let stringResult: string = ``;
  while (i != arrayToConvert.length) {
    if (typeof arrayToConvert[i] === "number") {
      auxiliaryNumber = + arrayToConvert[i];
      decimalResult = decimalResult + auxiliaryNumber;
      counter++;
    } else if (typeof arrayToConvert[i] == "string") {
      auxiliaryString = arrayToConvert[i] as string;
      stringResult = stringResult + auxiliaryString;
    }
    i++;
  }
  decimalResult = decimalResult / counter;
  result.push(decimalResult);
  result.push(stringResult);
  return result;
}
```

La ejecución y el testeo de la función, se puede observar a continuación:
![ejercicio-5-start](https://user-images.githubusercontent.com/72341631/157554949-46a8dbf4-38fd-4400-8f95-c8e01898b070.png)

![ejercicio-5-test](https://user-images.githubusercontent.com/72341631/157554953-5983e129-82ab-4ed2-9f44-cc730f65090b.png)

### Ejercicio 6 - Mover los ceros al final <a name="id8"></a>

En este sexto ejercicio, se realiza la función `moveZeros`. Esta función, ordena los ceros que se encuentran dentro de un vector que ha sido  
introducido, poniendo estos ceros, al final del vector.

El desarrollo de esta función, lleva a que, se recorra el vector que ha sido introducido, y, haciendo uso de un contador, se cuenta el número de ceros 
que se encuentran dentro del vector original. Y, haciendo uso de un vector auxiliar, se introducen los valores del vector original, mientras que, al 
final, son introducidos todos los ceros que se encontraban dentro del vector original.

La función, se puede observar a continuación:

```
function moveZeros(arrayToConvert: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let counter: number = 0;
  while (i != arrayToConvert.length) {
    if (arrayToConvert[i] === 0) {
      counter++;
    } else {
      result.push(arrayToConvert[i]);
    }
    i++;
  }
  i = 1;
  while (i <= counter) {
    result.push(0);
    i++;
  }
  return result;
}
```

El testeo y la ejecución de esta, se puede ver en la imagen adjuntada a continuación:
![ejercicio-6-start](https://user-images.githubusercontent.com/72341631/157554974-3caf41b9-75da-41ba-b2ef-311252e83724.png)

![ejercicio-6-test](https://user-images.githubusercontent.com/72341631/157554981-96ab0ef3-d32d-4ae5-b986-0b5c39453b28.png)

### Ejercicio 7 - Factoria de multiplicaciones <a name="id9"></a>

En el séptimo ejercicio, se desarrolla la función `multiplyAll`. Esta, se encarga de tomar un vector de valores, para devolver, otro vector de 
valores, pero, esta vez, todos los valores multiplicados por un número **N**.

Para esta función, se debe de retornar una función, que, a su vez, haciendo uso del número que le es pasado como parámetro. Realiza la multiplicación 
de todos los números del array introducido por dicho valor.

El desarrollo de dicha función se puede ver a continuación:

```
function multiplyAll(arrayToMultiply: number[]): (a: number) => number[] {
  return (num) => {
    const resultArray: number[] = [];
    let result: number = 0;
    let i: number = 0;
    while (i !== arrayToMultiply.length) {
      result = arrayToMultiply[i] * num;
      resultArray.push(result);
      i++;
    }
    return resultArray;
  };
}
```

La ejecución y el testeo de la función, se puede observar:
![ejercicio-7-start](https://user-images.githubusercontent.com/72341631/157554994-e9caa308-1a60-456e-a58b-112cb4c7924d.png)

![ejercicio-7-test](https://user-images.githubusercontent.com/72341631/157555001-6f03441a-c31c-452a-ad4d-7234ce376e8b.png)

### Ejercicio 8 - Puntos bi-dimensionales <a name="id10"></a>

Para este octavo ejercicio, se tienen una serie de funciones, que ha de ser desarrolladas. A partir, de un nuevo tipo de dato, denominado como 
`Point`, que, a su vez, posee dos coordenadas, `x` e `y`.

La primera de las funciones a realizar es `pointsAdd`. Esta función, se encarga de sumar las coordenadas de dos puntos que han sido introducidos como 
parámetros.

Como se puede observar a continuación:

```
function pointsAdd(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x + secondPoint.x;
  resultPoint.y = firstpoint.y + secondPoint.y;
  return resultPoint;
}
```

La segunda se denomina como `pointsSubtract`. Esta, a su vez, se encarga de restar las coordenadas de los dos puntos que han sido introducidos como 
parámetros.

El desarrollo de la función es:

```
function pointsSubtract(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x - secondPoint.x;
  resultPoint.y = firstpoint.y - secondPoint.y;
  return resultPoint;
}
```

La tercera de ellas, se denomina como `productOperation`. La función, multiplica las coordenadas de un punto introducido, por, un número.

Se puede observar:

```
function productOperation(pointToComprobe: point, numberToOperate: number): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = pointToComprobe.x * numberToOperate;
  resultPoint.y = pointToComprobe.y * numberToOperate;
  return resultPoint;
}
```

Por último, se realiza la función `euclideanDistance`. Esta función, a partir de dos puntos introducidos, realiza el cálculo de la distancia [Euclídea](https://es.wikipedia.org/wiki/Distancia_euclidiana) 
que existe entre ambos puntos.

Esta función, puede verse desarrollada a continuación:

```
function euclideanDistance(firstpoint: point, secondPoint: point): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  const resultX: number = (firstpoint.x - secondPoint.x) * (firstpoint.x - secondPoint.x);
  // eslint-disable-next-line max-len
  const resultY: number = (firstpoint.y - secondPoint.y) * (firstpoint.y - secondPoint.y);
  result = Math.sqrt(resultX + resultY);
  return result;
}
```

La ejecución y el testeo de todas las funciones anteriores, se pude ver en la siguiente imagen:
![ejercicio-8-start](https://user-images.githubusercontent.com/72341631/157555023-0d895914-d55b-4e16-8d78-f2a10e304d56.png)


### /// Ejercicio 9 - Puntos n-dimensionales <a name="id11"></a>

Este noveno ejercicio, desarrolla, exactamente las mismas funciones que el ejercicio anterior (ejercicio 8). Pero, en este caso, los puntos 
introducidos para las funciones, tienen la característica que no son de tipo x o y, sino que, tienen la característica de que pueden ser de tipo x, y ,
z y más.

Con todo esto anterior especificado, hay que tener en cuenta que la nueva declaración del tipo de dato `Point`, tiene que ser de la manera:

```
type npoint = {
    x: number;
    y: number;
    z: number;
    oderCoodinates?: number[];
  }
```

La primera función se denomina como `nPointsAdd`. Esta función, suma los valores de las **n** coordenadas que se encuentren dentro de los dos puntos 
introducidos.

Esto anterior, queda plasmado a continuación:

```
function nPointsAdd(firstpoint: npoint, secondPoint: npoint): npoint {
  if (firstpoint.oderCoodinates?.length === secondPoint.oderCoodinates?.length) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = firstpoint.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = firstpoint.oderCoodinates?.pop() as number;
      result = result + auxiliaryNumber;
      auxiliaryNumber = secondPoint.oderCoodinates?.pop() as number;
      result = result + auxiliaryNumber;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = firstpoint.x + secondPoint.x;
    resultPoint.y = firstpoint.y + secondPoint.y;
    resultPoint.z = firstpoint.z + secondPoint.z;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = firstpoint.x + secondPoint.x;
    resultPoint.y = firstpoint.y + secondPoint.y;
    resultPoint.z = firstpoint.z + secondPoint.z;
    return resultPoint;
  }
}
```

La segunda, se denomina como `nPointsSubtract`. Esta, se encarga de restar todos los valores de las coordenadas de dos puntos que han sido 
introducidos.

```
function nPointsSubtract(firstpoint: npoint, secondPoint: npoint): npoint {
  if (firstpoint.oderCoodinates?.length === secondPoint.oderCoodinates?.length) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = firstpoint.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = firstpoint.oderCoodinates?.pop() as number;
      result = result - auxiliaryNumber;
      auxiliaryNumber = secondPoint.oderCoodinates?.pop() as number;
      result = result - auxiliaryNumber;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = firstpoint.x - secondPoint.x;
    resultPoint.y = firstpoint.y - secondPoint.y;
    resultPoint.z = firstpoint.z - secondPoint.z;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = firstpoint.x - secondPoint.x;
    resultPoint.y = firstpoint.y - secondPoint.y;
    resultPoint.z = firstpoint.z - secondPoint.z;
    return resultPoint;
  }
}
```

La tercera es `nProductOperation`. Esta función, multiplica todas las coordenadas de un punto introducido, por, un valor **n**.

Como se puede observar:

```
function nProductOperation(pointToComprobe: npoint, numberToOperate: number): npoint {
  if (pointToComprobe.oderCoodinates?.length !== 0) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = pointToComprobe.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = pointToComprobe.oderCoodinates?.pop() as number;
      result = auxiliaryNumber;
      result = result * numberToOperate;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = pointToComprobe.x * numberToOperate;
    resultPoint.y = pointToComprobe.y * numberToOperate;
    resultPoint.z = pointToComprobe.z * numberToOperate;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = pointToComprobe.x * numberToOperate;
    resultPoint.y = pointToComprobe.y * numberToOperate;
    resultPoint.z = pointToComprobe.z * numberToOperate;
    return resultPoint;
  }
}
```

Para finalizar, se desarrolla la función `nEuclideanDistance`. Esta, se encarga de calcular la distancia [Euclídea](https://es.wikipedia.org/wiki/Distancia_euclidiana)
, a partir, de los dos puntos que han sido introducidos.

La ejecución y el testeo de las funciones especificadas anteriormente, se puede observar:
![ejercicio-9-start](https://user-images.githubusercontent.com/72341631/157555045-53ae037f-1db7-47fc-aa15-bfe347c24c42.png)


### /// Ejercicio 10 - El Cartesiano <a name="id12"></a>

Finalmente, en el décimo ejercicio, se realiza la función `theCartesianWalk`. Esta función, se encarga de retornar si el camino que recomienda una 
aplicación desarrollada para los habitantes de Cartesia, permite retornar al punto de origen, y, además, realizar el paseo en un tiempo menor o 
equivalente a diez minutos.

En esta función, se tienen dos variables importantes para el desarrollo de esta. La primera es `xCoordinate`, y la otra es `yCoordinate`. Ambas 
variables, permiten comprobar si, a partir de un vector de coordenadas recibido como parámetro, se puede volver al punto de partida, y además, 
realizarlo en un tiempo menor o igual a diez minutos. Para ello, hay que tener en cuanta que se parte de las coordenadas (0,0), y que, dependiendo de 
la dirección en la que se dirija, esas coordenadas cambiaran, es por ello, que la coordenada resultante a la que tiene que equivaler el paseo, es a la 
inicial, es decir, siempre a (0,0). Si, no se produce esto, el camino recomendado por la aplicación, no es válido.

Todo esto especificado anteriormente, queda plasmado en la función desarrollada a continuación:

```
function theCartesianWalk(walkToComprobe: string[]): boolean {
  let counter: number = 0; // to comprobe if the walk is up to 10 minutes
  let xCoordinate: number = 0;
  let yCoordinate: number = 0;
  let i: number = 0;
  while (i !== walkToComprobe.length) {
    switch (walkToComprobe[i]) {
      case `n`:
        yCoordinate = yCoordinate + 1;
        counter++;
        break;
      case `s`:
        yCoordinate = yCoordinate - 1;
        counter++;
        break;
      case `e`:
        xCoordinate = xCoordinate + 1;
        counter++;
        break;
      case `o`:
        xCoordinate = xCoordinate - 1;
        counter++;
        break;
    }
    i++;
  }
  if ((xCoordinate === 0 && (yCoordinate === 0))) {
    if (counter <= 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

La ejecución y el testeo de esto anterior, queda representado en la siguiente imagen:
![ejercicio-10-start](https://user-images.githubusercontent.com/72341631/157555073-136cc2d9-4e35-408a-a2c4-387c7936f0d1.png)

![ejercicio-10-test](https://user-images.githubusercontent.com/72341631/157555091-a8c6894e-0747-4091-a20e-28c9b4eb26e9.png)

En `conclusión`, tras la realización de estos diez ejercicios, he conseguido aprender un poco más sobre el uso de los arrays, de las tuplas, de los enumerados, de los tipos de datos creados por el programador, del retorno de funciones a partir de una función, etc. Todo esto, me ha permitido aprender un poco más sobre todas las funcionalidades que presenta el lenguaje de programación `TypeScript`.

Además, me ha permitido conocer lo que son las pruebas o testeos (BDD) o (TDD), ya que ni en otros lenguajes de programación, ni en otras asignaturas he hecho uso de este tipo de pruebas, lo que, me parece bastante interesante de cara al desarrollo de grandes proyectos en este tipo de lenguaje.
