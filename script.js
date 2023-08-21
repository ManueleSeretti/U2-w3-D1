class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lasttName = lastName;
    this.age = age;
    this.location = location;
  }
  static olderAge(x, y) {
    if (x > y) {
      console.log("il primo utente è più grande del secondo");
    } else {
      if (x < y) {
        console.log("il secondo utente è più grande del primo");
      } else {
        console.log("I due utenti hanno la stessa età");
      }
    }
  }
}
const utente1 = new User("Mario", "Rossi", 25, "Roma");
const utente2 = new User("Luca", "Verdi", 25, "Napoli");

User.olderAge(utente1.age, utente2.age);

//secondo esercizio

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  owners(x) {
    return x === this.ownerName;
  }
}
const pets = [];
const aggiungi = function (e) {
  e.preventDefault();
  petName = document.getElementById("petName").value;
  ownerName = document.getElementById("ownerName").value;
  species = document.getElementById("species").value;
  breed = document.getElementById("breed").value;
  const animal = new Pet(petName, ownerName, species, breed);
  for (i = 0; i < pets.length; i++) {
    if (animal.owners(pets[i].ownerName)) {
      console.log(pets[i].petName + " e " + petName + " hanno lo stesso padrone");
    }
  }

  pets.push(animal);

  const container = document.getElementById("lista");
  const li = document.createElement("li");
  li.innerText = `nome: ${petName}   proprietario:${ownerName}   specie:${species}   raza: ${breed}`;
  container.appendChild(li);

  e.target.reset();
};
