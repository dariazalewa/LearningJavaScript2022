console.log(1 == 1); //true
console.log("czesc" == "czesc"); //true

console.log(1 == "1"); //true
document.write("Jest tutaj true, ponieważ liczba została przekonwertowana na string'a, więc porównuje 1 z 1.");

console.log(1 === "1"); //false
document.write("Natomiast tutaj daliśmy tzw.strict equality operator ( === ), który pierwsze co zrobi to sprawdza typ zmiennej.<br> Jeśli po obydwu stronach nie będą takie same, to zwraca false.");