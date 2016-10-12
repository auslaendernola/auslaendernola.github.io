var animal = {};
animal.species = "sloth";
animal["name"] = "Karl";
animal.noises = [];
console.log(animal);


var noises = [];
noises[0] = "...";
noises.push("....");
noises[noises.length - 1] = ".....";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
noises.push("........");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack","honk","sneeze","woosh"]
};

animals.push(duck);
console.log(animals);

var crawfish = {
  species: "astakis astakis",
  name: "crawfish",
  noises: ["blurble", "boil"]
};
animals.push(crawfish);

var eisbaer = {
  species: "orsus polaris",
  name: "eisbaer",
  noises: ["wrath", "rage"]
};
animals.push(eisbaer);

console.log(animals);
console.log(animals.length);

var list = [];
//I chose an Array, because I will be storing multiple Variables.//
//In this Case, we will be storing our List of Friends.//

var friends = list;

function randomAnimal() {
 var random = animals[Math.floor(Math.random() * animals.length)];
  friends.push(random.name);
}

randomAnimal();
console.log(friends);
animal.friends = friends;

function search(name) {
  for ( var i = 0 ; i < animals.length ; i++ ) {
    if ( animal.name[i] === name) {
      return animal
    } else {
      return null;
    }
  }
}
console.log(search(crawfish));

function edit(animalName, object) {
  var index = animals.indexOf(animalName);
  if(index !== -1) {
    animals[index] = object;
  }
}
console.log(edit("fred", {}));




