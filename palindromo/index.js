const palindromo = (wordCheck) => {
  let word = wordCheck.split("")
  let reverse = word.reverse();
  console.log(word);
  return wordCheck === reverse.join("") ? "si es un palindromo" : "no es un palindromo";
};

let wordInput = prompt()

console.log(palindromo(wordInput));
