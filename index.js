
//OBJECTS

let person = {
    firstName : 'Chandler',
    lastName : 'Bing',
    age : 34
} 

console.log(person.firstName)

let meal = {
    appy : 'rolls',
    entree : 'steak',
    dessert :'ice cream',
    drink : 'diet coke',
}

//const dessert = meal.dessert
const {dessert} = meal
const {drink: bestDrinkEver, appy, entree} = meal

// console.log(dessert, bestDrinkEver, appy, entree)

// for (let key in meal){
//     console.log(`For my ${key} I had ${meal[key]}`)
// }

person.job = 'circus clown'

person.pets = ['hamster', 'bird', 'fish']
//person['pets'] = ['hamster', 'bird', 'fish']

console.log(person)

delete meal.dessert
//console.log(meal)



//CLASSES

//create a class
class Pet{
    constructor(name, age){ //values from instance
        this.name = name;
        this.age = age;
    } //this.key = value
}

class Dog extends Pet{
    constructor(name, age, breed){
        super(name, age) //calls the parent constructor
        this.breed = breed
    }

    bark(){
        console.log(`Bark! My name is ${this.name}`)
    }
}

//let's run this a create a pet. 
let gus = new Dog('Gus', 2, 'Bernadoodle') 
//we're calling the constructor, not the class
console.log(gus)
gus.bark()


//  METHODNAME(PARAMS){
//   CODE BLOCK
//  }
//}
