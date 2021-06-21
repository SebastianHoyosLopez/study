/*console.log("Hola Mundo!");
console.log("Soy el primer script");
let mensaje = `
  hola mundo 
  Qué facil es incluir 'comillas simples' 
  y "comiillas dobles" `;
alert(mensaje);*/

/*Crear un array llamado meses y que almacene el 
nombre de los doce meses del año. Mostrar por pantalla 
los doce nombres utilizando la función console.log().*/

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

/*A partir del siguiente array que se proporciona: 
var valores = [true, 5, false, "hola", "adios", 2]*/

/* 1.Determinar cual de los dos elementos de texto es mayor
2.Utilizando exclusivamente los dos valores booleanos del array,
 determinar los operadores necesarios para obtener un resultado
 true y otro resultado false
3.Determinar el resultado de las cinco operaciones matemáticas
 realizadas con los dos elementos numéricos*/

/* const valores = [true, 5, false, "hola", "adios", 2]

 const res1 = (p1, p2) => {

  if(p1 > p2){
    console.log(p1, " es mayor que ", p2, valores[2])
  }else{
    console.log(p2, " es mayor que ", p1, valores[0])
    valores[2]
  }
 } 

const hola = valores[3].length
const adios = valores[4].length

 res1(hola, adios)

 const res3 = () => {
   console.log(valores[1] * valores[5])
   console.log(valores[1] + valores[5])
   console.log(valores[1] - valores[5])
   console.log(valores[1] / valores[5])
   console.log(valores[1] % valores[5])
 }

 res3()*/

/*---------------------------------------------------------*/
/*
var numero1 = 5;
var numero2 = 8;

if (numero2 > numero1) {
  console.log("numero1 no es mayor que numero2");
}

if(numero2 > 0) {
  console.log("numero2 es positivo");
}

if(numero1 !== 0) {
  console.log("numero1 es negativo o distinto de cero");
}

if(numero1 + 1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

--------------------------------*/
var n = prompt()

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log(factorialRecursivo(n))