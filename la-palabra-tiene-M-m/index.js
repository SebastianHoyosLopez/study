const ComprobarMm = (word) => {
  let res;
  if (word === word.toUpperCase()) {
    res = "esta palabra solo contiene mayusculas";
  } else if (word === word.toLowerCase()) {
    res = "esta palabra solo contiene minusculas ";
  } else {
    res = "esta palabra esta formada por mayusculas y minusculas";
  }
  return res;
};

alert(ComprobarMm("HOLA MUNDO"));
alert(ComprobarMm("Hola Mundo"));
alert(ComprobarMm("hola mundo"));

// Definir una función que muestre información sobre una cadena 
// de texto que se le pasa como argumento. A partir de la cadena que
// se le pasa, la función determina si esa cadena está formada sólo
// por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
