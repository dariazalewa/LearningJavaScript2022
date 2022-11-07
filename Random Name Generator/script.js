const generate = () =>{
	const firstname = ["Artur", "Sławomir", "Janusz", "Patryk", "Daniel", "Przemysław", "Karol", "Roman", "Aleksander", "Wiesław", "Dominik", "Franciszek", "Alicja", "Maja", "Emilia", "Patrycja", "Izabela", "Marzena", "Klaudia", "Ewelina", "Weronika", "Oliwia", "Justyna", "Zuzanna"];
	const lastname= ["Bąk", "Zieliński/a", "Kędzierski/a", "Bielecki/a", "Janicki/a", "Domański/a", "Muszyński/a", "Wójcik", "Wieczorek", "Wiśniewski/a", "Marciniak", "Dobrowolski/a", "Walczak", "Kamiński/a", "Nowak", "Borowski", "Piotrowski/a", "Kowalik", "Jakubowski/a", "Adamski/a", "Kowalczyk", "Wilk", "Mazur", "Malinowski/a"];
	const rand_first = Math.floor(Math.random()*firstname.length); 
	const rand_last = Math.floor(Math.random()*lastname.length); 
	document.getElementById('result').innerHTML = "<h4>My name is:</h4><div class='alert alert-success'><h3>"+firstname[rand_first]+" "+lastname[rand_last]+"</h3></div>";
	
}
newName.addEventListener("click", generate);
  generate();
