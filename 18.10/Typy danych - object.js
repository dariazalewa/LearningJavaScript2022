document.write("Typ złożony składający się z wielu prostych.<br> Można tworzyć na dwa sposoby.<br>");
            let person = new Object();
            person.name = "Kamil";
            person.age = 31;

            let person2 = {
            name: "Leila",
            age: 25};

        console.log(person);
        console.log(person2);
        console.log(person.age);
        console.log(person2.name);