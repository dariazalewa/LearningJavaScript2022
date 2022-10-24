let names = ["Mariusz","Dominik"]; //tablica o nazwie imiona
names.push("Błażej"); // 1 sposób na dodanie rzeczy do tablicy, po jej zdeklarowaniu tablicy
names.unshift("Andrzej"); //2 sposób - dodaje element na początku tablicy

let lastName= names.pop(); //pobiera ostatni element z tablicy i usuwa go
console.log(lastName);

console.log(names[0]); //wyświetlamy pierwszy element tablicy, bo w tablicach numerowanie zaczynamy od 0 nie 1
console.log(names[1]); //wyświetlamy drugi element tablicy
console.log(names[2]); //wyświetlamy trzeci element tablicy
console.log(names[3]); //wyświetlamy czwarty element tablicy