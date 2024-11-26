const text = prompt("Write a text:"); // Solicita al usuario que escriba un texto y lo almacena en la variable 'text'
let count = 0; // Inicializa un contador para las vocales en 0
let check = 0; // Inicializa un índice para recorrer el texto en 0

switch (true) { // Utiliza un `switch` siempre verdadero para envolver toda la lógica
    case true: // Primera y única opción del `switch` que siempre se ejecutará
        while (check < text.length) { // Itera mientras el índice sea menor a la longitud del texto
            switch (text[check].toLowerCase()) { // Convierte el carácter actual a minúscula y verifica si es una vocal
                case 'a': // Caso para la vocal 'a'
                case 'e': // Caso para la vocal 'e'
                case 'i': // Caso para la vocal 'i'
                case 'o': // Caso para la vocal 'o'
                case 'u': // Caso para la vocal 'u'
                    count++; // Incrementa el contador si encuentra una vocal
                    break; // Sale del switch interno al contar la vocal
                default: // Caso por defecto para caracteres que no son vocales
                    break; // No hace nada y continúa con el siguiente carácter
            }
            check++; // Avanza al siguiente carácter del texto
        }
        alert(`The number of vowels in the text is: ${count}`); // Muestra un mensaje con la cantidad de vocales encontradas
        console.log(`The number of vowels in the text is: ${count}`); // Imprime la cantidad de vocales encontradas en la consola
        break; // Finaliza la ejecución del caso en el `switch`
}
