// var num = parseFloat(prompt("ingrese numero"));
// var total = 1;

// for (var i = 1; i <= num; i++) {
//   total = total * i;
// }
// console.log("el factorial del numero " + num + " es: " + total);


const esParONo = (n) => {
  if(n % 2 == 0){
    document.write("el numero " + n + " es par")
  }else{
    document.write("el numero " + n + " no es par" )
  }
}

esParONo(prompt())

